import React, { useState } from "react";
import "./index.css"; // Import the CSS file

const TouchChange = () => {
  const [touched, setTouched] = useState(false);

  return (
    <div
      className={`box ${touched ? "touched" : ""}`}
      onMouseEnter={() => setTouched(true)}
    ></div>
  );
};

export default TouchChange;
