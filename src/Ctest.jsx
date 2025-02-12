import React, { useState } from "react";
import "./index.css"; // Import CSS file

const Ctest = () => {
  const [blow, setblow] = useState(false);

  return (
    <div className="candle-container">
      <div className="candle" onMouseEnter={() => setblow(true)}>
        <div className="wick"></div>
        {blow && <div className="flame"></div>}
      </div>
    </div>
  );
};

export default Ctest;
