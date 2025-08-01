import React from "react"
import { InfiniteMovingCards } from "./ui/infiniteMovingCards"
import { companies, testimonials } from "@/data"

const testimonial = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kinds words from{" "}
        <span className="text-purple">previous employeers</span>
      </h1>
      <div className="h-[65vh]  lg:h-[50vh] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />

        <div className="flex flex-row flex-wrap gap-4 md:gap-16 max-lg:mt-10 lg:mt-4 items-center justify-center">
          {companies.map(({ id, name, img, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <img src={img} alt={name} className="md:w-10 w-5" />
              <img src={nameImg} alt={name} className="md:w-20 w-10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default testimonial
