import QuestionProvider from "@/context/QuestionsContext";
import "./globals.css";

import NavBar from "@/components/ui/NavBar";
import QuizProvider from "@/context/QuizContext";
import Footer from "@/components/sections/Footer";

// app/layout.jsx
export const metadata = {
  title: "QuizMast",
  icons: {
    icon: [
      { url: "/QuizMast.png", sizes: "32x32", type: "image/png" },
      { url: "/QuizMast.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/QuizMast.png", sizes: "180x180", type: "image/png" }],
  },
};

// app/layout.jsx
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* The '/' refers directly to your public folder */}
        <link rel="icon" href="/QuizMast.png" type="image/png" />
      </head>
      <body className="flex min-h-screen flex-col bg-stone-950 font-sans text-stone-100 antialiased">
        <QuizProvider>
          <QuestionProvider>
            <NavBar />
            {/* The main container should expand to fill remaining space */}
            <main className="flex-1">{children}</main>
            <Footer />
          </QuestionProvider>
        </QuizProvider>
      </body>
    </html>
  );
}
