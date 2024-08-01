"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "../../data";

import { motion } from "framer-motion";

const Clients = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
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
    </motion.section>
  );
};

export default Clients;
