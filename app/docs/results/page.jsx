import DocsSidebar from "@/components/sections/DocsSidebar";

export default function ResultsDocs() {
  return (
    <div className="mx-auto flex max-w-7xl gap-12 px-6 py-12">
      <DocsSidebar />

      <main className="max-w-3xl flex-1">
        <header className="mb-10">
          <div className="mb-2 font-mono text-sm text-green-400">
            Docs {">"} Viewing Results
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">
            Performance Analytics
          </h1>
          <p className="text-lg leading-relaxed text-stone-400">
            Understand your scores and learn from your mistakes with our
            detailed breakdown.
          </p>
        </header>

        <section className="space-y-12">
          {/* Summary Stats */}
          <div className="group">
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-800 bg-stone-900 text-sm text-green-400">
                1
              </span>
              The Result Summary
            </h2>
            <p className="mb-4 leading-relaxed text-stone-400">
              Immediately after finishing, you will see a circular progress
              indicator showing your{" "}
              <strong className="text-stone-200">Accuracy Percentage</strong>.
              This gives you an instant &quot;Pass/Fail&quot; perspective on the
              topic.
            </p>
          </div>

          {/* Detailed Breakdown */}
          <div className="group">
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-800 bg-stone-900 text-sm text-green-400">
                2
              </span>
              Question-by-Question Review
            </h2>
            <p className="mb-4 leading-relaxed text-stone-400">
              Below the summary, we list every question from the session. Our
              color-coded system makes it easy to review:
            </p>
            <ul className="space-y-3 pl-4">
              <li className="flex items-center gap-3 text-stone-400">
                <span className="h-2 w-2 rounded-full bg-green-400"></span>
                <span className="font-medium text-stone-200">Green:</span>{" "}
                Correct answer identified.
              </li>
              <li className="flex items-center gap-3 text-stone-400">
                <span className="h-2 w-2 rounded-full bg-red-500"></span>
                <span className="font-medium text-stone-200">Red:</span> Your
                incorrect selection.
              </li>
              <li className="flex items-center gap-3 text-stone-400">
                <span className="h-2 w-2 rounded-full bg-stone-500"></span>
                <span className="font-medium text-stone-200">Neutral:</span> The
                correct answer (shown if you missed it).
              </li>
            </ul>
          </div>

          {/* Data Persistence */}
          <div className="group">
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-800 bg-stone-900 text-sm text-green-400">
                3
              </span>
              History & Storage
            </h2>
            <p className="leading-relaxed text-stone-400">
              Your results are stored in your browser&apos;s{" "}
              <strong className="text-stone-200">Local Storage</strong>. This
              allows you to revisit your scores without ever needing to create
              an account.
            </p>
          </div>
        </section>

        {/* Warning Callout */}
        <div className="mt-16 flex gap-4 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-6">
          <div className="text-xl text-amber-400">⚠️</div>
          <div>
            <h4 className="mb-1 font-medium text-white">Cache Management</h4>
            <p className="text-sm text-stone-400">
              Clearing your browser data or using Incognito mode will
              permanently delete your quiz history[cite: 12, 36]. Ensure you
              take screenshots of important milestones!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
