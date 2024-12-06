import { HeroGrid } from "@/components/HeroGrid"
import { SignUpContainer } from "@/components/SignUpContainer"

const Page = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="max-w-xl w-full h-[calc(100vh-_170px)]">
                <HeroGrid />
            </div>
            <div className="">
                <SignUpContainer />
            </div>
        </div>
    )
}

export default Page