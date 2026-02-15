"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function Sparkle() {
  const sparkles = useMemo(() => {
    return Array.from({ length: 6 }).map((_, i) => ({
      left: (i * 17) % 100,
      delay: i * 0.05,
    }));
  }, []);

  return (
    <>
      {sparkles.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5, y: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.8], y: -20 }}
          transition={{
            duration: 0.8,
            delay: s.delay,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            left: `${s.left}%`,
            top: "30%",
            fontSize: "10px",
            pointerEvents: "none",
          }}
        >
          ✨
        </motion.div>
      ))}
    </>
  );
}
