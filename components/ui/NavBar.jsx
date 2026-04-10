"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const pathname = usePathname();

  const active = "border-b-2 text-lg border-green-400 px-1 py-1 rounded-sm";

  return (
    <nav className="relative flex items-center justify-center gap-10 bg-sky-800 py-4">
      <Link href="/" className="absolute left-5">
        {" "}
        Quiz
      </Link>

      <Link
        href="/dashboard"
        className={pathname === "/dashboard" ? active : ""}
      >
        Dashboard
      </Link>
      <Link href="/" className={pathname === "/" ? active : ""}>
        {" "}
        Home
      </Link>
      <Link href="/"> Mcq </Link>
      <Link href="/"> other</Link>
    </nav>
  );
}

export default NavBar;
