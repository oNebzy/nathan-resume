import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const ProjectCard = ({onClick, title, bgImage}) => {

  const handleCardClick= () => {
    if (onClick){
      onClick();
    }
  }

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[15rem] w-[18rem] rounded-xl bg-gradient-to-br from-emerald-900 to-emerald-500 "
    >
      <div
        style={{ 
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
          backgroundImage: bgImage ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        bg
        className="absolute inset-4 grid place-content-center rounded-xl bg-[#282c2f] shadow-lg hover:cursor-pointer text-white text-3xl"
        onClick={handleCardClick}
      >
        {title}
      </div>
    </motion.div>
  );
};