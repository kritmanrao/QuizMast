import React from "react";

export default function Select() {
  return (
    <div className="relative inline-block">
      <select
        name="difficulty"
        defaultValue="easy"
        className="w-max cursor-pointer appearance-none rounded-full bg-transparent px-3 py-1 text-sm font-medium transition-colors outline-none hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
      >
        <option value="easy" className="">
          Easy
        </option>
        <option value="medium" className="">
          Medium
        </option>
        <option value="hard" className="">
          Hard
        </option>
      </select>

      {/* Custom chevron to keep it looking like a dropdown */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-zinc-400">
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
