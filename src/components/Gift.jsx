import React from "react";
import Bg from "../Background";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Gift() {
  return (
    <div className="flex w-full items-center justify-center">
      <Bg />
      <div className="item text-center absolute h-40 w-3 flex flex-col items-center justify-center">
        <h2 className="text-2xl">Once again Happy Birthday Prachi</h2>
        <br />
        <p>
          Believe in yourself and all that you are because you are capable of
          amazing things.
          <br />
          Sending you warm birthday wishes on your special day. I have made
          something for you.
          <br />
          <br />
        </p>
        <Link to="/surprise">
          <motion.button
            type="button"
            className="dbtn rounded-full absolute z-10"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ outline: "1px solid #535bf2" }}
            whileTap={{ scale: 0.99 }}
          >
            Click Here
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

export default Gift;
