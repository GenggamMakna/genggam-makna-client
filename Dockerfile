FROM node:23-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Echo contents of /app
RUN echo "===== List of files in /app =====" && ls -al /app

# Define ARG for build-time variables
ARG NEXT_PUBLIC_BASE_API_URL
ARG NEXT_PUBLIC_GOOGLE_CLIENT_ID

# Set runtime ENV variables from ARG
ENV NEXT_PUBLIC_BASE_API_URL=${NEXT_PUBLIC_BASE_API_URL}
ENV NEXT_PUBLIC_GOOGLE_CLIENT_ID=${NEXT_PUBLIC_GOOGLE_CLIENT_ID}

# Print environment variables for debugging
RUN echo "NEXT_PUBLIC_BASE_API_URL=${NEXT_PUBLIC_BASE_API_URL}"
RUN echo "NEXT_PUBLIC_GOOGLE_CLIENT_ID=${NEXT_PUBLIC_GOOGLE_CLIENT_ID}"

# Modify environment.js file
RUN sed -i "s|process.env.NEXT_PUBLIC_BASE_API_URL|'${NEXT_PUBLIC_BASE_API_URL}'|g" /app/src/utilities/environment.js \
  && sed -i "s|process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID|'${NEXT_PUBLIC_GOOGLE_CLIENT_ID}'|g" /app/src/utilities/environment.js

# Echo the modified environment.js file
RUN echo "===== Content of environment.js =====" \
  && cat /app/src/utilities/environment.js

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]

EXPOSE 8080