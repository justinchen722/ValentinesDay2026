"use client";

import { motion } from "framer-motion";

export function QuestionTitle({ title }: { title: string }) {
  return (
    <motion.button
      style={{
        background: "none",
        borderRadius: "16px",
        padding: "20px 40px",
        cursor: "pointer",
        border: "none",
        transition: "all 0.3s ease",
      }}
    >
      <motion.h1
        style={{
          fontSize: "3rem",
          background: "black",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          margin: 0,
        }}
      >
        {title}
      </motion.h1>
    </motion.button>
  );
}
