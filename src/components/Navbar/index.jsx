'use client'

import { Image } from "@nextui-org/react"
import { HandWaving, House, Info } from "@phosphor-icons/react"
import { usePathname, useRouter } from "next/navigation"
import { HoverBorderGradient } from "../ui/hover-border-gradient"

const Navbar = () => {
    const pathname = usePathname()
    const router = useRouter()

    return (
        <div className="flex flex-row justify-between items-center px-8 py-6">
            <Image
                src="/logo/gm-light1.png"
                isBlurred
                width={170}
                alt="GenggamMakna logo"
            />
            <div className="flex flex-row items-center gap-6">
                <House color="#333333" size={32} weight={pathname.endsWith("/") ? "fill" : "thin"} />
                <HandWaving color="#333333" size={32} weight={pathname.endsWith("/predict") ? "fill" : "thin"} />
                <Info color="#333333" size={32} weight={pathname.endsWith("/about") ? "fill" : "thin"} />
            </div>
            <div>
                <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    onClick={() => router.push("/auth/login")}
                    className="bg-blue-50 text-[#333333] flex items-center space-x-2 shadow-lg hover:scale-105 transition-all duration-400"
                >
                    <span className="text-[#333333] font-acorn text-lg px-3" variant="light">Login</span>
                </HoverBorderGradient>
            </div>
        </div>
    )
}

export default Navbar