"use client";

import { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import { questions } from "./questions";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Vault() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (index >= questions.length) {
      router.push("/gallery");
    }
  }, [index, router]);

  return (
    <motion.div
      className="center-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {index < questions.length && (
        <QuestionCard
          question={questions[index]}
          onCorrect={() => {
            setIndex(index + 1);
          }}
          onBack={() => {
            if (index > 0) {
              setIndex(index - 1);
            }
          }}
          canGoBack={index > 0}
        />
      )}
    </motion.div>
  );
}
