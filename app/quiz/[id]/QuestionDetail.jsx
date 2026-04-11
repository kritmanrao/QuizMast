// components/quiz/QuestionDetail.jsx
export default function QuestionDetail({ questionData, userAnswer }) {
  const { question, options, correctOption } = questionData;

  const getOptionStyle = (idx) => {
    const isCorrect = idx === correctOption;
    const isUserChoice = idx === userAnswer;

    if (isCorrect) return "border-green-500/50 bg-green-500/10 text-green-400";
    if (isUserChoice && !isCorrect)
      return "border-red-500/50 bg-red-500/10 text-red-400";
    return "border-stone-800 bg-stone-800/20 text-stone-500";
  };

  return (
    <div className="rounded-2xl border border-stone-800 bg-stone-900/20 p-6 transition-all hover:bg-stone-900/40">
      <div className="mb-4 flex items-start justify-between gap-4">
        <h4 className="text-lg font-medium text-stone-200">{question}</h4>
        {userAnswer === correctOption ? (
          <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-bold text-green-500">
            CORRECT
          </span>
        ) : (
          <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold text-red-500">
            WRONG
          </span>
        )}
      </div>

      <div className="grid gap-2">
        {options.map((opt, i) => (
          <div
            key={i}
            className={`flex items-center justify-between rounded-xl border px-4 py-3 font-mono text-sm ${getOptionStyle(i)}`}
          >
            <span>{opt}</span>
            {i === correctOption && (
              <span className="text-[10px] font-bold uppercase">
                Correct Answer
              </span>
            )}
            {i === userAnswer && i !== correctOption && (
              <span className="text-[10px] font-bold uppercase">Your Pick</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
