"use client";

import EmptyState from "@/components/sections/EmptyState";
import { useCallback, useEffect, useState } from "react";

export default function Questions({ questions, updateAnser, finishQuiz }) {
  const [index, setIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [answer, setUserAnswer] = useState(Array(questions.length).fill(-1));

  const nextQuestion = useCallback(() => {
    if (index < questions.length - 1) {
      setTimeLeft(30);
      setIndex((curr) => curr + 1);
    } else {
      updateAnser(answer);
      finishQuiz();
    }
  }, [index, questions.length, answer, updateAnser, finishQuiz]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft <= 0) {
        nextQuestion();
      } else {
        setTimeLeft((curr) => curr - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft, nextQuestion]);

  if (!questions || questions.length === 0) {
    return (
      <main className="container mx-auto max-w-2xl px-4 py-20">
        <EmptyState />
      </main>
    );
  }

  const { question, options } = questions[index];
  const progress = ((index + 1) / questions.length) * 100;
  const timerPercentage = (timeLeft / 30) * 100;

  const handleSelect = (optionIdx) => {
    const tmp = [...answer];
    tmp[index] = optionIdx;
    setUserAnswer(tmp);
  };

  return (
    <div className="mx-auto w-300 max-w-2xl px-4 py-10">
      {/* Header Info */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <span className="text-sm font-medium tracking-wider text-green-500 uppercase">
            Step {index + 1} of {questions.length}
          </span>
          <h2 className="mt-1 text-2xl font-bold text-white">Quiz Session</h2>
        </div>
        <div className="flex flex-col items-end">
          <span
            className={`font-mono text-xl font-bold ${timeLeft < 10 ? "animate-pulse text-red-500" : "text-stone-300"}`}
          >
            00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
          </span>
          <span className="text-[10px] tracking-tighter text-stone-500 uppercase">
            Time Remaining
          </span>
        </div>
      </div>

      {/* Main Card */}
      <div className="relative overflow-hidden rounded-3xl border border-stone-800 bg-stone-900/40 p-8 shadow-2xl backdrop-blur-sm">
        {/* Animated Timer Bar */}
        <div className="absolute top-0 left-0 h-1 w-full bg-stone-800">
          <div
            className={`h-full transition-all duration-1000 ease-linear ${timeLeft < 10 ? "bg-red-500" : "bg-green-500"}`}
            style={{ width: `${timerPercentage}%` }}
          />
        </div>

        {/* Question */}
        <div className="relative mb-8 pl-6">
          {/* Left accent line */}
          <div className="absolute top-0 left-0 h-full w-1.5 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)]" />

          <span className="text-[10px] font-bold tracking-[0.2em] text-stone-500 uppercase">
            Question Selection
          </span>
          <h3 className="mt-2 text-2xl leading-snug font-semibold text-white md:text-3xl">
            {question}
          </h3>
        </div>

        {/* Options Grid */}
        <div className="grid gap-3">
          {options.map((op, i) => {
            const isSelected = answer[index] === i;
            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={`group flex items-center justify-between rounded-2xl border-2 px-5 py-4 text-left transition-all duration-200 ${
                  isSelected
                    ? "border-green-500 bg-green-500/10 text-green-400"
                    : "border-stone-800 bg-stone-800/20 text-stone-400 hover:border-stone-600 hover:bg-stone-800/40"
                }`}
              >
                <span className="flex items-center gap-4">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold transition-colors ${isSelected ? "border-green-500 bg-green-500 text-stone-950" : "border-stone-700 group-hover:border-stone-500"}`}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                  {op}
                </span>
                {isSelected && (
                  <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-10 flex justify-end">
          <button
            onClick={nextQuestion}
            disabled={answer[index] === -1}
            className="group flex items-center gap-2 rounded-xl bg-white px-8 py-3 font-bold text-black transition-all hover:bg-green-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            {index === questions.length - 1 ? "Finish Quiz" : "Next Question"}
            <svg
              className="transition-transform group-hover:translate-x-1"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Progress Bar */}
      <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-stone-800">
        <div
          className="h-full bg-stone-600 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
