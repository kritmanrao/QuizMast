"use client";
import { createContext, useReducer } from "react";

export const QuizContext = createContext();

// this is now some fake test it will we be [] or data-base when development done.
const initialState = [
  {
    id: "39189c0b-226e-4786-ae53-2e4353747a96",
    title: "Test",
    difficulty: "easy",
    status: true,
  },
  {
    id: "39189c0b-226e-4786-ae53",
    title: "Cpp",
    difficulty: "heard",
    status: false,
  },
  {
    id: "39189c0b-ae53-2e4353747a96",
    title: "Java",
    difficulty: "medium",
    status: false,
  },
];

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
        quiz.id === payload.id
          ? { ...quiz, title: action.payload.newTitle }
          : quiz,
      );
    // edit status payload = {id} status-> true / false
    case QuizActions.EDIT_STATUS:
      return state.map((quiz) =>
        quiz.id === payload.id ? { ...quiz, status: true } : quiz,
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
