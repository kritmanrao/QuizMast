// components/home/Preview.jsx
import Image from "next/image";

export default function Preview() {
  return (
    <section className="flex w-full justify-center py-20">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-stone-800 bg-stone-900/50 p-4 shadow-2xl">
        {/* Browser Top Bar Decor */}
        <div className="mb-4 flex gap-1.5 px-2">
          <div className="h-3 w-3 rounded-full bg-red-500/50" />
          <div className="h-3 w-3 rounded-full bg-amber-500/50" />
          <div className="h-3 w-3 rounded-full bg-green-500/50" />
        </div>

        {/* Placeholder for your actual App Screenshot */}
        <div className="flex aspect-video w-full items-center justify-center rounded-xl border border-stone-800 bg-stone-950">
          <span className="font-mono text-stone-700 italic">
            <img src="/dashbord.png" alt="image of dashbord" />
          </span>
        </div>

        {/* Decorative Glow behind the image */}
        <div className="absolute inset-0 -z-10 bg-green-500/10 blur-[100px]" />
      </div>
    </section>
  );
}
