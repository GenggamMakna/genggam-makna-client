import { GOOGLE_CLIENT_ID } from '@/utilities/environment'
import { NextUIProvider } from '@nextui-org/react'
import { GoogleOAuthProvider } from '@react-oauth/google'

export function Providers({ children }) {
    return (
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <NextUIProvider>
                {children}
            </NextUIProvider>
        </GoogleOAuthProvider>
    )
}