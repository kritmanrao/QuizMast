// components/quiz/Starter.jsx
"use client";

import Badges from "@/components/ui/Badges";
import { Play, Clock, HelpCircle, Trophy } from "lucide-react"; // If you have lucide, otherwise use SVGs

export default function Starter({ quiz, onClick, questionCount }) {
  const { title, difficulty, status } = quiz;

  const badgeType =
    difficulty === "easy"
      ? "success"
      : difficulty === "medium"
        ? "warning"
        : "danger";

  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      {/* Decorative Icon */}
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-green-500/10 text-green-500 ring-1 ring-green-500/20">
        <Trophy size={40} />
      </div>

      <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white md:text-5xl">
        {title}
      </h1>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Badges text={difficulty} type={badgeType} />
        {status && (
          <span className="flex items-center gap-1 rounded-full bg-green-500/10 px-3 py-1 text-xs font-bold text-green-500 ring-1 ring-green-500/20">
            ✓ Previously Solved
          </span>
        )}
      </div>

      {/* Quiz Info Cards */}
      <div className="mt-12 grid w-full max-w-lg grid-cols-2 gap-4">
        <div className="rounded-2xl border border-stone-800 bg-stone-900/50 p-4">
          <HelpCircle className="mx-auto mb-2 text-stone-500" size={20} />
          <p className="text-xl font-bold text-white">{questionCount}</p>
          <p className="text-xs tracking-widest text-stone-500 uppercase">
            Questions
          </p>
        </div>
        <div className="rounded-2xl border border-stone-800 bg-stone-900/50 p-4">
          <Clock className="mx-auto mb-2 text-stone-500" size={20} />
          <p className="text-xl font-bold text-white">{questionCount * 0.5}m</p>
          <p className="text-xs tracking-widest text-stone-500 uppercase">
            Est. Time
          </p>
        </div>
      </div>

      <div className="mt-12 space-y-4">
        <button
          onClick={onClick}
          className="group flex items-center gap-3 rounded-2xl bg-green-600 px-12 py-4 text-lg font-bold text-white transition-all hover:bg-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] active:scale-95"
        >
          <Play fill="currentColor" size={20} />
          Start Quiz Now
        </button>
        <p className="text-sm text-stone-500">
          Note: You will have 30 seconds per question.
        </p>
      </div>
    </div>
  );
}
