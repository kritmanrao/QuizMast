import { QuizContext } from "@/context/QuizContext";
import { useContext } from "react";

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("Quiz Context use outside of QuizProvider.");
  }
  return context;
}

export default useQuiz;
