'use client'

import { HeroBeamsBackground } from "@/components/HeroBeamsBackground"
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { GetUserData } from "@/utilities/getUserData"
import { ArrowUpRight } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Page = () => {
  const router = useRouter()
  const user_data = GetUserData()

  return (
    <div className="w-full">
      <HeroBeamsBackground>
        <div className="mx-auto p-4 space-y-4">
          <div className="max-w-2xl text-neutral-800">
            <h1 className="font-acorn text-7xl">
              Genggam Makna
            </h1>
            <div className="mt-3 text-sm ">

              <h3>
                Genggam Makna is an AI-powered platform designed to bridge communication gaps
              </h3>
              <Highlight className="text-black dark:text-white">
                by translating SIBI (Indonesian Sign Language) hand signs into the alphabet.
              </Highlight>
              <h3>
                Empowering accessibility and fostering inclusivity for a more connected world.
              </h3>

            </div>
          </div>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            onClick={() => {
              if (user_data.id) {
                router.push("/predict")
              } else {
                router.push("/auth/login")
              }
            }
            }
            className="bg-blue-50 text-[#333333] flex items-center space-x-2 shadow-lg hover:scale-105 transition-all duration-400"
          >
            <span className="text-[#333333] font-acorn text-lg px-3" variant="light">Try Now </span>
            <ArrowUpRight size={24} />
          </HoverBorderGradient>
        </div>
      </HeroBeamsBackground>
    </div>
  )
}

export default Page