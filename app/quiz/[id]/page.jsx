// quiz-app\app\quiz\[id]\page.jsx
"use client";

import { useParams } from "next/navigation";
import { useState, useMemo } from "react";
import useQuestion from "@/hooks/useQuestions";
import useQuiz from "@/hooks/useQuiz.js";
import Starter from "./Starter";
import Questions from "./Question";
import ShowResult from "./ShowResult";

import { QuizActions } from "@/context/QuizContext";

export default function QuizPage() {
  const [status, setStatus] = useState("ready"); // ready | started | finished
  const [answer, setAnswer] = useState([]);
  const { id } = useParams();

  const { quizzes, dispatch } = useQuiz();
  const { questions } = useQuestion();

  // Memoize data selection to prevent heavy filtering on every state change
  const currentQuiz = useMemo(
    () => quizzes?.find((q) => q.id === id),
    [quizzes, id],
  );

  const filterQuestions = useMemo(
    () => questions?.filter((q) => q.quizId === id),
    [questions, id],
  ); 

  function finishQuiz() {
    setStatus("finished");
    dispatch({ type: QuizActions.EDIT_STATUS, payload: id });
    // quizDispatch({ type: QuizActions.ADD_QUIZ, payload: newQuiz });
  }

  // Loading State
  if (!currentQuiz || !filterQuestions) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-stone-800 border-t-green-500" />
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-screen max-w-5xl px-4 py-8">
      {status === "ready" && (
        <Starter
          quiz={currentQuiz}
          questionCount={filterQuestions.length}
          onClick={() => setStatus("started")}
        />
      )}

      {status === "started" && (
        <Questions
          questions={filterQuestions}
          updateAnser={(newAns) => setAnswer(newAns)}
          finishQuiz={finishQuiz}
        />
      )}

      {status === "finished" && (
        <ShowResult
          questions={JSON.stringify(filterQuestions)}
          answer={JSON.stringify(answer)}
        />
      )}
    </div>
  );
}
