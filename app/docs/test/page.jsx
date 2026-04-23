import DocsSidebar from "@/components/sections/DocsSidebar";

export default function TakingTestDocs() {
  return (
    <div className="mx-auto flex max-w-7xl gap-12 px-6 py-12">
      <DocsSidebar />

      <main className="max-w-3xl flex-1">
        <header className="mb-10">
          <div className="mb-2 font-mono text-sm text-green-400">
            Docs {">"} Taking a Test
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">
            The Quiz Experience
          </h1>
          <p className="text-lg leading-relaxed text-stone-400">
            Learn how to navigate the test interface and manage your time
            effectively. [cite: 23]
          </p>
        </header>

        <section className="space-y-12">
          {/* Feature 1: The Timer */}
          <div className="group">
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-800 bg-stone-900 text-sm text-green-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </span>
              30-Second Precision
            </h2>
            <p className="mb-4 leading-relaxed text-stone-400">
              Every question is governed by a{" "}
              <strong className="text-stone-200">30-second timer</strong>. This
              is designed to simulate high-pressure environments like technical
              interviews or certifications. [cite: 23]
            </p>
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-sm text-amber-200/70">
              <strong>Note:</strong> If the timer reaches zero before you select
              an answer, the app will automatically move to the next question
              and mark it as incorrect.
            </div>
          </div>

          {/* Feature 2: Selection Logic */}
          <div className="group">
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-800 bg-stone-900 text-sm text-green-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </span>
              Interactive Options
            </h2>
            <p className="leading-relaxed text-stone-400">
              Questions feature multiple-choice options. Once an option is
              selected, it is highlighted. You can change your choice as many
              times as you like until you click the{" "}
              <span className="text-green-400">&quot;Next&quot;</span> button.
              [cite: 23]
            </p>
          </div>

          {/* Feature 3: Progress Tracking */}
          <div className="group">
            <h2 className="mb-4 flex items-center gap-3 text-2xl font-semibold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-800 bg-stone-900 text-sm text-green-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20v-6M6 20V10M18 20V4" />
                </svg>
              </span>
              Visual Indicators
            </h2>
            <p className="leading-relaxed text-stone-400">
              A progress bar at the bottom of the interface tracks your position
              in the quiz (e.g., &quot;Question 4 of 10&quot;). This helps you
              pace yourself throughout the session.
            </p>
          </div>
        </section>

        {/* CTA Callout */}
        <div className="mt-16 flex items-center justify-between rounded-2xl border border-stone-800 bg-stone-900/50 p-8">
          <div>
            <h4 className="text-xl font-bold text-white">
              Ready to test your skills?
            </h4>
            <p className="text-stone-400">
              Jump straight into the dashboard and pick a topic.
            </p>
          </div>
          <a
            href="/dashboard"
            className="rounded-lg bg-white px-6 py-2 font-medium text-black transition-transform hover:scale-105 active:scale-95"
          >
            Go to Dashboard
          </a>
        </div>
      </main>
    </div>
  );
}
