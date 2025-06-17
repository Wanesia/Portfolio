"use client";

import { motion } from "framer-motion";
import React from "react";

const Logo = () => {
  return (
    <div className="px-6 ">
      <motion.h3
        className="gradient-text text-transparent !font-extrabold tracking-wide"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        Portfolio
      </motion.h3>
    </div>
  );
};

export default Logo;
