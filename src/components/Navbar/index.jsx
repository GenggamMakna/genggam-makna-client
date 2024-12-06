import { Button, Image } from "@nextui-org/react"

const Navbar = () => {
    return (
        <div className="flex flex-row justify-between items-center px-8 py-6">
            <Image 
                src="/logo/gm-light1.png" 
                isBlurred
                width={170}
                alt="GenggamMakna logo"
            />
            <div>
                Predict
            </div>
            <div>
                <Button className="bg-sky-600 text-white font-acorn" >Login</Button>
            </div>
        </div>
    )
}

export default Navbar