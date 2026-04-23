import Link from "next/link";
import { User, ShieldCheck, History, ArrowLeft } from "lucide-react";

export default function ProfilePlaceholder() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-2xl" />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-stone-800 bg-stone-900 text-stone-400">
          <User size={40} />
        </div>
      </div>

      <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">
        Your Quiz Profile
      </h1>
      <p className="mb-8 max-w-md text-stone-400">
        Personal analytics and local history are being integrated. Your data
        stays 100% on your device.
      </p>

      <div className="mb-10 grid w-full max-w-lg grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex items-start gap-4 rounded-xl border border-stone-800 bg-stone-900/40 p-4 text-left">
          <History className="shrink-0 text-green-500" size={20} />
          <div>
            <h3 className="text-sm font-semibold text-white">Local History</h3>
            <p className="text-xs text-stone-500">
              Track every quiz you&apos;ve ever taken in this browser.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 rounded-xl border border-stone-800 bg-stone-900/40 p-4 text-left">
          <ShieldCheck className="shrink-0 text-blue-500" size={20} />
          <div>
            <h3 className="text-sm font-semibold text-white">Privacy First</h3>
            <p className="text-xs text-stone-500">
              No cloud sync means your data is truly yours.
            </p>
          </div>
        </div>
      </div>

      <Link
        href="/dashboard"
        className="flex items-center gap-2 rounded-full bg-white px-8 py-3 font-medium text-black transition-all hover:scale-105"
      >
        <ArrowLeft size={18} />
        Back to Dashboard
      </Link>
    </div>
  );
}
