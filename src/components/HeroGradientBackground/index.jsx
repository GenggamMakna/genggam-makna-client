import React from "react";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

export function HeroGradientBackground() {
  return (
    (<BackgroundGradientAnimation gradientBackgroundStart="#60a5fa" gradientBackgroundEnd="#eff6ff">
      <div
        className="absolute z-50 inset-0 flex items-center justify-center text-333 font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p
          className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-333/80 to-333/20">
          Genggam Makna
        </p>
      </div>
    </BackgroundGradientAnimation>)
  );
}
