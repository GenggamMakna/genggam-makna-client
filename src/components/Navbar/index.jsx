'use client'

import {
    Image,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button,
} from "@nextui-org/react"
import { HandWaving, House, Info, List } from "@phosphor-icons/react"
import { usePathname, useRouter } from "next/navigation"
import { HoverBorderGradient } from "../ui/hover-border-gradient"
import { GetUserData } from "@/utilities/getUserData"
import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import Link from "next/link"

const Navbar = () => {
    const pathname = usePathname()
    const router = useRouter()
    const [userData, setUserData] = useState({})

    useEffect(() => {
        const user_data = GetUserData()
        setUserData(user_data)
    }, [])

    const handleLogOut = () => {
        Cookies.remove('token')
        location.replace("/")
    }

    const menuItems = [
        {
            label: "Home",
            icon: <House />,
            href: "/",
        },
        {
            label: "Predict",
            icon: <HandWaving />,
            href: "/predict",
        },
        {
            label: "About",
            icon: <Info />,
            href: "/about",
        },
    ]

    const UserProfile = () => {
        return (
            <Dropdown>
                <DropdownTrigger>
                    <div className="flex flex-row items-center gap-4 text-333 cursor-pointer">
                        <div className="font-acorn text-xl">
                            {userData?.first_name + " " + userData?.last_name}
                        </div>
                        <Image
                            src="/images/default-avatar.jpg"
                            isBlurred
                            width={40}
                            radius="full"
                            alt="default avatar"
                        />
                    </div>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="logout" className="text-danger" color="danger" onClick={handleLogOut}>
                        Log Out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        )
    }

    const BurgerMenu = () => {
        return (
            <Dropdown backdrop="blur">
                <DropdownTrigger>
                    <Button isIconOnly variant="light">
                        <List size={32} color="#333333" />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu>
                    {
                        menuItems.map((menuItem, index) => (
                            <DropdownItem key={index} as={Link} href={menuItem.href}>
                                <div className="flex flex-row gap-2 items-center justify-start">

                                    {menuItem.icon}{menuItem.label}
                                </div>
                            </DropdownItem>
                        ))
                    }
                </DropdownMenu>
            </Dropdown>
        )
    }

    const LogInButton = () => {
        return (
            <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                onClick={() => router.push("/auth/login")}
                className="bg-blue-50 text-[#333333] flex items-center space-x-2 shadow-lg hover:scale-105 transition-all duration-400"
            >
                <span className="text-[#333333] font-acorn text-lg px-3" variant="light">Login</span>
            </HoverBorderGradient>
        )
    }


    return (
        <div className="flex flex-row justify-between items-center px-8 py-6">
            <div className="sm:hidden">
                <BurgerMenu />
            </div>
            <Image
                src="/logo/gm-light1.png"
                isBlurred
                width={170}
                alt="GenggamMakna logo"
                className="hidden sm:block"
            />
            <div className="hidden sm:flex flex-row items-center gap-6">
                <House onClick={() => router.push("/")} color="#333333" size={32} weight={pathname.endsWith("/") ? "fill" : "thin"} className="hover:scale-105 cursor-pointer" />
                <HandWaving onClick={() => router.push("/predict")} color="#333333" size={32} weight={pathname.endsWith("/predict") ? "fill" : "thin"} className="hover:scale-105 cursor-pointer" />
                <Info onClick={() => router.push("/about")} color="#333333" size={32} weight={pathname.endsWith("/about") ? "fill" : "thin"} className="hover:scale-105 cursor-pointer" />
            </div>
            <div>
                {
                    userData.id ? (<UserProfile />) : (<LogInButton />)
                }
            </div>
        </div>
    )
}

export default Navbar