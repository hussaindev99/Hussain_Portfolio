"use client"
import React from "react";
import { SiTailwindcss } from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiJira,
  SiTrello,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const Skills = () => {

  // 🚀 DOWNLOAD FUNCTION
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1OcvSP0AS63vYwfVxFPHSDg-6-CKUNNZY";
    link.download = "Ali-Resume.pdf"; 
    link.click();
  };

  return (
    <section className="bg-white py-16 text-center">

      {/* Header Section */}
      <div className="mb-12">
        <div className="flex items-center justify-center mb-5">
          <div className="px-4 py-1 border border-[#d5d8d2] rounded-full bg-[#e7e9e6] text-sm uppercase font-sans">
            ____ My Skills
          </div>
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Skills That Define Me
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-3xl mx-auto px-4">

        <SkillCard icon={<FaHtml5 />} label="HTML" />
        <SkillCard icon={<FaCss3Alt />} label="CSS" />
        <SkillCard icon={<FaSass />} label="Sass" />
        <SkillCard icon={<FaJs />} label="Javascript" />
        <SkillCard icon={<SiTypescript />} label="Typescript" />
        <SkillCard icon={<FaReact />} label="React JS" />
        <SkillCard icon={<SiNextdotjs />} label="Next JS" />
        <SkillCard icon={<FaReact />} label="React Native" />
        <SkillCard icon={<FaNodeJs />} label="Nodejs" />
        <SkillCard icon={<SiExpress />} label="Express" />
        <SkillCard icon={<SiMongodb />} label="MongoDB" />
        <SkillCard icon={<SiTailwindcss />} label="Tailwind-css" />
        <SkillCard icon={<TbApi />} label="Rest API" />
        <SkillCard icon={<SiJira />} label="JIRA" />
        <SkillCard icon={<SiTrello />} label="Trello" />

      </div>

      {/* Download Button */}
      <div className="mt-8">
        <button
          onClick={handleDownload}
          className="bg-[#B8FF32] text-black px-8 py-3 font-semibold rounded-lg hover:bg-[#b7ff32e0]"
        >
          Download Resume
        </button>
      </div>

    </section>
  );
};

const SkillCard = ({ icon, label }) => {
  return (
    <div className="group flex items-center justify-center w-36 border border-gray-300 rounded-xl p-3 transition-shadow duration-300 hover:shadow-md hover:bg-[#B8FF32]">
      <div className="text-3xl text-gray-800 transition-colors duration-300 group-hover:text-gray-800">
        {icon}
      </div>
      <p className="text-sm ml-2 font-semibold text-gray-800 group-hover:text-gray-800 transition-colors duration-300">
        {label}
      </p>
    </div>
  );
};

export default Skills;
