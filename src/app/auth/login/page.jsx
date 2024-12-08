import { HeroGrid } from "@/components/HeroGrid"
import { LogInContainer } from "@/components/LogInContainer"

const Page = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="max-w-xl w-full h-[calc(100vh-_170px)] hidden sm:block">
                <HeroGrid />
            </div>
            <div className="p-7 sm:p-0">
                <LogInContainer />
            </div>
        </div>
    )
}

export default Page