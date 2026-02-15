"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/chloe.jpeg",
  "/IMG_2611.jpeg",
  "/IMG_8781.jpeg",
  "/IMG_8807.jpeg",
  "/IMG_8833.jpeg",
  "/IMG_8931.jpeg",
  "/IMG_9337.jpeg",
  "/IMG_9411.jpeg",
  "/IMG_9525.jpeg",
  "/lp_image.jpeg",
];

export default function PhotoGallery() {
  const duplicated = [...images, ...images, ...images];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        padding: "40px 0",
        maxWidth: "100vw",
      }}
    >
      {/* Soft fade edges */}
      <div className="fade-left" />
      <div className="fade-right" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 50,
          ease: "linear",
        }}
        style={{
          display: "flex",
          gap: "40px",
          width: "max-content",
        }}
      >
        {duplicated.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
            style={{
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
              background: "white",
            }}
          >
            <Image
              src={src}
              alt="Memory"
              width={150}
              height={200}
              style={{
                objectFit: "cover",
                display: "block",
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
