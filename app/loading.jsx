// app/loading.jsx
export default function Loading() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center">
      <div className="relative flex h-20 w-20 items-center justify-center">
        {/* Outer spinning ring */}
        <div className="absolute h-full w-full animate-spin rounded-full border-4 border-stone-800 border-t-green-500" />
        {/* Inner pulsing logo */}
        <div className="animate-pulse text-2xl font-black text-green-500">
          Q
        </div>
      </div>
      <p className="mt-6 animate-pulse font-mono text-sm tracking-widest text-stone-500 uppercase">
        Initializing Quiz...
      </p>
    </div>
  );
}
