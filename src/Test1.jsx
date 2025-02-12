import { useState } from "react";
import { motion } from "framer-motion";

const Fireworks = () => {
  const [particles, setParticles] = useState([]);

  const createExplosion = (x, y) => {
    const newParticles = Array.from({ length: 20 }).map(() => ({
      id: Math.random(),
      x,
      y,
      angle: Math.random() * 360,
      speed: Math.random() * 50 + 30,
      color: `hsl(${Math.random() * 360}, 100%, 60%)`,
    }));
    setParticles([...particles, ...newParticles]);
    setTimeout(() => setParticles([]), 1000);
  };

  return (
    <div
      className="relative w-full h-screen bg-black overflow-hidden"
      onClick={(e) => createExplosion(e.clientX, e.clientY)}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 1, x: p.x, y: p.y, scale: 1 }}
          animate={{
            x: p.x + Math.cos((p.angle * Math.PI) / 180) * p.speed,
            y: p.y + Math.sin((p.angle * Math.PI) / 180) * p.speed,
            opacity: 0,
            scale: 0.5,
          }}
          transition={{ duration: 1, ease: "ease-out" }}
          className="absolute w-2 h-2 rounded-full"
          style={{ backgroundColor: p.color }}
        />
      ))}
    </div>
  );
};

export default Fireworks;
