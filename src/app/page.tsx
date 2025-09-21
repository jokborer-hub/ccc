import Hero from "@/components/Hero/Hero";
import About from "@/sections/About/About";
import Vision from "@/sections/Vision/Vision";
import AlphaNode from "@/sections/AlphaNode/AlphaNode";
import Tokenomics from "@/sections/Tokenomics/Tokenomics";
import Community from "@/sections/Community/Community";
import Roadmap from "@/sections/Roadmap/Roadmap";


export default function Home() {
  return (
    <main>
        <Hero />
        <About />
        <Vision />
        <AlphaNode />
        <Tokenomics />
        <Community />
        <Roadmap />

      
      <footer className="bg-card-light dark:bg-card-dark mt-16 py-10 border-t border-border-light dark:border-border-dark">
        <div className="container mx-auto px-6 text-center text-text-light/70 dark:text-text-dark/70">
          <p className="font-display text-lg">
            <span className="gradient-text">CZQJ</span> © 2025. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}