// components/quiz/ShowResult.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import ResultSummary from "./ResultSummary";
import QuestionDetail from "./QuestionDetail"; 

export default function ShowResult({ questions, answer }) {
  const [showDetails, setShowDetails] = useState(false);

  const parsedQuestions = JSON.parse(questions);
  const parsedAnswers =
    JSON.parse(answer) || Array(parsedQuestions.length).fill(-1);

  // Calculate Stats
  const totalQuestions = parsedQuestions.length;
  const correctCount = parsedQuestions.reduce((acc, q, idx) => {
    return acc + (parsedAnswers[idx] === q.correctOption ? 1 : 0);
  }, 0);
  const accuracy = Math.round((correctCount / totalQuestions) * 100);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      {/* Top Summary Section */}
      <ResultSummary
        correct={correctCount}
        total={totalQuestions}
        accuracy={accuracy}
      />

      <div className="mt-10 flex flex-col items-center gap-4">
        <button
          onClick={() => {
            setShowDetails(!showDetails);
          }}
          className="w-full max-w-xs rounded-xl border border-stone-700 bg-stone-900 px-6 py-3 font-medium text-stone-300 transition-all hover:bg-stone-800"
        >
          {showDetails ? "Hide Detailed Report" : "Review Your Answers"}
        </button>

        <Link
          href="/dashboard"
          className="text-sm text-stone-500 underline decoration-stone-700 underline-offset-4 hover:text-green-500"
        >
          Back to Dashboard
        </Link>
      </div>

      {/* Conditional Detailed Breakdown */}
      {showDetails && (
        <div
          id="answers"
          className="animate-in fade-in slide-in-from-bottom-4 mt-12 space-y-6 duration-500"
        >
          <h3 className="text-lg font-semibold text-stone-100">
            Review Questions
          </h3>
          {parsedQuestions.map((ques, idx) => (
            <QuestionDetail
              key={ques.id}
              questionData={ques}
              userAnswer={parsedAnswers[idx]}
            />
          ))}
        </div>
      )}
    </div>
  );
}
