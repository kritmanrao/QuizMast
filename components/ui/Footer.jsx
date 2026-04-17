export default function Footer({ children }) {
  return (
    <footer className="sticky bottom-0 flex w-full justify-center bg-transparent py-4">
      {children}
    </footer>
  );
}

// className="sticky bottom-0 flex w-full justify-center bg-stone-950/80 py-4 backdrop-blur-md"
