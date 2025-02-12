import { motion } from "framer-motion";
import { useState } from "react";

const Balloon = ({ color, delay }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0, x: 0 }}
      animate={{ y: -500, opacity: 1, x: [0, 10, -10, 10, -10, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      style={{
        position: "absolute",
        bottom: 0,
        left: `${Math.random() * 90}vw`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Balloon Circle */}
      <div
        style={{
          width: "60px",
          height: "60px",
          backgroundColor: color,
          borderRadius: "50%",
        }}
      ></div>

      {/* Balloon String in S-shape */}
      <svg width="4" height="100" viewBox="0 0 4 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 0 C5 20, -1 40, 2 60 C5 80, -1 100, 2 120" stroke="black" strokeWidth="1" fill="none"/>
      </svg>
    </motion.div>
  );
};

export default function Balloons() {
  const [showBalloons, setShowBalloons] = useState(true);
  const colors = ["red", "blue", "green", "yellow", "purple","rebeccapurple","black","purple", "yellow", "green", "blue", "red"];

  return (
    <div className="balloncont relative h-full w-full overflow-hidden z-1 text-center">
      {/* <button
        className="bbtn cursor-pointer text-m rounded-full"
        onClick={() => setShowBalloons(true)}
        style={{ padding: "10px 20px", marginTop: "20px"}}
      >
        Want to see Suprice
      </button> */}
      {showBalloons && colors.map((color, index) => (
        <Balloon key={index} color={color} delay={index * 1} />
      ))}
    </div>
  );
}
