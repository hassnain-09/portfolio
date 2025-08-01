"use client"
import { cn } from "@/lib/utils"
import { BackgroundGradientAnimation } from "./gradientBg"
import Lottie from "react-lottie"
import { useState } from "react"
import confetti from "@/data/confetti.json"
import MagicButton from "./magicButton"
import { IoCopyOutline } from "react-icons/io5"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[15rem] md:grid-cols-8  mb-10",
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,

  id,
  titleClassName,
  img,
  imgClassName,
  spareImg,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode

  id?: number
  titleClassName?: string
  img?: string
  imgClassName?: string
  spareImg?: string
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("reachhassnainali@gmail.com")
    setCopied(true)
  }
  return (
    <div
      className={cn(
        "group/bento relative  shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl border border-white/.3  transition duration-200 hover:shadow-xl dark:shadow-none overflow-hidden",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id == 6} && flex h-full`}>
        <div className="h-full w-full absolute">
          {img && (
            <img
              alt={img}
              src={img}
              className={` ${imgClassName} object-cover object-center`}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id == 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              alt={spareImg}
              src={spareImg}
              className={` object-cover object-center w-full h-full`}
            />
          )}
        </div>
        {id == 6 && <BackgroundGradientAnimation></BackgroundGradientAnimation>}
        <div
          className={`${titleClassName} transition duration-200 ${
            id !== 3 && "group-hover/bento:translate-x-2"
          } flex flex-col px-3 p-3 lg:p-5`}
        >
          <div className="font-sans text-sm md:text:xs font-extralight text-[#c1c2d3] lg:text-base z-10 ">
            {description}
          </div>
          <div className=" font-sans font-bold text-lg lg:text-2xl max-w-96 z-10">
            {title}
          </div>

          {id == 3 && (
            <div className="flex gap-2 lg:gap-3 w-fit absolute -right-0 lg:-right-2">
              <div className="flex flex-col gap-2 lg:gap-4">
                {["React.js", "Next.js", "Tailwind CSS"].map((item, index) => (
                  <span
                    key={index}
                    className="py-2 lg:py-3 lg:px-3 px-2 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 bg-[#10132E] rounded-lg text-center"></span>
              </div>
              <div className="flex flex-col gap-2 lg:gap-4">
                <span className="py-4 px-3 bg-[#10132E] rounded-lg text-center"></span>
                {["React.js", "Next.js", "Tailwind CSS"].map((item, index) => (
                  <span
                    key={index}
                    className="py-2 lg:py-3 lg:px-3 px-2 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0`">
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: confetti,
                    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                  }}
                />
              </div>
              <MagicButton
                title={`${copied ? "Copied!" : "Copy Email"}`}
                handleClick={handleCopy}
                icon={<IoCopyOutline />}
                position="left"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
