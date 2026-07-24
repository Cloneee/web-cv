import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import TechStack from "./components/TechStack";
import Milestones from "./components/Milestones";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

type ThemeMode = "light" | "dark" | "system";

const THEME_STORAGE_KEY = "theme-mode";

function App() {
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") {
      return "system";
    }

    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === "light" || savedTheme === "dark" || savedTheme === "system") {
      return savedTheme;
    }

    return "system";
  });

  const [isSystemDark, setIsSystemDark] = useState<boolean>(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const handleSelectTech = (tech: string) => {
    setActiveTech((current) => (current === tech ? null : tech));
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaQuery = (event: MediaQueryListEvent) => {
      setIsSystemDark(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQuery);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQuery);
    };
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const resolvedTheme = themeMode === "system" ? (isSystemDark ? "dark" : "light") : themeMode;

    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
    document.documentElement.style.colorScheme = resolvedTheme;
    window.localStorage.setItem(THEME_STORAGE_KEY, themeMode);
  }, [themeMode, isSystemDark]);

  return (
    <div className="min-h-screen bg-white text-black transition-colors dark:bg-neutral-950 dark:text-neutral-100">
      <Header themeMode={themeMode} onThemeModeChange={setThemeMode} />
      <main>
        <Hero />
        <Philosophy />
        <TechStack activeTech={activeTech} onSelectTech={handleSelectTech} />
        <Milestones activeTech={activeTech} onSelectTech={handleSelectTech} />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
