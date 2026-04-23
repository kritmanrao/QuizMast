import DocsSidebar from "@/components/sections/DocsSidebar";

export default function DocsPage() {
  return (
    <div className="mx-auto flex max-w-7xl gap-12 px-6 py-12">
      <DocsSidebar />

      <main className="max-w-3xl flex-1">
        <header className="mb-10">
          <div className="mb-2 font-mono text-sm text-green-400">
            Docs {">"} Introduction
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">
            How QuizAI Works
          </h1>
          <p className="text-lg leading-relaxed text-stone-400">
            A frictionless way to test your knowledge. No accounts, no
            passwords—just pure learning powered by AI.
          </p>
        </header>

        <section className="space-y-12">
          {/* Step 1 */}
          <div className="group">
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-800 bg-stone-900 text-sm text-green-400">
                1
              </span>
              Generate via Prompt
            </h2>
            <p className="mb-4 leading-relaxed text-stone-400">
              Navigate to the{" "}
              <strong className="text-stone-200">Make Quiz</strong> section.
              Simply type a topic like &quot;React Hooks&quot; or &quot;Advanced
              CSS Grid&quot;. Our AI will instantly curate a set of challenging
              questions for you.
            </p>
            <div className="rounded-xl border border-stone-800 bg-stone-950 p-4 font-mono text-sm text-stone-500">
              {"// Example Prompt "}
              <br />
              <span className="text-green-500">
                &quot;Create a 10-question quiz on Next.js 15 App Router&quot;
              </span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group">
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-800 bg-stone-900 text-sm text-green-400">
                2
              </span>
              Take the Quiz
            </h2>
            <p className="leading-relaxed text-stone-400">
              Each quiz comes with a built-in timer to simulate real-world test
              conditions. You can track your progress at the bottom of the card
              and see how much time remains for each question.
            </p>
          </div>

          {/* Step 3 */}
          <div className="group">
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-800 bg-stone-900 text-sm text-green-400">
                3
              </span>
              Analyze Results
            </h2>
            <p className="leading-relaxed text-stone-400">
              Once finished, you get an instant breakdown. We show you your
              **Accuracy Percentage**, which questions you got right, and
              provide the correct answers for the ones you missed.
            </p>
          </div>
        </section>

        {/* Info Callout */}
        <div className="mt-16 flex gap-4 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6">
          <div className="text-xl text-blue-400">💡</div>
          <div>
            <h4 className="mb-1 font-medium text-white">Privacy First</h4>
            <p className="text-sm text-stone-400">
              Since there is no login, your progress is stored locally in your
              browser. Clearing your cache will reset your quiz history.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
