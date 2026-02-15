"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

const songs = [
  { title: "Our Song", src: "/music/song1.mp3" },
  { title: "Soft Moments", src: "/music/song2.mp3" },
];

export default function TopBar() {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [looping, setLooping] = useState(true);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  const changeSong = (index: number) => {
    setCurrent(index);
    if (audioRef.current) {
      audioRef.current.src = songs[index].src;
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <motion.div
        style={{
          position: "relative",
          top: 0,
          width: "100%",
          background: "rgba(248, 233, 238, 0.95)",
          backdropFilter: "blur(10px)",
          padding: "16px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 4px 20px rgba(246, 193, 210, 0.15)",
          zIndex: 100,
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left: Branding */}
        <motion.h3
          style={{
            fontFamily: "var(--font-serif)",
            letterSpacing: "0.05em",
            background: "linear-gradient(135deg, #ff69b4 0%, #ff1493 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            margin: 0,
            cursor: "pointer",
            fontSize: "1.2rem",
          }}
          whileHover={{ scale: 1.05 }}
          onClick={() => router.push("/")}
        >
          ♥ Justin & Chloe ♥
        </motion.h3>
      </motion.div>
    </>
  );
}
