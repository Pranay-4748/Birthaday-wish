import React from "react";
import "./App.css"
import { motion } from "framer-motion";

const HappyBirthdayBanner = () => {
  const topRow = "HAPPY".split("");
  const bottomRow = "BIRTHDAY".split("");
  const colors = ["bg-green-500", "bg-teal-500", "bg-white"];

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="relative">
        {/* Curved String for Top Row */}
        <svg className="absolute -top-6 left-1/2 transform -translate-x-1/2" width="300" height="60">
          <path d="M10,50 Q150,-10 290,50" stroke="green" strokeWidth="4" fill="transparent" />
        </svg>
        
        {/* Top Row Flags */}
        <div className="flex justify-center space-x-2 mt-4">
          {topRow.map((letter, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`w-12 h-14 text-lg font-bold text-black flex justify-center items-center ${colors[i % colors.length]} clip-triangle`}
            >
              {letter}
            </motion.div>
          ))}
        </div>

        {/* Curved String for Bottom Row */}
        <svg className="absolute top-14 left-1/2 transform -translate-x-1/2" width="320" height="70">
          <path d="M10,10 Q160,80 310,10" stroke="green" strokeWidth="4" fill="transparent" />
        </svg>
        
        {/* Bottom Row Flags */}
        <div className="flex justify-center space-x-2 mt-6">
          {bottomRow.map((letter, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`w-12 h-14 text-lg font-bold text-black flex justify-center items-center ${colors[i % colors.length]} clip-triangle`}
            >
              {letter}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HappyBirthdayBanner;

