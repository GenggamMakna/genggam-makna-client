'use client'

import { useRouter } from "next/navigation"
import { FileUpload } from "@/components/ui/file-upload";
import { useEffect, useState } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { GetUserData } from "@/utilities/getUserData";
import { toast } from "sonner";
import { Tabs } from "@/components/ui/tabs";
import { ArrowUpRight } from "@phosphor-icons/react";
import fetchWithAuth from "@/utilities/fetchWithAuth";
import { BASE_API } from "@/utilities/environment";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";

const Page = () => {
    const [userData, setUserData] = useState({})
    const [currentType, setCurrentType] = useState("image")
    const [files, setFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [currentProgress, setCurrentProgress] = useState(0)
    const router = useRouter()

    const handleFileUpload = (files) => {
        setFiles(files);
    };

    const handleError = (message) => {
        toast.error(message)
    }

    useEffect(() => {
        const user_data = GetUserData()
        setUserData(user_data)
    }, [])

    const loadingStates = [
        { text: "Preparing for file upload" },
        { text: "Awaiting server response" },
        { text: "File is being uploaded" },
        { text: "Processing SIBI prediction" },
        { text: "SIBI prediction completed successfully" }
    ];

    const handlePredict = async () => {
        if (!predictValidation()) {
            return
        }

        setIsLoading(true)

        const formData = new FormData()
        formData.append(currentType, files)

        await new Promise(resolve => setTimeout(resolve, 100));
        setCurrentProgress(1)
        await new Promise(resolve => setTimeout(resolve, 100));
        setCurrentProgress(2)
        await new Promise(resolve => setTimeout(resolve, 100));
        
        try {
            const res = await fetchWithAuth(BASE_API + `/predict/${currentType}`, {
                method: "POST",
                body: formData,
            })
            setCurrentProgress(3)
            
            if (res.ok) {
                await new Promise(resolve => setTimeout(resolve, 100));
                setCurrentProgress(4)
                await new Promise(resolve => setTimeout(resolve, 1000));
                const data = await res.json()
                console.log({ data })
                toast.success("Prediction successful!")
            } else {
                toast.error("Something went wrong!")
            }
        } catch (err) {
            toast.error("Connection error!")
        } finally {
            setCurrentProgress(0)
            setIsLoading(false)
        }
    }

    const predictValidation = () => {
        if (files.length === 0) {
            toast.error("Please select a file to predict!")
            return false
        }

        return true
    }

    const tabs = [
        {
            title: "Image",
            value: "image",
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
            value: "video",
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
                    onChange={setCurrentType}
                    tabs={tabs}
                    predictButton={userData.id ? (
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            onClick={handlePredict}
                            className="bg-blue-50 text-[#333333] flex items-center space-x-2 shadow-lg hover:scale-105 transition-all duration-400"
                        >
                            <span className="text-[#333333] font-acorn text-lg px-3" variant="light">Predict </span>
                        </HoverBorderGradient>
                    ) : (
                        (
                            <HoverBorderGradient
                                containerClassName="rounded-full"
                                as="button"
                                onClick={() => router.push("/auth/login")}
                                className="bg-blue-50 text-[#333333] flex items-center space-x-2 shadow-lg hover:scale-105 transition-all duration-400"
                            >
                                <span className="text-[#333333] font-acorn text-lg px-3" variant="light">Login to Start </span>
                                <ArrowUpRight size={24} />
                            </HoverBorderGradient>
                        )
                    )} />
            </div>
            <MultiStepLoader loadingStates={loadingStates} loading={isLoading} currentState={currentProgress} />
        </div>
    )
}

export default Page