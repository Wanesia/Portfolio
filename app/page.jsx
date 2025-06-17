"use client";

import React from "react";
import { motion } from "framer-motion";
import Blob from "@/components/Blob";
import Image from "next/image";
import avatarImg from "@/public/assets/avatar2.png";
import Socials from "@/components/Socials";
import Pattern from "@/components/Pattern";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.6, ease: "easeIn" },
      }}
      className="h-[calc(100vh-5rem)] flex items-center relative overflow-hidden"
    >
      <Pattern></Pattern>
      <div className="flex flex-col xl:flex-row items-center justify-around w-full">
        <div className="w-full xl:w-[550px] flex flex-col items-center xl:items-start text-center xl:text-left">
          <h3>Hi! My name is,</h3>
          <motion.h1
            className="gradient-text text-transparent my-[12px]"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Wanesa
          </motion.h1>
          <h3 className="max-w-[500px]">
            I'm a software developer, always eager to tackle new challenges.
          </h3>
          <Socials></Socials>
        </div>
        <div className="hidden xl:block  relative z-20">
          <Blob></Blob>
          <Image
            src={avatarImg}
            width={260}
            quality={100}
            className="absolute top-18 left-[115px] bg-red"
          ></Image>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
