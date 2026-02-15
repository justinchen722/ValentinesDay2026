"use client";

import { motion } from "framer-motion";
import Sparkle from "./Sparkle";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  isSelected?: boolean;
};

export default function OptionButton({
  children,
  onClick,
  isSelected = false,
}: Props) {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <motion.button
      onClick={handleClick}
      whileTap={{ scale: 0.97 }}
      style={{
        position: "relative",
        padding: "14px 36px",
        borderRadius: "50px",
        border: "none",
        cursor: "pointer",
        background: isSelected ? "var(--pink-glow)" : "white",
        color: "var(--text-dark)",
        fontWeight: 500,
        boxShadow: isSelected
          ? "0 0 25px rgba(246, 193, 210, 0.8)"
          : "0 8px 20px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
        flex: 1,
      }}
    >
      {children}
      {isSelected && <Sparkle />}
    </motion.button>
  );
}
