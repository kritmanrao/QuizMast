// components/section/EmptyState.jsx
import Link from "next/link";
import { ClipboardX, ArrowLeft } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-stone-800 bg-stone-900/50 p-8 text-center">
      {/* Icon Container */}
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-stone-800 text-stone-400">
        <ClipboardX size={40} strokeWidth={1.5} />
      </div>

      {/* Text Content */}
      <h3 className="text-xl font-semibold text-stone-100">
        No Questions Available
      </h3>
      <p className="mt-2 mb-8 max-w-sm text-sm text-stone-400">
        It looks like there aren&apos;t any questions in this quiz yet. Try
        checking back later or explore other available quizzes.
      </p>

      {/* Action Button */}
      <Link
        href="/dashboard"
        className="flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-green-500 hover:shadow-lg hover:shadow-green-900/20 active:scale-95"
      >
        <ArrowLeft size={18} />
        Back to Dashboard
      </Link>
    </div>
  );
}
