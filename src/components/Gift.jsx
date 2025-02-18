import React from "react";
import Bg from "../Background";

function Gift() {
  return (
    <div className="flex w-full items-center justify-center">
      <Bg/>
      <div className="item text-center absolute h-40 w-3 flex flex-col items-center justify-center">
        <h2 className="text-2xl">Once again Happy Birthday Prachi </h2>
        <br />
        <p>
          Believe in yourself and all that you are because you are capable of
          amazing things.
          <br />Sending you warm birthday wishes on your special day I
          have made something for u 
          <br />
          <br />
          <p>Click Below Link To See</p>
          <a href="http://birthdaywishp.netlify.app/surprise">http://birthdaywishp.netlify.app/surprise</a>
        </p>
      </div>
    </div>
  );
}

export default Gift;
