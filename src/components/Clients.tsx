import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "../../data";

const Clients = () => {
  return (
    <div className="py-20" id="clients">
      <h1 className="flex flex-col items-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white">
        Kind words from
        <span className="text-accent"> satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        {/* <div>
            {companies.map}
        </div> */}
      </div>
    </div>
  );
};

export default Clients;
