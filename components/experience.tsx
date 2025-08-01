import React from "react"
import { Button } from "./ui/movingBorder"
import { workExperience } from "@/data"

export const Experience = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        My
        <span className="text-purple"> Work Experience</span>
      </h1>
      <div className=" max-w-7xl mx-auto mt-10 grid md:grid-cols-4 gap-10">
        {workExperience.map((experience) => (
          <Button
            key={experience.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800 w-full"
          >
            <div className="flex md:flex-row flex-row lg:items-center p-3 py-6 md:py-5 lg:py-10 gap-2">
              <img
                src={experience.thumbnail}
                alt={experience.title}
                className="lg:w-32 md:w-20 w-16"
                key={experience.id}
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl lg:text-2xl font-bold">
                  {experience.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {experience.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}
