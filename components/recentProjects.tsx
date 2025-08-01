import { projects } from "@/data"
import React from "react"
import { PinContainer } from "./ui/3D-pin"
import { FaLocationArrow } from "react-icons/fa"

const recentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-7 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }, index) => {
          return (
            <div
              key={id}
              className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[500px] w-[80vw]"
            >
              <PinContainer title={title} href={link}>
                <div className="flex items-center justify-center relative sm:w-[500px] w-[80vw] sm:h-[40vh] h-[20vh]  overflow-hidden">
                  <div className="w-full h-full overlfow-hidden lg:rounded-3xl bg-[#13162d]">
                    <img src={"/bg.png"} />
                  </div>
                  <img src={img} className="z-10 absolute bottom-0" />
                </div>
                <h1 className="lg:text-2xl md:text-xl text-base line-clamp-1 font-bold mt-4">
                  {title}
                </h1>
                <p className=" md:font-normal lg:text-xl text-sm  line-clamp-2 mt-2 ">
                  {des}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[.2] bg-black lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center mr-1 last:mr-0 "
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}
                      >
                        <img src={icon} alt={`icon-${index}`} className="p-2" />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-lg text-sm  text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default recentProjects
