// app/not-found.jsx
import Link from "next/link";
import { Home } from "lucide-react";

export default function PageNotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-[120px] leading-none font-black text-stone-800/50">
        404
      </h1>
      <div className="mt-[-40px]">
        <h2 className="text-2xl font-bold text-white">Page Not Found</h2>
        <p className="mt-2 mb-8 text-stone-400">
          The quiz or page you are looking for has been moved or deleted.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-8 py-3 text-sm font-bold text-white transition-all hover:bg-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
        >
          <Home size={18} />
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
