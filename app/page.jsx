import Categories from "@/components/sections/Categories";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Preview from "@/components/sections/Preview";

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-x-hidden px-6">
      <Hero />
      <Preview /> {/* This adds the big "App Image" look like Next.js */}
      <Categories /> {/* Topic selection */}
      <Features />
      {/* Footer is already in layout.jsx */}
    </main>
  );
}
