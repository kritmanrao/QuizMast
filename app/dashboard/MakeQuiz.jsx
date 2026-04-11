"use client";

import React from "react";
import { Plus, ArrowRight } from "lucide-react";

import AutoResizingTextarea from "@/components/ui/AutoResizingTextarea";
import InputNumber from "@/components/ui/InputNumber";
import Select from "@/components/ui/Select";

import useQuiz from "@/hooks/useQuiz.js";
import useQuestion from "@/hooks/useQuestions.js";
import { addUuid } from "@/lib/helper.js";
import { generateAIQuestions } from "@/lib/ai/generator.js";

import { QuizActions } from "../../context/QuizContext.jsx";
import { QuestionActions } from "@/context/QuestionsContext.jsx";

export default function MakeQuiz() {
  const { dispatch: quizDispatch } = useQuiz();
  const { dispatch: questionDispatch } = useQuestion();

  function addQuiz(quizId, title, difficulty) {
    const newQuiz = {
      id: quizId,
      title,
      difficulty,
      status: false,
    };

    quizDispatch({ type: QuizActions.ADD_QUIZ, payload: newQuiz });
  }

  function addQuestions(quizId, questions) {
    const fullQuestions = questions.map((question) =>
      addUuid(quizId, question),
    );

    questionDispatch({
      type: QuestionActions.ADD_QUESTION_BY_MANY,
      payload: fullQuestions,
    });
  }

  async function createQuiz(difficulty, quantity, prompt) {
    try {
      const { title, questions } = await generateAIQuestions(
        prompt,
        quantity,
        difficulty,
      );

      const quizId = crypto.randomUUID();

      // adding array of question to context
      addQuestions(quizId, questions);

      // adding quiz of question to context
      addQuiz(quizId, title, difficulty);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { prompt, quantity, difficulty } = Object.fromEntries(
      new FormData(e.target),
    );

    createQuiz(difficulty, quantity, prompt);

    e.target.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[95%] max-w-3xl rounded-2xl border border-stone-600 bg-stone-900 px-5 py-3 text-white capitalize"
    >
      <AutoResizingTextarea />

      {/* down side buttons and quantity input  */}
      <div className="flex items-center justify-items-start gap-5">
        {/* no of question in quiz */}
        <InputNumber name="quantity" min={5} max={20} defaultValue={10} />
        {/* select difficulty of quiz */}
        <Select />
        {/* submit button */}
        <button
          onClick={() => {
            /* Your logic to open a modal or navigate */
          }}
          className="group relative ml-auto flex items-center gap-3 rounded-2xl bg-white/80 px-6 py-3.5 text-sm font-bold text-black transition-all hover:bg-green-500 hover:text-white hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] active:scale-95"
        >
          {/* Icon Container */}
          <div className="flex h-5 w-5 items-center justify-center rounded-lg bg-stone-900 text-white transition-colors group-hover:bg-white group-hover:text-green-600">
            <Plus size={14} strokeWidth={3} />
          </div>

          <span className="tracking-tight">Create New Quiz</span>

          {/* The Arrow that moves */}
          <ArrowRight
            size={18}
            className="ml-1 transition-all duration-300 group-hover:translate-x-1"
          />

          {/* Subtle border glow for dark mode */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10 ring-inset group-hover:ring-white/20" />
        </button>
      </div>
    </form>
  );
}

/* <button
          className="ml-auto cursor-pointer rounded-md bg-sky-900 px-2 py-1 text-zinc-200 transition-all duration-1000 active:scale-1"
          type="submit"
        >
          {" "}
          make it{" "}
        </button> */
