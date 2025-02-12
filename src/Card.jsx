import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

function Card() {
  // const navigate = useNavigate(); // Initialize navigate function
  const msg = [
    "It's Your Special Day yeyey ! ",
    "I made something special because you are special to me ! ",
    "Do you wanna see what I made??? 🎁",
  ];

  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, (msg.length - 1) * 6 * 1000 + 3 * 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="cardcont text-center relative h-40 flex flex-col items-center justify-center">
      <p className="text-4xl absolute top-10">✨</p>
      <br />
      {msg.map((text, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={
            index === msg.length - 1
              ? { opacity: [0, 1], y: [10, 0] }
              : { opacity: [0, 1, 1, 0], y: [10, 0, -10] }
          }
          transition={{
            duration: index === msg.length - 1 ? 3 : 6,
            delay: index * 6,
            ease: "easeInOut",
          }}
          className="text-xl font-semibold absolute w-full"
        >
          {text}
        </motion.p>
      ))}

      {showButtons && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-6 flex gap-10 relative top-16"
        >
          <button
            className="ybtn bg-green-500 text-white rounded-full shadow-md cursor-pointer hover:bg-green-600"
            onClick={() => navigate("/surprise")}
          >
            Yes
          </button>
          <button
            className="nbtn bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 cursor-pointer transition duration-200"
          >
            No
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default Card;
