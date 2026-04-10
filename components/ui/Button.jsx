import Link from "next/link";
import React from "react";

export default function Button({ type, text }) {
  return (
    <Link
      href="/dashboard"
      className="rounded-md border p-2 px-3 shadow-xl/20 shadow-[#9c9c9c]"
    >
      {" "}
      {text}{" "}
    </Link>
  );
}
