'use client'

import { Button, Image } from "@nextui-org/react"
import { HandWaving, House, Info } from "@phosphor-icons/react"
import { usePathname } from "next/navigation"

const Navbar = () => {
    const pathname = usePathname()

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
                <Button className="text-[#333333] font-acorn text-3xl" variant="light">Login</Button>
            </div>
        </div>
    )
}

export default Navbar