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
} from "react-icons/fa";

import { motion } from "framer-motion";

import { SiTailwindcss, SiNextdotjs, SiAngular } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

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
      fieldValue: "English , French , Arabic",
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

const skills = {
  title: "My skills",
  description: "dsdqsd dqsdq fjdbs fjks fjkjksqdfn jksdqnf jkns qfnsqdk f.",
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
      dutaion: "2023 - En cours",
    },
    {
      institution: "FSEG - Université de Tunis El Manar",
      degree:
        "Master 1 professionnel : Ingénierie des systémes d information & data science",
      dutaion: "2022 - 2023",
    },
    {
      institution: "ISAEG- Université de Gafsa",
      degree: "Licence National en Informatique de Gestion",
      dutaion: "2019 - 2022 ",
    },
    {
      institution: "Lycée Enassr Privée",
      degree: "Baccalauréat Mathématiques",
      dutaion: "Juin 2019",
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
              experience
            </TabsContent>
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
              about me
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
