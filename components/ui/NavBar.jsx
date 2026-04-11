// components/ui/NavBar.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Home, Trophy, User, Layers } from "lucide-react"; // Optional: npm install lucide-react

export default function NavBar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: <Home size={18} /> },
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard size={18} />,
    },
    { name: "Leaderboard", href: "/leaderboard", icon: <Trophy size={18} /> },
    { name: "Categories", href: "/categories", icon: <Layers size={18} /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-stone-800 bg-stone-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 font-black text-stone-950 transition-transform group-hover:rotate-12">
            Q
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">
            QUIZ<span className="text-green-500">MAST</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                /* Added 'relative' and 'pb-1' to ensure the indicator stays contained */
                className={`relative flex items-center gap-2 pb-1 text-sm font-medium transition-all hover:text-green-400 ${
                  isActive ? "text-green-500" : "text-stone-400"
                }`}
              >
                {link.icon}
                {link.name}

                {/* Optimized Active Indicator */}
                {isActive && (
                  <span className="absolute -bottom-[21px] left-1/2 h-[3px] w-full -translate-x-1/2 rounded-full bg-green-500 pr-1.5 shadow-[0_0_12px_#22c55e]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action / Profile Section */}
        <div className="flex items-center gap-4">
          <Link
            href="/profile"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-800 bg-stone-900 text-stone-400 transition-colors hover:border-green-500 hover:text-white"
          >
            <User size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
