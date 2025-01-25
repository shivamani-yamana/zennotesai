// Core component that receives mouse positions and renders pointer and content

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const FollowPointer = ({
  x,
  y,
  title,
  color,
}: {
  x: number;
  y: number;
  title?: string | React.ReactNode;
  color: string;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        className="h-4 w-4 rounded-full absolute"
        style={{
          top: y,
          left: x,
          zIndex: 500,
          pointerEvents: "none",
        }}
        initial={{
          scale: 1,
          opacity: 1,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        exit={{
          scale: 0,
          opacity: 0,
        }}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="1"
          viewBox="0 0 16 16"
          className="h-6 w-6 text-sky-500 transform -rotate-[70deg] -translate-x-[12px] -translate-y-[10px] stroke-sky-600"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
        </svg>
        <motion.div
          style={{
            backgroundColor: color,
          }}
          initial={{
            scale: 0.5,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          exit={{
            scale: 0.5,
            opacity: 0,
          }}
          className={
            "px-2 py-2 bg-neutral-200 text-white whitespace-nowrap min-w-max text-xs rounded-full"
          }
        >
          {title}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
