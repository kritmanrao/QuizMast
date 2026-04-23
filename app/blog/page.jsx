import Link from "next/link";
import { MessageSquare, Share2, BookOpen, ArrowRight } from "lucide-react";

export default function BlogCommunityPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {/* Header Section */}
      <header className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
          Community <span className="text-green-500">&</span> Insights
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-stone-400">
          A space to share resources, roadmaps, and questions. No accounts, no
          bias—just pure knowledge sharing.
        </p>
      </header>

      {/* Feature Teasers */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Roadmap Feature */}
        <div className="rounded-2xl border border-stone-800 bg-stone-900/50 p-8 transition-colors hover:border-stone-700">
          <div className="mb-4 text-green-400">
            <BookOpen size={32} />
          </div>
          <h3 className="mb-2 text-xl font-bold text-white">
            Learning Roadmaps
          </h3>
          <p className="text-sm text-stone-400">
            Curated paths for Frontend, Backend, and AI engineering to guide
            your quiz choices.
          </p>
        </div>

        {/* Anonymous Q&A */}
        <div className="rounded-2xl border border-stone-800 bg-stone-900/50 p-8 transition-colors hover:border-stone-700">
          <div className="mb-4 text-blue-400">
            <MessageSquare size={32} />
          </div>
          <h3 className="mb-2 text-xl font-bold text-white">Anonymous Q&A</h3>
          <p className="text-sm text-stone-400">
            Ask questions or share insights without the pressure of a profile.
          </p>
        </div>

        {/* Resource Sharing */}
        <div className="rounded-2xl border border-stone-800 bg-stone-900/50 p-8 transition-colors hover:border-stone-700">
          <div className="mb-4 text-amber-400">
            <Share2 size={32} />
          </div>
          <h3 className="mb-2 text-xl font-bold text-white">Resource Wall</h3>
          <p className="text-sm text-stone-400">
            A real-time feed of the best articles and documentation links found
            by the community.
          </p>
        </div>
      </div>

      {/* Coming Soon Callout */}
      <div className="mt-12 flex flex-col items-center justify-center rounded-3xl border border-dashed border-stone-800 p-12 text-center">
        <div className="mb-4 inline-flex rounded-full bg-green-500/10 px-4 py-1 font-mono text-xs tracking-widest text-green-500 uppercase">
          Development Stage: Researching Moderation
        </div>
        <h2 className="mb-6 text-2xl font-semibold text-white">
          This community hub will be available in the next release.
        </h2>
        <Link
          href="/dashboard"
          className="group flex items-center gap-2 rounded-full bg-white px-8 py-3 font-medium text-black transition-all hover:bg-stone-200"
        >
          Back to Quiz Dashboard
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}
