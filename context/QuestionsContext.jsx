"use client";
import { createContext, useReducer } from "react";
import { initialQuestions } from "@/lib/storage.js";

export const QuestionsContext = createContext();

// this is now some fake test it will we be [] or data-base when development done.

const initialState = initialQuestions;

export const QuestionActions = Object.freeze({
  ADD_QUESTION_BY_ONE: "addQuestionByOne",
  ADD_QUESTION_BY_MANY: "addQuestionByMany",
  DELETE_QUESTION: "deleteQuestion",
  DELETE_QUESTIONS_BY_QUIZ_ID: "deleteQuestionsByQuizId",
});

function reducer(state, action) {
  switch (action.type) {
    // adding new question which in in payload
    case QuestionActions.ADD_QUESTION_BY_ONE:
      return [...state, action.payload];

    // adding more that 1 question which in in array
    case QuestionActions.ADD_QUESTION_BY_MANY:
      return [...state, ...action.payload];
    // deleting question through id
    case QuestionActions.DELETE_QUESTION:
      return state.filter((quiz) => quiz.id !== action.payload);

    // delete questions by quizId
    case QuestionActions.DELETE_QUESTIONS_BY_QUIZ_ID:
      return state.filter((quiz) => quiz.quizId !== action.payload);
    default:
      throw new Error("Unknown Action");
  }
}

function QuestionProvider({ children }) {
  const [questions, dispatch] = useReducer(reducer, initialState);
  return (
    <QuestionsContext.Provider value={{ questions, dispatch }}>
      {children}
    </QuestionsContext.Provider>
  );
}

export default QuestionProvider;
