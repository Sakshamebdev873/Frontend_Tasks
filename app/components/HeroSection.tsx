"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Gavel, FileText, CheckSquare, Receipt } from 'lucide-react';
import { FloatingCard } from './ui/FloatingCard';

// Framer Motion Variants for staggered entrance
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 12 } }
};

export default function HeroSection() {
  return (
    // 1. Removed `flex items-center` to allow us to control vertical alignment manually
    <section className="relative w-full min-h-screen bg-[#F5F7F9] dark:bg-slate-950 transition-colors duration-500 overflow-hidden font-sans">
      {/* --- RECREATED SIDE PILL SHAPES --- */}
      {/* Left side pills */}
      <div className="absolute top-[47%] -rotate-14 -left-12 w-44 h-28 bg-[#EAF0FD] dark:bg-slate-800/50 rounded-full z-0 hidden lg:block transition-colors duration-500" />
      <div className="absolute top-[65%] -left-20 w-80 h-28 bg-[#EAF0FD] dark:bg-slate-800/50 rounded-full z-0 hidden lg:block transition-colors duration-500" />
      <div className="absolute bottom-[6%] -left-10 w-md h-24 bg-[#EAF0FD] dark:bg-slate-800/50 rounded-full z-0 hidden lg:block transition-colors duration-500" />

      {/* Right side pills */}
      <div className="absolute top-[16%] rotate-[4deg] -right-16 w-72 h-28 bg-[#EAF0FD] dark:bg-slate-800/50 rounded-full z-0 hidden lg:block transition-colors duration-500" />
      <div className="absolute top-[32.5%] -right-24 w-120  h-28 bg-[#EAF0FD] dark:bg-slate-800/50 rounded-full z-0 hidden lg:block transition-colors duration-500" />
      <div className="absolute top-[49%] -right-12  w-72 h-28 bg-[#EAF0FD] dark:bg-slate-800/50 rounded-full z-0 hidden lg:block transition-colors duration-500" />
      {/* 2. Main Container: Switched from Grid to Flex to allow overlapping and staggered vertical alignment */}
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 pt-14 pb-20 lg:min-h-187.5">
        
        {/* Left Content Wrapper (Header & Paragraph) */}
        {/* pointer-events-none ensures we can hover cards that slide under this invisible box */}
        <div className="relative z-20 flex flex-col lg:w-[55%] pointer-events-none">
          
          <h1 className="text-5xl lg:text-[4rem] font-medium tracking-tight text-[#8D93A5] dark:text-slate-400 leading-[1.15] mb-6 transition-colors pointer-events-auto">
            A single platform to <br className="hidden lg:block" />
            <span className="text-[#64648C] dark:text-slate-100 font-bold">manage</span> every part of <br className="hidden lg:block" />
            your <span className="text-[#64648C] dark:text-slate-100 font-bold">legal work</span>
          </h1>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-start text-left pointer-events-auto"
          >
            <p className="text-[#5161FF] dark:text-indigo-400 text-lg lg:text-xl font-medium tracking-tight max-w-md transition-colors">
              Track matters, coordinate schedules, manage clients, centralize documents, and handle communication - all in one system.
            </p>
          </motion.div>

        </div>

        {/* Right Column: Floating Elements */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative mt-16 h-auto flex flex-col gap-4 z-10 lg:mt-0  lg:block lg:absolute lg:top-10 lg:right-0 lg:w-[75%] lg:h-175"
        >
          
          <motion.div variants={itemVariants} className="relative lg:absolute lg:top-[50%] lg:left-[35%] z-20">
            <FloatingCard 
              label="Billing" 
              icon={Receipt} 
              bgColor="bg-[#344DFF] dark:bg-blue-600" 
              textColor="text-white" 
              rotate="lg:rotate-[12deg]" 
              className="w-full lg:w-[28vw]! lg:px-8 lg:py-6" 
              delay={0}
            
              textClass='text-[1.8em]'
            />
          </motion.div>

          <motion.div variants={itemVariants} className="relative lg:absolute lg:bottom-[38%] lg:right-full z-20">
            <FloatingCard 
              label="Matters" 
              icon={Gavel} 
              bgColor="bg-[#DE7E2F] dark:bg-orange-600" 
              textColor="text-white" 
              rotate="lg:-rotate-[12deg]" 
              className="w-full lg:w-80! lg:px-8 lg:py-6"
              delay={0.5} 
             
              textClass='text-[1.8em]'
            />
          </motion.div>

          <motion.div variants={itemVariants} className="relative lg:absolute lg:bottom-[30%] lg:right-[65%] z-30">
            <FloatingCard 
              bgColor="bg-[#B8BCF8] dark:bg-indigo-900" 
              textColor="text-gray-800 dark:text-indigo-100" 
              rotate="lg:rotate-[4deg]" 
              className="rounded-[46px]! w-full lg:w-92.5! shadow-xl"
              delay={1}
            >
              <div className="flex gap-3 pt-2 w-full items-center">
                <div className="w-1 bg-[#DE7E2F] dark:bg-orange-500 rounded-full self-stretch my-1 shrink-0"></div>
                <div className="w-10 h-10 rounded-full bg-gray-600 dark:bg-gray-800 overflow-hidden shrink-0 flex items-center justify-center text-2xl">
                  👨🏽
                </div>
                <div className="flex flex-col text-sm">
                  <div className="font-bold text-[13px] tracking-tight">John Doe - Portal</div>
                  <div className="opacity-80 text-[11px] leading-tight mt-0.5 font-medium">
                    Hey! Could you please review a document for me?
                  </div>
                  <div className="opacity-60 text-[10px] mt-1 font-medium">MAT-2233 - 2 h ago</div>
                </div>
              </div>
            </FloatingCard>
          </motion.div>

          <motion.div variants={itemVariants} className="relative lg:absolute lg:bottom-[11%] lg:left-[15%] z-20">
            <FloatingCard 
              label="Tasks" 
              icon={CheckSquare} 
              bgColor="bg-[#2E283E] dark:bg-slate-800" 
              textColor="text-[#DE7E2F] dark:text-orange-400" 
              rotate="lg:rotate-[1deg]" 
              className="w-full lg:w-87.5! " 
              delay={1.5}
         
              textClass='text-[1.8em]'
            />
          </motion.div>

          <motion.div variants={itemVariants} className="relative lg:absolute lg:bottom-[17%] lg:right-[40%] z-20">
            <FloatingCard 
              label="Documents" 
              icon={FileText} 
              bgColor="bg-[#2E283E] dark:bg-slate-800" 
              textColor="text-[#DE7E2F] dark:text-orange-400" 
              rotate="lg:-rotate-[10deg]" 
              className="w-full py-4.5! origin-right lg:w-92.5!" 
              delay={2}
       
              textClass='text-[1.8em]'
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}