import React from "react"
import { BentoGrid, BentoGridItem } from "@/components/ui/bentoGrid"
import { FaCloud, FaLock, FaDatabase } from "react-icons/fa"
import { gridItems } from "@/data"

const MyGrid = () => {
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
