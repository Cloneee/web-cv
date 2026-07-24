import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import TechStack from "./components/TechStack";
import Milestones from "./components/Milestones";
import Footer from "./components/Footer";

function App() {
  const [activeTech, setActiveTech] = useState<string | null>(null);

  const handleSelectTech = (tech: string) => {
    setActiveTech((current) => (current === tech ? null : tech));
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <TechStack activeTech={activeTech} onSelectTech={handleSelectTech} />
        <Milestones activeTech={activeTech} onSelectTech={handleSelectTech} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
