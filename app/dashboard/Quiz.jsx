import Badges from "@/components/ui/Badges";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react"; // Optional icon

export default function Quiz({ id, title, difficulty, status }) {
  const isComplete = status;
  const badgeType =
    difficulty === "easy"
      ? "success"
      : difficulty === "medium"
        ? "warning"
        : "danger";

  return (
    <div className="group relative w-72 overflow-hidden rounded-2xl border border-stone-800 bg-stone-900 p-5 transition-all duration-300 hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]">
      {/* Top Row: Difficulty & Status */}
      <div className="mb-4 flex items-center justify-between">
        <Badges type={badgeType} text={difficulty} />
        <span
          className={`h-2 w-2 rounded-full ${isComplete ? "bg-green-500 shadow-[0_0_8px_#22c55e]" : "bg-stone-700"}`}
        />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-stone-100 transition-colors group-hover:text-green-400">
        {title}
      </h3>

      <p className="mt-1 text-xs font-medium tracking-widest text-stone-500 uppercase">
        {isComplete ? "Completed" : "Awaiting Attempt"}
      </p>

      {/* Action Area */}
      <div className="mt-6 flex items-center justify-between border-t border-stone-800 pt-4">
        <Link
          href={`quiz/${id}`}
          className="flex items-center gap-2 text-sm font-bold text-stone-300 transition-colors hover:text-white"
        >
          {isComplete ? "Retake Quiz" : "Start Now"}
          <ArrowUpRight
            size={16}
            className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
          />
        </Link>
      </div>

      {/* Decorative background element */}
      <div className="absolute -right-4 -bottom-4 h-16 w-16 rounded-full bg-green-500/5 blur-2xl group-hover:bg-green-500/10" />
    </div>
  );
}
