const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "STACK", href: "#stack" },
  { label: "MILESTONES", href: "#milestones" },
];

type ThemeMode = "light" | "dark" | "system";

type HeaderProps = {
  themeMode: ThemeMode;
  onThemeModeChange: (mode: ThemeMode) => void;
};

const THEME_OPTIONS: ThemeMode[] = ["light", "dark", "system"];

export default function Header({ themeMode, onThemeModeChange }: HeaderProps) {
  return (
    <header className="flex items-start justify-between gap-6 px-6 py-8 sm:px-10 md:px-16 md:py-10">
      <div>
        <h1 className="font-serif text-2xl font-bold tracking-tight sm:text-3xl">
          NGUYEN THANH HUY
        </h1>
        <p className="mt-1 text-xs font-light tracking-[0.2em] text-gray-400 dark:text-neutral-400 sm:text-sm">
          SENIOR AUTOMOTIVE SOFTWARE ENGINEER
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-4 sm:gap-6">
        <div className="inline-flex rounded-full border border-black/15 bg-white p-1 dark:border-white/20 dark:bg-neutral-900">
          {THEME_OPTIONS.map((mode) => {
            const isActive = themeMode === mode;

            return (
              <button
                key={mode}
                type="button"
                onClick={() => onThemeModeChange(mode)}
                className={`rounded-full px-3 py-1 text-[10px] font-semibold tracking-[0.16em] transition-colors sm:text-[11px] ${
                  isActive
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                }`}
                aria-pressed={isActive}
              >
                {mode.toUpperCase()}
              </button>
            );
          })}
        </div>

        <nav className="hidden items-center gap-6 text-xs font-medium tracking-wider text-gray-700 dark:text-neutral-300 sm:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-black dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-black px-5 py-2 text-xs font-medium tracking-wider transition-colors hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
        >
          CONTACT
        </a>
      </div>
    </header>
  );
}
