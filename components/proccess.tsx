"use client"
import React from "react"

import { AnimatePresence, motion } from "motion/react"
import { CanvasRevealEffect } from "@/components/ui/canvasRevealEffect"

export function Proccess() {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple"> approach</span>
      </h1>
      <div className=" flex flex-col lg:flex-row items-center justify-center gap-4 mt-10">
        <Card
          title="Planing & Strategy"
          icon={<AceternityIcon title="Phase 1" />}
          description="I begin by understanding the project's goals, target audience, and technical needs. This phase is all about defining a clear vision and building a strategy that sets the direction for a smooth development process."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Development & Progress Update"
          icon={<AceternityIcon title="Phase 2" />}
          description="With the plan in place, I start developing the project while keeping communication open. Regular updates ensure transparency, allow for timely feedback, and keep the project aligned with the original goals."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card
          title="Development and Launch"
          icon={<AceternityIcon title="Phase 3" />}
          description="After thorough testing and final tweaks, the project is deployed and launched. I ensure everything runs smoothly and is ready for real-world use, delivering a product that's reliable and ready to grow."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  )
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string
  icon: React.ReactNode
  children?: React.ReactNode
  description?: string
}) => {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[30rem] rounded-xl  "
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 ">
        <div className="  h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-center dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p
          style={{
            color: "efecff",
          }}
          className=" text-center font-light text-md opacity-0 group-hover/canvas-card:opacity-100 relative z-10  mt-4  group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {description}
        </p>
      </div>
    </div>
  )
}

const AceternityIcon = ({ title }: { title: string }) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          {title}
        </span>
      </button>
    </div>
  )
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  )
}
export default Proccess
