"use client";

import { motion } from "framer-motion";
import CTAButton from "@/components/CTAButton";
import FloatingCard from "@/components/FloatingCard";
import { useRouter } from "next/navigation";
import TopBar from "@/components/Topbar";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <TopBar />
      <div>
        <motion.main
          className="center-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div style={{ textAlign: "center", maxWidth: 900 }}>
            <motion.p
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              style={{ fontSize: "3rem", marginBottom: "1rem" }}
            >
              Happy Valentines Day!!
            </motion.p>

            <p style={{ fontSize: "1.1rem", opacity: 0.8, lineHeight: "1.8" }}>
              Welcome to our Valentine&apos;s Day Challenge! 🎮
              <br />
              Think you know me well enough to unlock the vault? <br />
              Here is a kiss for good luck!
            </p>

            <FloatingCard />

            <div style={{ marginTop: "40px" }}>
              <CTAButton
                onClick={() => router.push("/vault")}
                text="BEGIN THE TOUR →"
              />
            </div>
          </div>
        </motion.main>
      </div>
    </>
  );
}
