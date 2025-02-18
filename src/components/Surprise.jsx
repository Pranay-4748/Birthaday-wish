import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Balloons from "../Ballon";
import Candle from "../Candle";
import { useNavigate } from "react-router-dom";
import cake from "../assets/cake.png"

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
      navigate("/gift"); // Change route when surprise gift is ready
      return;
    }
    if (!lightOn) {
      setlightOn(true);
    } else if (!banner) {
      setbanner(true);
    } else if (!showBalloons) {
      setShowBalloons(true);
    } else if (!playMusic) {
      setPlayMusic(true);
    } else if (!showCake) {
      setShowCake(true);
    } else if (!showcandle) {
      setshowcandle(true);
    }
  };

  useEffect(() => {
    if (playMusic) {
      const sound = new Audio("/music.mp3");
      sound.play();
    }
  }, [playMusic]);

  return (
    <motion.div
      className="surprise"
      animate={{
        backgroundColor: lightOn ? "#dff1fb" : "#242424",
        color: lightOn ? "black" : "white",
      }}
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


      {showCake && (
        <motion.img
          src={cake}
          className="w-30 h-30 absolute z-10"
          initial={{ x: "-100%", y: "-100%" }}
          animate={{ x: "-0%", y: "-150%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      )}

      {showcandle && <Candle  onBlow={() => setBlowCandle(true)} />}

      <motion.button
        type="button"
        className="dbtn rounded-full absolute z-10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={handleClick}
        whileHover={{ outline: "1px solid #535bf2" }}
        whileTap={{ scale: 0.99 }}
      >
        {/* {lightOn ? (banner ? "Fly Balloons" : "Decorate") : "Let's Turn On the Lights"} */}
        {blowCandle
          ? "Surprise Gift for You"
          : lightOn
          ? banner
            ? showBalloons
              ? playMusic
                ? showCake
                  ? "Get a candle blow by clicking it"
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
