import { Button } from "@nextui-org/react"

const Navbar = () => {
    return (
        <div className="flex flex-row justify-between items-center px-8 py-4">
            <div className="text-4xl font-acorn">Image</div>
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