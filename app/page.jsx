import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Footer from "@/components/ui/Footer";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="justify-centers flex flex-col items-center gap-20">
      <Hero />
      <Button text="start" />
      <Features />
      <Footer />
    </main>
  );
}
