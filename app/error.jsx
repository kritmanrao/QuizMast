// app/error.jsx
"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10 text-red-500 ring-1 ring-red-500/20">
        <AlertTriangle size={40} />
      </div>
      <h2 className="text-2xl font-bold text-white">Something went wrong!</h2>
      <p className="mt-2 mb-8 max-w-md text-stone-400">
        An unexpected error occurred while loading this quiz content. Don&apos;t
        worry, your progress is likely safe.
      </p>
      <button
        onClick={() => reset()}
        className="flex items-center gap-2 rounded-xl bg-stone-100 px-6 py-3 text-sm font-bold text-stone-950 transition-all hover:bg-white active:scale-95"
      >
        <RefreshCcw size={18} />
        Try Again
      </button>
    </div>
  );
}
