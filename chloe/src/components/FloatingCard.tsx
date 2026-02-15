"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FloatingCard() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 4 }}
      style={{
        marginTop: "40px",
        width: "320px",
        height: "420px",
        background: "white",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "16px",
        boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
        overflow: "hidden",
      }}
    >
      <Image
        src="/cat.gif"
        alt="Cute cat"
        width={320}
        height={420}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </motion.div>
  );
}
