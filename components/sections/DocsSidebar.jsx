"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const docsLinks = [
  { title: "Introduction", href: "/docs" },
  { title: "Creating a Quiz", href: "/docs/create" },
  { title: "Taking a Test", href: "/docs/test" },
  { title: "Viewing Results", href: "/docs/results" },
];

export default function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-24 hidden h-[calc(100vh-6rem)] w-64 overflow-y-auto pr-8 md:block">
      <h4 className="mb-4 px-2 font-bold text-white">Getting Started</h4>
      <nav className="flex flex-col gap-2">
        {docsLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-lg px-3 py-2 text-sm transition-colors ${
              pathname === link.href
                ? "bg-stone-900 font-medium text-green-400"
                : "text-stone-400 hover:bg-stone-900/50 hover:text-white"
            }`}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
