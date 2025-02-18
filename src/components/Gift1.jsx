import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/p1.webp",
  "/images/p2.webp",
  "/images/p3.webp",
  "/images/p4.webp",
  "/images/p1.webp",
  "/images/p2.webp",
  "/images/p3.webp",
  "/images/p4.webp",
  "/images/p1.webp",
  "/images/p2.webp",
  "/images/p3.webp",
  "/images/p4.webp",


];

const Gift1 = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
    let angle = 0;
    const animate = () => {
      angle += 0.5;
      imagesRef.current.forEach((img, index) => {
        if (img) {
          const rotationAngle = (index / images.length) * 360 + angle;
          // img.style.transform = `rotateY(${rotationAngle}deg) translateZ(150px)`;
          img.style.transform = `rotateY(${rotationAngle}deg) translateZ(200px)`; // Increased from 150px to 250px

        }
      });
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="flex justify-center items-end w-full h-full ">
      <div style={{
  position: "absolute",
  width: "6rem", // Increased from 6rem
  height: "6rem", // Increased from 6rem
  perspective:"1000px"
}}
>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
          }}
        >
          {images.map((src, index) => {
            return (
              <motion.div
                key={index}
                ref={(el) => (imagesRef.current[index] = el)}
                style={{
                  position: "absolute",
                  width: "3rem",
                  height: "3rem",
                  backgroundColor: "white",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                }}
                whileTap={{ scale: 3,zIndex: 15000 }}
              >
                <img src={src} alt={`img-${index}`} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gift1;
