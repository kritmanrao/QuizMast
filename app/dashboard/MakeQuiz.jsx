"use client";

import React from "react";

import AutoResizingTextarea from "@/components/ui/AutoResizingTextarea";
import InputNumber from "@/components/ui/InputNumber";
import Select from "@/components/ui/Select";

import useQuiz from "@/hooks/useQuiz.js";
import { generateAIQuestions } from "@/lib/ai/generator.js";

import { QuizActions } from "../../context/QuizContext.jsx";

export default function MakeQuiz() {
  const { dispatch } = useQuiz();

  function addQuiz(quizId, title, difficulty) {
    const newQuiz = {
      id: quizId,
      title,
      difficulty,
      status: false,
    };

    dispatch({ type: QuizActions.ADD_QUIZ, payload: newQuiz });

    console.log("quiz added", newQuiz);
  }

  function addQuestions(questions, quizId) {}

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
      console.log(err);
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
      className="rounded-5 mt-5 w-[90%] max-w-170 rounded-2xl bg-stone-900 px-5 py-3 text-white capitalize"
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
          className="ml-auto cursor-pointer rounded-md bg-sky-900 px-2 py-1 text-zinc-200 transition-all duration-1000 active:scale-1"
          type="submit"
        >
          {" "}
          make it{" "}
        </button>
      </div>
    </form>
  );
}
