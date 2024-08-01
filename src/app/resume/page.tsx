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

const about = {
  title: "About me",
  description:
    "lorem dazdazdfdgfdfdsfdsqf dfsqfsdfezf dsqfezqfsdqfdfqs fzefqze",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Boulaabi Ahmed",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+33) 6 27 32 13 98",
    },
    {
      fieldName: "Experience",
      fieldValue: "+4 Years",
    },
    {
      fieldName: "Discord",
      fieldValue: "ahmedboulaabi",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Tunisian",
    },
    {
      fieldName: "Email",
      fieldValue: "ahmed.boulaabi0306@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, French, Arabic",
    },
  ],
};

const experience = {
  icon: "/public/images/resume/badge.svg",
  title: "My experience",
  description: "dsdqsd dqsdq fjdbs fjks fjkjksqdfn jksdqnf jkns qfnsqdk f.",
  items: [
    {
      company: "Direction Régionale de la Santé Publique de Gafsa",
      position: "Stagiaire",
      duration: "Janvier 2022 - Avril 2022",
    },
    {
      company:
        " 'Emerging Consulting'  en collaboration avec la chambre de commerce et de l Industrie du Sud-Ouest",
      position: "Stagiaire",
      duration: "Août 2020 - Septembre 2020",
    },
  ],
};

const academicProjects = {
  icon: "/public/images/resume/badge.svg",
  title: "My academic projects",
  description: "dsdqsd dqsdq fjdbs fjks fjkjksqdfn jksdqnf jkns qfnsqdk f.",
  items: [
    {
      name: "",
      institution: "Direction Régionale de la Santé Publique de Gafsa",
      position: "Stagiaire",
      duration: "Janvier 2022 - Avril 2022",
    },
  ],
};
const skills = {
  title: "My skills",
  description: "Développement web",
  items: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaAngular />,
      name: "angular",
    },
    {
      icon: <SiAngular />,
      name: "angular",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <SiSpringboot />,
      name: "springboot",
    },
  ],
};
const programmation = {
  title: "programmation",
  description: "Programmation",
  items: [
    {
      icon: <FaPython />,
      name: "python",
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
      name: "java",
    },
  ],
};

const dataBase = {
  title: "Base de données",
  description: "Base de données",
  items: [
    {
      icon: <SiMysql />,
      name: "mysql",
    },
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
  ],
};

const education = {
  icon: "/public/images/resume/cap.svg",
  title: "My Education",
  description: "dsdqsd dqsdq fjdbs fjks fjkjksqdfn jksdqnf jkns qfnsqdk f.",
  items: [
    {
      institution: "FST - Université de Haute-Alsace",
      degree: "Master Informatique et Mobilité",
      duration: "2023 - En cours",
      link: "https://www.uha.fr/fr/index.html",
    },
    {
      institution: "FSEG - Université de Tunis El Manar",
      degree:
        "Master 1 professionnel : Ingénierie des systémes d information & data science",
      duration: "2022 - 2023",
      link: "https://www.utm.rnu.tn/utm/fr/",
    },
    {
      institution: "ISAEG- Université de Gafsa",
      degree: "Licence National en Informatique de Gestion",
      duration: "2019 - 2022 ",
      link: "https://ugaf.rnu.tn",
    },
    {
      institution: "Lycée Enassr Privée",
      degree: "Baccalauréat Mathématiques",
      duration: "Juin 2019",
      link: "",
    },
  ],
};

const Resume = () => {
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
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[600px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#27272C] h-[250px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.position}</span>
                          <h3 className=" min-h-[60px] text-center lg:text-left">
                            {item.company}
                          </h3>
                          <div>
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.duration}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[600px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#27272C] h-[200px] py-3 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.degree}</span>
                          {item.link !== "" ? (
                            <LinkPreview
                              url={item.link}
                              className="min-h-[30px] text-center lg:text-left"
                            >
                              {item.institution}
                            </LinkPreview>
                          ) : (
                            <h3 className="min-h-[30px] text-center lg:text-left">
                              {" "}
                              {item.institution}
                            </h3>
                          )}

                          <div>
                            <span className="w-[6px] h-[6px] rounded-full bg-accent text-white"></span>
                            <p className="text-white/60">{item.duration}</p>
                          </div>
                        </li>
                      );
                    })}
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
                <ScrollArea className="h-[600px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.items.map((item, index) => {
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
                </ScrollArea>
                <div className="flex flex-col gap-[30px] text-center xl:text-left py-8">
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {programmation.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {programmation.items.map((item, index) => {
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
                <div className="flex flex-col gap-[30px] text-center xl:text-left py-8">
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {dataBase.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {dataBase.items.map((item, index) => {
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
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={`flex items-center justify-center xl:justify-start gap-4 ${
                          item.fieldName === "Languages"
                            ? "whitespace-nowrap"
                            : ""
                        }`}
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
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
