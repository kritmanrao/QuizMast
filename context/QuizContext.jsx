"use client";
import { createContext, useReducer } from "react";
import { initialQuiz } from "@/lib/storage.js";

export const QuizContext = createContext();

// this is now some fake test it will we be [] or data-base when development done.
const initialState = initialQuiz;

export const QuizActions = Object.freeze({
  ADD_QUIZ: "addQuiz",
  DELETE_QUIZ: "deleteQuiz",
  EDIT_TITLE: "editTitle",
  EDIT_STATUS: "editStatus",
});

function reducer(state, action) {
  switch (action.type) {
    // adding new quiz which in in payload
    case QuizActions.ADD_QUIZ:
      return [...state, action.payload];

    // deleting quiz through id
    case QuizActions.DELETE_QUIZ:
      return state.filter((quiz) => quiz.id !== action.payload);

    // edit Title payload = {id, newTitle}
    case QuizActions.EDIT_TITLE:
      return state.map((quiz) =>
        quiz.id === action.payload.id
          ? { ...quiz, title: action.payload.newTitle }
          : quiz,
      );
    // edit status payload = {id} status-> true / false
    case QuizActions.EDIT_STATUS:
      return state.map((quiz) =>
        quiz.id === action.payload ? { ...quiz, status: true } : quiz,
      );
    default:
      throw new Error("Unknown Action");
  }
}

function QuizProvider({ children }) {
  const [quizzes, dispatch] = useReducer(reducer, initialState);

  return (
    <QuizContext.Provider value={{ quizzes, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

export default QuizProvider;
