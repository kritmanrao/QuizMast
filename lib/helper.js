import useQuestion from "@/hooks/useQuestions";

export function addUuid(quizId, question) {
  return {
    id: crypto.randomUUID(),
    quizId,
    ...question,
  };
}

