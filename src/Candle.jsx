import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Candle.css";

const Candle = ({ onBlow }) => {
  const [blow, setblow] = useState(false);

  return (
    <motion.div
    onHoverStart={onBlow}
    initial={{y:-500,}}
    transition={{duration: 1}}
    animate={{y:0}}
     className="candle-container">
      <div className="candle" onMouseEnter={() => setblow(true)}>
        <div className="wick" onMouseEnter={() => setblow(true)}></div>

        {blow && (
          <motion.div
            className="flame"
            animate={{
              scale: [1, 1.1, 1],
              y: [0, -2, 0],
            }}
            transition={{
                // ease:true,
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default Candle;
