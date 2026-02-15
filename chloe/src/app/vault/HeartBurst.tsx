"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Heart = {
  left: number;
  duration: number;
  delay: number;
};

export default function HeartBurst() {
  const [hearts] = useState<Heart[]>(() =>
    Array.from({ length: 12 }).map(() => ({
      left: Math.random() * 80,
      duration: 1.2 + Math.random() * 0.6,
      delay: Math.random() * 0.3,
    })),
  );

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
    >
      {hearts.map((heart, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, opacity: 1, scale: 0.8 }}
          animate={{ y: -250, opacity: 0, scale: 1.2 }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            bottom: "40px",
            left: `${heart.left}%`,
            fontSize: "22px",
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}
