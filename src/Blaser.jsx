import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { Button } from "@/components/ui/button";
import { useWindowSize } from "@react-hook/window-size";

const ConfettiEffect = () => {
  const [width, height] = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {showConfetti && <Confetti width={width} height={height} />}
      <h1 className="text-3xl font-bold mb-4">🎉 Happy Celebration! 🎊</h1>
      <Button onClick={() => setShowConfetti(true)}>Launch Confetti</Button>
    </div>
  );
};

export default ConfettiEffect;
