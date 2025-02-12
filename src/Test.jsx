import { motion } from "framer-motion";
import React from "react";

function Test() {

    // const egnite = document.getElementsByClassName("candal")
    // egnite.eventlister("click",() => (
    //     document.candal.classList.toggle("change")
    // ))
  return(
    <div className="box">
        <motion.div
        // transition={{
        // duration: 5,
        // repeat: Infinity,
        // ease: "easeInOut",
        // delay:1,
    //    }} 
       className="candal">

       </motion.div>
       <button type="cbtn" onClick={{}}>spark the candle</button>
   </div>

  ) 
}

export default Test;
