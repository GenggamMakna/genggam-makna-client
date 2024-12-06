'use client'

import { useRouter } from "next/navigation"
import { FileUpload } from "@/components/ui/file-upload";
import { useState } from "react";

const Page = () => {
    const router = useRouter()
    const [files, setFiles] = useState([]);
    const handleFileUpload = (files) => {
        setFiles(files);
        console.log(files);
    };

    return (
        <div className="p-8 text-333">
            <div className="w-max mx-auto">
                <h1 className="font-acorn text-center text-5xl mt-10">
                    Predict SIBI Hand Signs
                </h1>
                <h3 className="text-sm text-center">
                    Upload an image or video of SIBI hand signs to translate it into text.
                </h3>
            </div>
            <div
                className="mt-8 w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-xl">
                <FileUpload onChange={handleFileUpload} />
            </div>
        </div>
    )
}

export default Page