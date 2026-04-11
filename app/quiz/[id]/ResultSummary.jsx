// components/quiz/ResultSummary.jsx
export default function ResultSummary({ correct, total, accuracy }) {
  return (
    <div className="rounded-3xl border border-stone-800 bg-stone-900/40 p-10 text-center backdrop-blur-md">
      <h2 className="text-sm font-bold tracking-widest text-stone-500 uppercase">
        Quiz Completed
      </h2>

      <div className="mt-6 flex justify-center gap-8">
        <StatCard
          label="Score"
          value={`${correct} / ${total}`}
          color="text-green-500"
        />
        <div className="h-16 w-[1px] bg-stone-800" />
        <StatCard
          label="Accuracy"
          value={`${accuracy}%`}
          color="text-blue-500"
        />
      </div>

      {/* Circular Progress Visual (Optional but looks pro) */}
      <div className="relative mx-auto mt-10 flex h-32 w-32 items-center justify-center">
        <svg className="h-full w-full -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="58"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-stone-800"
          />
          <circle
            cx="64"
            cy="64"
            r="58"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={364.4}
            strokeDashoffset={364.4 - (364.4 * accuracy) / 100}
            className={`${accuracy > 50 ? "text-green-500" : "text-amber-500"} transition-all duration-1000`}
          />
        </svg>
        <span className="absolute text-2xl font-black text-white">
          {accuracy}%
        </span>
      </div>
    </div>
  );
}

function StatCard({ label, value, color }) {
  return (
    <div>
      <p className={`text-3xl font-black ${color}`}>{value}</p>
      <p className="text-xs font-medium text-stone-500 uppercase">{label}</p>
    </div>
  );
}
