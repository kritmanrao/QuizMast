import Link from "next/link";
import { Layers, ArrowLeft, Construction } from "lucide-react";

export default function CategoriesComingSoon() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      {/* Icon with a subtle glow effect */}
      <div className="relative mb-8">
        <div className="absolute inset-0 rounded-full bg-green-500/20 blur-3xl" />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-stone-800 bg-stone-900 text-green-400">
          <Construction size={40} strokeWidth={1.5} />
        </div>
      </div>

      <div className="mb-2 font-mono text-sm tracking-widest text-green-500 uppercase">
        Feature Roadmap
      </div>

      <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
        Smart Categories <br />
        <span className="text-3xl text-stone-500">Coming Soon</span>
      </h1>

      <p className="mb-10 max-w-md text-lg leading-relaxed text-stone-400">
        We are building a system to automatically categorize your AI-generated
        quizzes by technology, difficulty, and complexity.
      </p>

      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 rounded-full bg-white px-8 py-3 font-medium text-black transition-transform hover:scale-105 active:scale-95"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        <Link
          href="/docs"
          className="rounded-full border border-stone-800 bg-stone-900/50 px-8 py-3 font-medium text-stone-300 transition-colors hover:bg-stone-800 hover:text-white"
        >
          View Docs
        </Link>
      </div>

      {/* Decorative "Teaser" Grid */}
      <div className="pointer-events-none mt-20 grid grid-cols-2 gap-4 opacity-20 grayscale md:grid-cols-4">
        {["Frontend", "Backend", "DevOps", "Mobile"].map((cat) => (
          <div
            key={cat}
            className="flex items-center gap-2 rounded-xl border border-stone-800 p-4"
          >
            <Layers size={16} />
            <span className="font-mono text-sm">{cat}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
