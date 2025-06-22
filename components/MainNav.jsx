"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
};

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="h-20 items-center flex justify-between fixed bg-primary md:bg-primary/80 backdrop-blur-[2px] w-full z-50 top-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Logo />
      </motion.div>

      <motion.div variants={itemVariants} className="hidden sm:block">
        <NavLinks />
      </motion.div>

      <motion.button
        variants={itemVariants}
        className="sm:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <IoMdClose /> : <IoMdMenu />}
      </motion.button>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: {
            opacity: 1,
            y: 80,
            display: "block",
          },
          closed: {
            opacity: 0,
            y: 50,
            transitionEnd: {
              display: "none",
            },
          },
        }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        className="fixed top-0 left-0 w-full bg-primary p-5 z-40 sm:!hidden border-b-1"
      >
        <NavLinks />
      </motion.div>
    </motion.nav>
  );
};

export default MainNav;
