import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { DemoInterface } from "@/components/landing/demo-interface";
import { ProblemSection } from "@/components/landing/problem-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <main>
        <HeroSection />
        <DemoInterface />
        <ProblemSection />
      </main>
    </div>
  );
}