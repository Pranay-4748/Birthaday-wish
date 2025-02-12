import React, { useState } from "react";
import { motion } from "framer-motion";
import Balloons from "../Ballon";

function Surprise() {
  const [lightOn, setlightOn] = useState(false);
  const [banner, setbanner] = useState(false);
  const [showBalloons, setShowBalloons] = useState(false);

  const handleClick = () => {
    if (!lightOn) {
      setlightOn(true);
    } else if (!banner) {
      setbanner(true);
    } else if (!showBalloons) {
      setShowBalloons(true);
    }
    console.log("Light On:", lightOn, "Banner:", banner, "Show Balloons:", showBalloons);
  };

  return (
    <motion.div
      className="surprise"
      animate={{ backgroundColor: lightOn ? "#ffffff" : "#242424", color: lightOn ? "black" : "white" }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {banner && (
        <motion.img
          src="/Banner.png"
          className="w-60 h-40 absolute object-contain"
          initial={{ y: -1500, opacity: 0 }}
          animate={{ y: -500, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          loading="lazy"
        />
      )}

      {showBalloons && <Balloons />} 

      <motion.button
        type="button"
        className="dbtn rounded-full absolute z-10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={handleClick}
        whileHover={{ outline: "1px solid #535bf2" }}
        whileTap={{ scale: 0.99 }}
      >
        {lightOn ? (banner ? "Fly Balloons" : "Decorate") : "Let's Turn On the Lights"}
      </motion.button>
    </motion.div>
  );
}

export default Surprise;
