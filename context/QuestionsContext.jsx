"use client";
import { createContext, useReducer } from "react";

export const QuestionsContext = createContext();

// this is now some fake test it will we be [] or data-base when development done.
const initialState = [
  {
    id: "2749798f-8a68-4004-b535-ccfc5687981d",
    quizId: "39189c0b-226e-4786-ae53-2e4353747a96",
    question: "what is js?",
    options: [
      "semi-object oriented",
      "functional programming lang",
      "oops",
      "none of these",
    ],
    correctOption: 0,
  },
  {
    id: "c22942b5-fafb-45cf-9418-6a9bfe355f79",
    quizId: "39189c0b-226e-4786-ae53-2e4353747a96",
    question: "cpp is a ?",
    options: [
      "semi-object oriented",
      "functional programming lang",
      "oops",
      "none of these",
    ],
    correctOption: 0,
  },
  {
    id: "f68afd51-e228-458a-9cc3-5339b48eafc9",
    quizId: "39189c0b-226e-4786-ae53-2e4353747a96",
    question: "react is ?",
    options: [
      "js library",
      "functional programming lang",
      "oops",
      "none of these",
    ],
    correctOption: 0,
  },
  {
    id: "cb3d88ab-b3d1-49f2-ba6d-ed7e87a9876f",
    quizId: "39189c0b-226e-4786-ae53-2e4353747a96",
    question: "what is next js",
    options: [
      "semi-object oriented",
      "react freamework",
      "oops",
      "none of these",
    ],
    correctOption: 1,
  },
];

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
