// app/docs/create/page.jsx
import DocsSidebar from "@/components/sections/DocsSidebar";

export default function CreateDocs() {
  return (
    <div className="mx-auto flex max-w-7xl gap-12 px-6 py-12">
      <DocsSidebar />

      <div className="max-w-3xl">
        <header className="mb-10">
          <div className="mb-2 font-mono text-sm text-green-400">
            Docs {">"} Creating
          </div>
          <h1 className="mb-4 text-4xl font-bold text-white">
            Creating a Quiz
          </h1>
          <p className="text-lg text-stone-400">
            Generate custom tests in seconds using AI prompts.
          </p>
        </header>

        <div className="space-y-8 text-stone-300">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              The Prompt System
            </h2>
            <p>
              Navigate to the Dashboard and look for the{" "}
              <span className="text-green-400 italic">
                &quot;Make Quiz&quot;
              </span>{" "}
              action. You don&apos;t need to format data manually—just describe
              what you want to learn.
            </p>
          </section>

          <div className="rounded-2xl border border-stone-800 bg-stone-900/50 p-6">
            <h3 className="mb-4 text-sm font-bold tracking-widest text-stone-500 uppercase">
              Pro Tip
            </h3>
            <p className="text-sm leading-relaxed">
              Be specific! Instead of &quot;JavaScript&quot;, try &quot;Advanced
              JavaScript closures and async patterns&quot; for a more
              challenging experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
