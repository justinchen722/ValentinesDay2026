"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Sparkle from "./Sparkle";

type Props = {
  onClick?: () => void;
};

export default function CheckButton({ onClick }: Props) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);
    onClick?.();
    setTimeout(() => setActive(false), 800);
  };

  return (
    <motion.button
      onClick={handleClick}
      whileTap={{ scale: 0.96 }}
      style={{
        position: "relative",
        padding: "14px 40px",
        borderRadius: "50px",
        border: "none",
        cursor: "pointer",
        background: active ? "var(--gold-light)" : "var(--gold)",
        color: "white",
        fontWeight: 600,
        letterSpacing: "0.05em",
        boxShadow: active
          ? "0 0 30px rgba(201,162,39,0.8)"
          : "0 10px 25px rgba(0,0,0,0.15)",
        transition: "all 0.3s ease",
      }}
    >
      CHECK ✨{active && <Sparkle />}
    </motion.button>
  );
}
