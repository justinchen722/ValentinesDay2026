"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import HeartBurst from "./HeartBurst";
import { ErrorPopup } from "./ErrorPopup";
import { Question } from "./questions";
import CheckButton from "@/components/CheckButton";
import OptionButton from "@/components/OptionButton";
import { QuestionTitle } from "@/components/QuestionTitle";
import BackButton from "@/components/BackButton";
import Image from "next/image";

interface QuestionCardProps {
  question: Question;
  onCorrect: () => void;
  onBack: () => void;
  canGoBack?: boolean;
}

export default function QuestionCard({
  question,
  onCorrect,
  onBack,
  canGoBack = false,
}: QuestionCardProps) {
  const [value, setValue] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [hearts, setHearts] = useState(false);

  const checkAnswer = () => {
    const answerValue = question.type === "multiple" ? selectedOption : value;
    if (answerValue?.trim().toLowerCase() === question.answer.toLowerCase()) {
      setHearts(true);
      setTimeout(() => {
        setHearts(false);
        onCorrect();
      }, 1000);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        gap: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxHeight: "calc(100vh - 90px)",
        overflow: "hidden",
      }}
    >
      <QuestionTitle title={question.prompt} />

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "250px", // fixed height so it NEVER collapses
          maxWidth: "600px",
        }}
      >
        <Image
          src={question.image}
          alt="Question image"
          fill
          style={{
            objectFit: "contain",
            borderRadius: "12px",
          }}
        />
      </div>

      {canGoBack && (
        <BackButton
          onClick={() => {
            onBack();
            setSelectedOption(null);
            setValue("");
          }}
        />
      )}
      <div style={cardStyle}>
        <div style={{ ...promptContainerStyle, alignItems: "stretch" }}>
          {question.type === "multiple" &&
            question.options?.map((opt: string) => (
              <OptionButton
                key={opt}
                isSelected={selectedOption === opt}
                onClick={() => setSelectedOption(opt)}
              >
                {opt}
              </OptionButton>
            ))}
        </div>

        <div style={promptContainerStyle}>
          {question.type === "short" && (
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  checkAnswer();
                }
              }}
              placeholder="Enter your answer..."
              style={{
                width: "100%",
                maxWidth: "400px",
                padding: "14px 18px",
                borderRadius: "12px",
                border: "2px solid rgba(246, 193, 210, 0.4)",
                background: "rgba(248, 233, 238, 0.6)",
                color: "var(--text-dark)",
                fontSize: "1rem",
                fontWeight: 500,
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(246, 193, 210, 0.1)",
                textAlign: "center" as const,
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "rgba(246, 193, 210, 0.8)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.8)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(246, 193, 210, 0.3)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(246, 193, 210, 0.4)";
                e.currentTarget.style.background = "rgba(248, 233, 238, 0.6)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(246, 193, 210, 0.1)";
              }}
            />
          )}
        </div>

        <CheckButton onClick={checkAnswer} />

        {error && <ErrorPopup message="Incorrect answer!" />}
        {hearts && <HeartBurst />}
      </div>
    </div>
  );
}

const cardStyle = {
  position: "relative" as const,
  background: "white",
  padding: "40px",
  borderRadius: "16px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
  textAlign: "center" as const,
  width: "100%",
  maxWidth: "600px",
  flex: "1",
};

const promptContainerStyle = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "12px",
  margin: "20px 0",
  alignItems: "center",
  width: "100%",
  justifyContent: "center",
};
