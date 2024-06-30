"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="flex flex-col items-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white">
        My <span className="text-accent">Approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4 ">
        <Card
          title="Planning & Strategy"
          icon={<Phase order="Phase 1" />}
          description="<p><strong>Collaborative Mapping:</strong></p>
  <ul>
    <li><strong>Define Goals:</strong> We'll work together to establish your website's objectives.</li>
    <li><strong>Identify Audience:</strong> Understand who your target users are.</li>
    <li><strong>Outline Functionalities:</strong> Determine the essential features your site needs.</li>
    <li><strong>Structure and Navigation:</strong> Plan the site layout and navigation flow.</li>
    <li><strong>Content Planning:</strong> Discuss content requirements and strategy.</li>
  </ul>"
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Design and Development"
          icon={<Phase order="Phase 2" />}
          description="<p><strong>Transforming Ideas into Reality:</strong></p>
  <ul>
    <li><strong>Detailed Planning:</strong> Once we finalize the plan, I dive into designing and coding.</li>
    <li><strong>Design Process:</strong> From wireframes to high-fidelity mockups, you’ll see regular updates.</li>
    <li><strong>Open Communication:</strong> I ensure you're kept in the loop at every step for feedback and revisions.</li>
  </ul>"
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
          {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
        </Card>
        <Card
          title="Implementation"
          icon={<Phase order="Phase 3" />}
          description="<p><strong>Building Your Vision:</strong></p>
  <ul>
    <li><strong>Coding:</strong> Translate the approved design into functional and responsive code.</li>
    <li><strong>Integration:</strong> Implement all features and functionalities as planned.</li>
    <li><strong>Testing:</strong> Thorough testing to ensure a smooth user experience.</li>
    <li><strong>Launch:</strong> Final review and launch of your website.</li>
  </ul>"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  description,
  children,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[35rem] bg-[#141418] rounded-3xl"
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

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center text-3xl">
          {title}
        </h2>
        <h2
          className="text-sm dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-justify"
          style={{ color: "#e4ecff" }}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};

const Phase = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0EB1D2_0%,#C3F73A_50%,#0EB1D2_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#1C1C22] px-5 py-2 font-bold text-white backdrop-blur-3xl text-xl">
          {order}
        </span>
      </button>
    </div>
  );
};

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
  );
};

export default Approach;
