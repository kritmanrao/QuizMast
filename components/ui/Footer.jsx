export default function Footer({ children }) {
  return (
    <footer className="fixed bottom-0 flex w-full justify-center bg-stone-950/80 py-4 backdrop-blur-md">
      {children}
    </footer>
  );
}
