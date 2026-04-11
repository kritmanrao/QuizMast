// components/home/Categories.jsx
import { Atom, Code2, Terminal, Globe } from "lucide-react"; // npm install lucide-react

const TOPICS = [
  {
    name: "React",
    icon: <Atom className="text-sky-400" />,
    count: "120+ Quizzes",
  },
  {
    name: "Next.js",
    icon: <Globe className="text-white" />,
    count: "80+ Quizzes",
  },
  {
    name: "C++",
    icon: <Terminal className="text-blue-600" />,
    count: "50+ Quizzes",
  },
  {
    name: "HTML5",
    icon: <Code2 className="text-orange-500" />,
    count: "100+ Quizzes",
  },
];

export default function Categories() {
  return (
    <section className="w-full max-w-6xl py-20">
      <h2 className="mb-10 text-center text-3xl font-bold text-white">
        Popular Topics
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {TOPICS.map((topic) => (
          <div
            key={topic.name}
            className="group cursor-pointer rounded-2xl border border-stone-800 bg-stone-900/30 p-6 transition-all hover:scale-[1.02] hover:bg-stone-800"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-stone-950 ring-1 ring-stone-800 group-hover:ring-green-500/50">
              {topic.icon}
            </div>
            <h3 className="font-bold text-white">{topic.name}</h3>
            <p className="text-xs text-stone-500">{topic.count}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
