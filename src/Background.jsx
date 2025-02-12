import React from "react";
import { motion } from "framer-motion";

const hearts = Array.from({ length: 30 }); // Adjust the number of hearts

function Bg() {
  return (
    <div className="bg relative w-full h-screen overflow-hidden">
      {hearts.map((_, index) => {
        const randomX = Math.random() * window.innerWidth; // Random x start position
        const randomDelay = Math.random() * 2; // Random animation delay
        const randomDuration = Math.random() * 8 + 6; // Slower floating duration
        const randomRotation = Math.random() * 360; // Random initial rotation

        return (
          <motion.div
            key={index}
            initial={{ y: "100vh", x: randomX, rotate: randomRotation }}
            animate={{ 
              y: "-10vh", 
              x: [randomX, randomX + 20, randomX - 20, randomX], // Swing effect
              rotate: [randomRotation, randomRotation + 30, randomRotation - 30, randomRotation + 180] 
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: randomDelay,
            }}
            className="absolute text-red-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="red"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Bg;
