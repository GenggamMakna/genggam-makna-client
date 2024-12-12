'use client'

import { FlipWords } from "@/components/ui/flip-words"
import { FocusCards } from "@/components/ui/focus-cards";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Page = () => {
    const words = ["care", "hope", "love", "unity"];

    const cards = [
        {
            title: "John Alessandro Jong",
            role: "Machine Learning",
            src: "/images/team/john.jpg",
        },
        {
            title: "Kevin Sipahutar",
            role: "Cloud Computing",
            src: "/images/team/kevin.png",
        },
        {
            title: "Rama Diaz",
            role: "Cloud Computing",
            src: "/images/team/rama.jpg",
        },
        {
            title: "Yulianto Aryaseta",
            role: "Machine Learning",
            src: "/images/team/seta.jpg",
        },
    ];

    const faq_data = [
        {
            question: "How does Genggam Makna work?",
            answer: "Genggam Makna uses advanced machine learning models to detect hand signs from photo input and translates them into corresponding letters in real-time."
        },
        {
            question: "Who can use Genggam Makna?",
            answer: "Genggam Makna is designed for everyone—students, educators, families, and organizations who want to bridge communication gaps with the hearing-impaired community."
        },
        {
            question: "Do I need to download any software?",
            answer: "No, Genggam Makna is a web-based platform. All you need is a device with an internet connection and a browser to access it."
        },
        {
            question: "How accurate is the hand sign translation?",
            answer: "Our platform uses state-of-the-art AI models to ensure high accuracy. However, results may vary depending on lighting, hand position, and image quality."
        },
        {
            question: "Is Genggam Makna free to use?",
            answer: "Yes, Genggam Makna is free to use, with all its basic features available to the public."
        },
    ]

    return (
        <div className="p-8">
            <div className="max-w-2xl mx-auto space-y-48">
                <div className="flex flex-col justify-center items-center mt-[15vh] p-4 space-y-4">
                    <div className="max-w-2xl text-neutral-800">
                        <div className="text-4xl sm:text-5xl text-333 font-acorn">
                            Empower
                            <FlipWords words={words} /> <br />
                            with{" "}
                            <span className="font-acorn">
                                Genggam Makna
                            </span>
                        </div>
                        <div className="mt-3 text-sm">
                            <h3 className="text-start">
                                Genggam Makna is an innovative AI-powered platform designed to bridge the communication gap between the hearing and speech-impaired community and the wider world. Our mission is to empower inclusivity by providing a tool that translates SIBI (Indonesian Sign Language) hand signs into the alphabet in real time.
                            </h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="space-y-6">
                        <h2 className="text-4xl sm:text-5xl text-333 font-acorn text-center">FAQ</h2>
                        <Accordion>
                            {faq_data.map((data, index) => (
                                    <AccordionItem key={index} title={data.question}>
                                        {data.answer}
                                    </AccordionItem>
                                )
                            )}
                        </Accordion>
                    </div>
                </div>
                <div className="space-y-6 pb-[15vh]">
                    <h2 className="text-4xl sm:text-5xl text-333 font-acorn text-center">Meet Our Team</h2>
                    <FocusCards cards={cards} />
                </div>
            </div>
        </div>
    )
}

export default Page