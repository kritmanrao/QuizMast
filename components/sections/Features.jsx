// components/home/Features.jsx
export default function Features() {
  const features = [
    {
      title: "Lightning Fast",
      desc: "Built on Next.js 15 for near-instant transitions and zero-lag quiz interactions.",
      icon: "⚡",
    },
    {
      title: "AI Generated",
      desc: "Generate full quizzes from any topic or document using our advanced AI engine.",
      icon: "🤖",
    },
    {
      title: "Detailed Analytics",
      desc: "Track your accuracy, speed, and ranking with our professional-grade dashboard.",
      icon: "📊",
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((f, i) => (
          <div
            key={i}
            className="group rounded-3xl border border-stone-800 bg-stone-900/50 p-8 transition-all hover:border-stone-700 hover:bg-stone-900"
          >
            <div className="mb-4 text-3xl">{f.icon}</div>
            <h3 className="mb-2 text-xl font-bold text-white">{f.title}</h3>
            <p className="text-sm leading-relaxed text-stone-500 group-hover:text-stone-400">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
