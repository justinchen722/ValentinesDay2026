"use client";

import { motion } from "framer-motion";

interface BackButtonProps {
  onClick: () => void;
}

export default function BackButton({ onClick }: BackButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      style={{
        background:
          "linear-gradient(135deg, rgba(246, 193, 210, 0.2), rgba(255, 105, 180, 0.1))",
        border: "1.5px solid rgba(246, 193, 210, 0.4)",
        borderRadius: "25px",
        padding: "10px 18px",
        cursor: "pointer",
        color: "var(--text-dark)",
        fontWeight: 600,
        fontSize: "0.9rem",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(246, 193, 210, 0.3)";
        e.currentTarget.style.borderColor = "rgba(246, 193, 210, 0.6)";
        e.currentTarget.style.boxShadow = "0 4px 15px rgba(246, 193, 210, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(246, 193, 210, 0.2)";
        e.currentTarget.style.borderColor = "rgba(246, 193, 210, 0.4)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      ← Go Back
    </motion.button>
  );
}
