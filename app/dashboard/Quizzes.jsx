import Quiz from "./Quiz";
export default function Quizzes({ quizzes }) {
  if (!quizzes || quizzes.length === 0) return null; // Or show EmptyState

  return (
    <div className="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {quizzes.map((quiz) => (
        <Quiz
          id={quiz.id}
          key={quiz.id}
          title={quiz.title}
          difficulty={quiz.difficulty}
          status={quiz.status}
        />
      ))}
    </div>
  );
}
