import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "../../data";

const Grid = () => {
  return (
    <section id="about" className="pt-4 pb-12 xl:pt-0 xl:pb-0 ">
      <BentoGrid>
        {/* {gridItems.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
          
        ))} */}

        <BentoGridItem
          id={1}
          key={1}
          title="I prioritize client collaboration, fostering open communication "
          description=""
          className="lg:col-span-2 md:col-span-3 md:row-span-4 lg:min-h-[60vh]"
          img="/b1.svg"
          imgClassName="w-full h-full"
          titleClassName="justify-end"
          spareImg=""
        />
        <BentoGridItem
          id={2}
          key={2}
          title="I'm very flexible with time zone communications"
          description=""
          className="lg:col-span-1 md:col-span-1 md:row-span-2"
          img=""
          imgClassName=""
          titleClassName="justify-start"
          spareImg=""
        />
        <BentoGridItem
          id={3}
          key={3}
          title="My tech stack"
          description="I constantly try to improve"
          className="lg:col-span-1 md:col-span-1 md:row-span-2"
          img=""
          imgClassName=""
          titleClassName="justify-start"
          spareImg=""
        />
      </BentoGrid>
    </section>
  );
};

export default Grid;
