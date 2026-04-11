// components/home/Hero.jsx
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center pt-24 pb-16 text-center">
      {/* Small Badge */}
      <div className="mb-6 flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1.5 text-xs font-medium text-green-400">
        <Zap size={14} fill="currentColor" />
        <span>Now powered by Gemini 1.5 Flash</span>
      </div>

      {/* Main Title */}
      <h1 className="max-w-4xl bg-gradient-to-b from-white to-stone-500 bg-clip-text text-6xl font-black tracking-tight text-transparent md:text-8xl">
        The AI-Powered <br /> Quiz Platform.
      </h1>

      {/* Subtext */}
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-400 md:text-xl">
        Create, take, and share intelligent quizzes in seconds. Optimized for
        speed, scalability, and the ultimate learning experience.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-all hover:bg-stone-200 active:scale-95"
        >
          Start Quiz Now
          <ArrowRight size={18} />
        </Link>

        <Link
          href="#features"
          className="rounded-full border border-stone-800 bg-stone-900/50 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-stone-800"
        >
          View Features
        </Link>
      </div>
    </section>
  );
}
