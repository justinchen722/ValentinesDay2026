"use client";
import { motion } from "framer-motion";

export default function CTAButton({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{
        background: "var(--gold)",
        color: "white",
        border: "none",
        padding: "14px 40px",
        borderRadius: "50px",
        fontWeight: 500,
        cursor: "pointer",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background = "var(--gold-dark)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
    >
      {text}
    </motion.button>
  );
}
