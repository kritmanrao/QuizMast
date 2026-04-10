import React, { useRef } from "react";

const AutoResizingTextarea = () => {
  const textareaRef = useRef(null);

  // Settings
  const lineHeight = 24; // This should match your CSS (leading-6 = 24px)
  const maxRows = 10;
  const maxHeight = lineHeight * maxRows;

  const handleInput = (e) => {
    const element = e.target;

    // 1. Reset height to shrink if text is deleted
    element.style.height = "auto";

    // 2. Calculate new height
    const newHeight = element.scrollHeight;

    // 3. Apply height limit logic
    if (newHeight <= maxHeight) {
      element.style.height = `${newHeight}px`;
      element.style.overflowY = "hidden"; // Hide scrollbar while growing
    } else {
      element.style.height = `${maxHeight}px`;
      element.style.overflowY = "auto"; // Show scrollbar after 10 rows
    }
  };

  return (
    <textarea
      ref={textareaRef}
      onInput={handleInput}
      rows="1"
      name="prompt"
      placeholder="Type or paste here..."
      className="w-full resize-none rounded-md border border-none p-2 leading-6 outline-none"
      style={{ lineHeight: `${lineHeight}px`, minHeight: `${lineHeight}px` }}
    />
  );
};

export default AutoResizingTextarea;
