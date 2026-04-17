
export function addUuid(quizId, question) {
  return {
    id: crypto.randomUUID(),
    quizId,
    ...question,
  };
}

