'use client'

import { useRouter } from "next/navigation"
import { FileUpload } from "@/components/ui/file-upload";
import { useState } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { GetUserData } from "@/utilities/getUserData";
import { toast } from "sonner";
import { Tabs } from "@/components/ui/tabs";

const Page = () => {
    const user_data = GetUserData()
    const router = useRouter()

    const [files, setFiles] = useState([]);
    const handleFileUpload = (files) => {
        setFiles(files);
        console.log(files);
    };

    const handleError = (message) => {
        toast.error(message)
    }

    const tabs = [
        {
            title: "Image",
            value: "Image",
            content: (
                <div className="w-full overflow-hidden relative h-max rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-sky-300 to-blue-500">
                    <p className="font-acorn">Image Predict</p>
                    <div
                        className="mt-8 w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-xl">
                        <FileUpload onChange={handleFileUpload} onError={handleError} />
                    </div>
                </div>
            ),
        },
        {
            title: "Video",
            value: "Video",
            content: (
                <div className="w-full overflow-hidden relative h-max rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-sky-300 to-blue-500">
                    <p className="font-acorn">Video Predict</p>
                    <div
                        className="mt-8 w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-xl">
                        <FileUpload onChange={handleFileUpload} onError={handleError} currentFormat="video" />
                    </div>
                </div>
            ),
        },
    ];

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
            <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full mt-4 items-start justify-start">
                <Tabs
                    tabs={tabs}
                    predictButton={(<HoverBorderGradient
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
                    </HoverBorderGradient>)} />
            </div>
        </div>
    )
}

export default Page