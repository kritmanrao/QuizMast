export async function generateAIQuestions(prompt, quantity, difficulty) {
  const res = await fetch("/api/generate-quiz", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // 🔥 IMPORTANT
    },
    body: JSON.stringify({
      prompt,
      quantity,
      difficulty,
    }),
  });

  const data = await res.json();
  return data; // 🔥 VERY IMPORTANT
}
