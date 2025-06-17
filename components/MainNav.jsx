"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import NavLinks from './NavLinks';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    }
  }
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
      stiffness: 100
    }
  }
};

const MainNav = () => {
  return (
    <motion.div 
      className='h-20 items-center flex justify-between'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Logo />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <NavLinks />
      </motion.div>
    </motion.div>
  );
};

export default MainNav;