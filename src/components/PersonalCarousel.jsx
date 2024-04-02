import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = ({projectList}) => {
  const [listIndex, setListIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setListIndex((pv) => {
          if (pv === projectList.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX, projectList.length]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && listIndex < projectList.length - 1) {
      setListIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && listIndex > 0) {
      setListIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-neutral-950 py-8">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${listIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images listIndex={listIndex} projectList={projectList}/>
      </motion.div>

      <Dots listIndex={listIndex} setListIndex={setListIndex} projectList={projectList}/>
      <GradientEdges />
    </div>
  );
};

const Images = ({ listIndex, projectList }) => {
  return (
    <>
      {projectList.map((project, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              
            }}
            animate={{
              scale: listIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="h-[28rem] w-full shrink-0 rounded-xl bg-neutral-800 "
          >
            <div>{project}</div>
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({ listIndex, setListIndex, projectList }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {projectList.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setListIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === listIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};