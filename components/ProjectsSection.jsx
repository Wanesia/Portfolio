import React from "react";
import ProjectCard from "./ProjectCard";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3Alt, FaPython, FaReact } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiNestjs, SiMysql, SiTypescript, SiElectron  } from "react-icons/si";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";

const ProjectsSection = () => {
  return (
    <div id="projects" className="min-h-screen px-10">
      <h2 className="py-5">My Projects</h2>
      <div className="flex flex-col md:flex-row justify-around">
        <ProjectCard
          title="DAO"
          description="DAO is a modern full stack web application designed for musicians. With just a few clicks, you can create a profile that reflects your personality and interests."
          image="/assets/images/dao.png"
          technologies={[
            <FaHtml5 />,
            <FaCss3Alt />,
            <SiTypescript />,
            <SiNestjs />,
            <FaReact />,
            <BiLogoMongodb />,
          ]}
        />
        
        <ProjectCard
          title="Coral Bleach Predictor"
          description="This application predicts coral bleaching risk using two models: custom-trained ML model and LLaMA 3.1 - a large language model accessed via Ollama."
          image="/assets/images/corals2.png"
          technologies={[
            <FaHtml5 />,
            <FaCss3Alt />,
            <IoLogoJavascript />,
            <FaPython />,
          ]}
        />
        <ProjectCard
          title="R.E.P.O Overlay"
          description="Custom in-game overlay for the game R.E.P.O, built with Electron, React, and TypeScript. This overlay makes chat and emotes features easier to use and more accessible."
          image="/assets/images/repo.png"
          technologies={[
            <SiTypescript />,
            <FaReact />,
            <SiElectron />

          ]}
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
