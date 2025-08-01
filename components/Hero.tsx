import React from "react"
import Spotlight from "./ui/Spotlight"
import MagicButton from "./ui/magicButton"
import { cn } from "@/lib/utils"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import { FaLocationArrow } from "react-icons/fa"

function Hero() {
  const words = "Transfroming Ideas into Seamless User Experiences"
  return (
    <div className="pb-20 pt-10">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen "
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw] "
          fill="purple"
        />
        <Spotlight className="top-28 left-80  h-[80vh] w-[50vw] " fill="blue" />
      </div>

      <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-black-100">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_2px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_2px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
        <div className="my-20">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
            <h2 className="tracking-wider uppercase text-xs text-center max-w-80">
              Dynamic and Engaging Web Experiences{" "}
            </h2>
            <TextGenerateEffect
              words={words}
              className="text-[40px] md:text-5xl lg:text-6xl font-bold "
            />
            <p className="text-center md:tracking-widest text-sm md:text-lg lg:text-2xl mb-4">
              Hi, I&apos;am Hassnain Ali , Web developer based in Pakistan
            </p>
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
