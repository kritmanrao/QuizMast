export async function generateAIQuestions(prompt, quantity, difficulty) {
  return {
    title: "Test",
    questions: [
      {
        question: "what is js?", 
        options: [
          "scripting Lang",
          "database",
          "operating system",
          "none of these",
        ],
        correctOption: 0,
      },
      {
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
        question: "react is ?",
        options: ["library of js", "framework", "both", "none of these"],
        correctOption: 0,
      },
      {
        question: "what is next js",
        options: [
          "scripting Lang",
          "freamework of react",
          "back-end environment",
          "none of these",
        ],
        correctOption: 1,
      },
    ],
  };
}
