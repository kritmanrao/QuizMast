import { QuestionsContext } from "@/context/QuestionsContext";
import { useContext } from "react";

function useQuiz() {
  const context = useContext(QuestionsContext);
  if (context === undefined) {
    throw new Error("question Context use outside of QuestionProvider.");
  }
  return context;
}

export default useQuiz;
