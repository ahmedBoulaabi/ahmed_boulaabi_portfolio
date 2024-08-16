"use client";

import { Description } from "@radix-ui/react-dialog";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaAngular,
  FaAndroid,
  FaPhp,
  FaJava,
  FaPython,
} from "react-icons/fa";

import { motion } from "framer-motion";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiAngular,
  SiPhp,
  SiSpringboot,
  SiSpring,
  SiCplusplus,
  SiCsharp,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/MovingBorder";
import { LinkPreview } from "@/components/ui/LinkPreview";
import { useTranslations } from "next-intl"; // Import the translation hook
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const programming = {
  title: "Programming",
  description: "Programming",
  items: [
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <SiCsharp />,
      name: "C#",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
  ],
};

const database = {
  title: "Database",
  description: "Database",
  items: [
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
  ],
};

const Resume = () => {
  const t = useTranslations("resume"); // Fetch the translations for the "about" section

  const experienceItems = [
    {
      company: t("experience.items.internship1.company"),
      position: t("experience.items.internship1.position"),
      duration: t("experience.items.internship1.duration"),
      link: "/work#project-3",
    },
    {
      company: t("experience.items.internship2.company"),
      position: t("experience.items.internship2.position"),
      duration: t("experience.items.internship2.duration"),
      link: "",
    },
  ];

  const about = {
    title: t("about.title"),
    description: t("about.description"),
    info: [
      { fieldName: t("about.name"), fieldValue: "Boulaabi Ahmed" },
      { fieldName: t("about.phone"), fieldValue: "(+33) 6 27 32 13 98" },
      { fieldName: t("about.experience"), fieldValue: "+4 Years" },
      { fieldName: t("about.discord"), fieldValue: "ahmedboulaabi" },
      { fieldName: t("about.nationality"), fieldValue: "Tunisian" },
      {
        fieldName: t("about.email"),
        fieldValue: "ahmed.boulaabi0306@gmail.com",
      },
      { fieldName: t("about.freelance"), fieldValue: "Available" },
      {
        fieldName: t("about.languages"),
        fieldValue: t("about.lgDetails"),
      },
    ],
  };

  const skills = {
    title: t("skills.title"),
    description: t("skills.description"),
    items: [
      { icon: <FaHtml5 />, name: t("skills.items.html") },
      { icon: <FaCss3 />, name: t("skills.items.css") },
      { icon: <FaJs />, name: t("skills.items.javascript") },
      { icon: <FaReact />, name: t("skills.items.react") },
      { icon: <SiTailwindcss />, name: t("skills.items.tailwind") },
      { icon: <SiNextdotjs />, name: t("skills.items.nextjs") },
      { icon: <FaNodeJs />, name: t("skills.items.nodejs") },
      { icon: <FaAngular />, name: t("skills.items.angular") },
      { icon: <FaPhp />, name: t("skills.items.php") },
      { icon: <SiSpringboot />, name: t("skills.items.springboot") },
    ],
  };

  const educationItems = [
    {
      institution: t("education.items.education1.institution"),
      degree: t("education.items.education1.degree"),
      duration: t("education.items.education1.duration"),
      link: t("education.items.education1.link"),
    },
    {
      institution: t("education.items.education2.institution"),
      degree: t("education.items.education2.degree"),
      duration: t("education.items.education2.duration"),
      link: t("education.items.education2.link"),
    },
    {
      institution: t("education.items.education3.institution"),
      degree: t("education.items.education3.degree"),
      duration: t("education.items.education3.duration"),
      link: t("education.items.education3.link"),
    },
    {
      institution: t("education.items.education4.institution"),
      degree: t("education.items.education4.degree"),
      duration: t("education.items.education4.duration"),
      link: t("education.items.education4.link"),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[68px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">
              {t("experience.title")}
            </TabsTrigger>
            <TabsTrigger value="education">{t("education.title")}</TabsTrigger>
            <TabsTrigger value="skills">{skills.title}</TabsTrigger>
            <TabsTrigger value="about">{about.title}</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{t("experience.title")}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {t("experience.description")}
                </p>
                <ScrollArea className="h-[600px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {experienceItems.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#27272C] h-[250px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 relative group"
                      >
                        <span className="text-accent">{item.position}</span>
                        <h3 className="min-h-[60px] text-center lg:text-left">
                          {item.company}
                        </h3>
                        <div>
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.duration}</p>
                        </div>
                        <Link
                          href={item.link}
                          className="w-[40px] h-[40px] rounded-full bg-white transition-all duration-500 flex justify-center items-center hover:-rotate-45 group-hover:bg-accent absolute bottom-4 right-4"
                        >
                          <BsArrowDownRight className="text-primary text-3xl" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{t("education.title")}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {t("education.description")}
                </p>
                <ScrollArea className="h-[600px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {educationItems.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#27272C] h-[200px] py-3 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.degree}</span>
                        {item.link ? (
                          <LinkPreview
                            url={item.link}
                            className="min-h-[30px] text-center lg:text-left"
                          >
                            {item.institution}
                          </LinkPreview>
                        ) : (
                          <h3 className="min-h-[30px] text-center lg:text-left">
                            {item.institution}
                          </h3>
                        )}
                        <div>
                          <span className="w-[6px] h-[6px] rounded-full bg-accent text-white"></span>
                          <p className="text-white/60">{item.duration}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.items.map((item, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#27272C] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {item.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description === "Web Development"
                      ? programming.description
                      : "Programmation"}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {programming.items.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#27272C] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description === "Web Development"
                      ? database.description
                      : "Base de données"}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] pb-20">
                  {database.items.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#27272C] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[700px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center justify-center xl:justify-start gap-4 ${
                        item.fieldName === t("about.languages")
                          ? "whitespace-nowrap"
                          : ""
                      }`}
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
