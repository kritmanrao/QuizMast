// Replace GitHub with CodeXml
import {
  Mail,
  MessageSquare,
  Activity,
  ArrowRight,
  CodeXml,
} from "lucide-react";
import Link from "next/link";

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Support <span className="text-stone-500">&</span> Resources
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-stone-400">
          Need help or want to suggest a feature? We&apos;re here to help you
          get the most out of QuizAI.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact & Feedback */}
        <section
          id="contact"
          className="rounded-2xl border border-stone-800 bg-stone-900/50 p-8"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
            <Mail size={24} />
          </div>
          <h2 className="mb-2 text-xl font-bold text-white">
            Contact & Feedback
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-stone-400">
            Have a question or a feature request? The best way to reach out is
            through our community channels or email.
          </p>
          <a
            href="mailto:support@quizai.com"
            className="flex items-center justify-between rounded-xl bg-white px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-[1.02] active:scale-95"
          >
            Email Support
            <ArrowRight size={16} />
          </a>
        </section>

        {/* System Status */}
        <section
          id="status"
          className="rounded-2xl border border-stone-800 bg-stone-900/50 p-8"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
            <Activity size={24} />
          </div>
          <h2 className="mb-2 text-xl font-bold text-white">System Status</h2>
          <p className="mb-6 text-sm leading-relaxed text-stone-400">
            Current status of our AI generation and core services.
          </p>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-stone-300">
              <span>AI Quiz Engine</span>
              <span className="flex items-center gap-2 text-green-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                Operational
              </span>
            </div>
            <div className="flex items-center justify-between text-xs text-stone-300">
              <span>Client Database (Local)</span>
              <span className="text-green-400 italic">Connected</span>
            </div>
          </div>
        </section>

        {/* GitHub / Open Source Section */}
        <section className="rounded-2xl border border-dashed border-stone-800 p-8 text-center md:col-span-2">
          {/* Updated Icon */}
          <CodeXml className="mx-auto mb-4 text-stone-500" size={32} />
          <h3 className="mb-2 font-semibold text-white">
            Open Source Community
          </h3>
          <p className="mx-auto mb-6 max-w-md text-sm text-stone-400">
            Report bugs directly on our repository or contribute to the next
            generation of AI learning.
          </p>
          <Link
            href="https://github.com/kritmanrao/QuizMast"
            className="font-mono text-sm text-green-400 hover:underline"
          >
            view_repository.git
          </Link>
        </section>
      </div>
    </div>
  );
}
