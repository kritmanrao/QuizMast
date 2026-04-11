import { QuestionsContext } from "@/context/QuestionsContext";
import { useContext } from "react";

function useQuestion() {
  const context = useContext(QuestionsContext);
  if (context === undefined) {
    throw new Error("question Context use outside of QuestionProvider.");
  }
  return context;
}

export default useQuestion;
