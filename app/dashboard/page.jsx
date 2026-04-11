"use client";

import useQuiz from "@/hooks/useQuiz";
import MakeQuiz from "./MakeQuiz";
import Footer from "@/components/ui/Footer";
import Quizzes from "./Quizzes";

export default function Page() {
  const { quizzes } = useQuiz();

  return (
    <div className="flex h-full min-h-dvh w-full flex-col bg-stone-950 text-stone-100">
      {/* Header Section */}
      <header className="px-8 pt-8 pb-4">
        <h1 className="text-3xl font-black tracking-tight">Dashboard</h1>
        <p className="text-sm text-stone-500">
          Select a challenge to begin testing your skills.
        </p>
      </header>

      {/* Scrollable Area */}
      <main className="custom-scrollbar mb-50 flex-1 overflow-y-auto">
        <Quizzes quizzes={quizzes} />
      </main>

      <Footer>
        <MakeQuiz />
      </Footer>
    </div>
  );
}
