"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";

export function HeroBeamsBackground({ children }) {
    return (
        (<div
            className="h-[calc(100vh-_97px)] w-full rounded-md bg-transparent relative flex flex-col items-center justify-center antialiased light">
            {children}
            <BackgroundBeams />
        </div>)
    );
}
