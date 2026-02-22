"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface FloatingCardProps {
  className?: string;
  bgColor?: string;
  textColor?: string;
  rotate?: string;
  icon?: React.ElementType;
  label?: string;
  children?: React.ReactNode;
  delay?: number;
  textClass? : string
}

export function FloatingCard({
  className = "",
  bgColor = "bg-white dark:bg-slate-800",
  textColor = "text-black dark:text-white",
  rotate = "rotate-0",
  icon: Icon,
  label,
  children,
  delay = 0,
  textClass
}: FloatingCardProps) {
  
  // Continuous floating animation
  const floatAnimation = {
    y: ["0px", "-12px", "0px"],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: delay, // Stagger the float so they don't move in unison
    }
  };

  return (
    <motion.div
      animate={floatAnimation}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className={`
        flex items-center shadow-lg shadow-blue-900/5 dark:shadow-none dark:border dark:border-white/10 rounded-full px-6 py-4 
        ${bgColor} ${textColor}
        relative lg:absolute ${rotate} 
        w-full lg:w-auto
        ${className}
      `}
    >
      {Icon && label ? (
        <div className="flex  items-center  gap-3  w-full">
          <Icon className="w-12 h-12 shrink-0" strokeWidth={2} />
          <span className={`font-semibold text-left tracking-tight ${textClass}`}>{label}</span>
        </div>
      ) : (
        children
      )}
    </motion.div>
  );
}