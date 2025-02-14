import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Balloons from "../Ballon";
import Candle from "../Candle";
import { useNavigate } from "react-router-dom";
import cake from "../assets/cake.png";

function Surprise() {
  const [lightOn, setlightOn] = useState(false);
  const [banner, setbanner] = useState(false);
  const [showBalloons, setShowBalloons] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);
  const [showCake, setShowCake] = useState(false);
  const [blowCandle, setBlowCandle] = useState(false);
  const [showcandle, setshowcandle] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (blowCandle) {
      navigate("/gift"); // Navigate to gift page
      return;
    }
    if (!lightOn) setlightOn(true);
    else if (!banner) setbanner(true);
    else if (!showBalloons) setShowBalloons(true);
    else if (!playMusic) setPlayMusic(true);
    else if (!showCake) setShowCake(true);
    else if (!showcandle) setshowcandle(true);
  };

  useEffect(() => {
    if (playMusic) {
      const sound = new Audio("/music.mp3");
      sound.play();
    }
  }, [playMusic]);

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden"
      animate={{
        backgroundColor: lightOn ? "#dff1fb" : "#242424",
        color: lightOn ? "black" : "white",
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {banner && (
        <motion.img
          src="/Banner.png"
          className="absolute top-5 max-w-[80vw] h-auto object-contain"
          initial={{ y: -1500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          loading="lazy"
        />
      )}

      {showBalloons && <Balloons />}  

      {showCake && (
        <motion.img
          src={cake}
          className="absolute w-40 h-auto bottom-10"
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      )}

      {showcandle && <Candle onBlow={() => setBlowCandle(true)} />}

      <motion.button
        type="button"
        className="relative px-6 py-3 text-lg sm:text-xl rounded-full bg-blue-600 text-white mt-5 shadow-md"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {blowCandle
          ? "Surprise Gift for You"
          : lightOn
          ? banner
            ? showBalloons
              ? playMusic
                ? showCake
                  ? "Get a candle blow by touching it"
                  : "Birthday Cake"
                : "Play Music"
              : "Fly Balloons"
            : "Decorate"
          : "Let's Turn On the Lights"}
      </motion.button>
    </motion.div>
  );
}

export default Surprise;
