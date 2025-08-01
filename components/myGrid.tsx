import React from "react"
import { BentoGrid, BentoGridItem } from "@/components/ui/bentoGrid"
import { FaCloud, FaLock, FaDatabase } from "react-icons/fa"
import { gridItems } from "@/data"

const MyGrid = () => {
  const items = [
    {
      title: "Cloud Ready",
      description: "Deploy to the cloud with ease and flexibility.",
      icon: <FaCloud className="text-blue-600" />,
    },
    {
      title: "Secure by Design",
      description: "End-to-end encryption and secure protocols.",
      icon: <FaLock className="text-green-600" />,
    },
    {
      title: "Data Insights",
      description: "Gain insights from your data effortlessly.",
      icon: <FaDatabase className="text-purple-600" />,
    },
  ]

  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            titleClassName,
            img,
            imgClassName,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              titleClassName={titleClassName}
              img={img}
              imgClassName={imgClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  )
}

export default MyGrid
