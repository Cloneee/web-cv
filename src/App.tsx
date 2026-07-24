import Header from "./components/Header";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import TechStack from "./components/TechStack";
import Milestones from "./components/Milestones";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <TechStack />
        <Milestones />
      </main>
      <Footer />
    </div>
  );
}

export default App;
