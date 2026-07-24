const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "STACK", href: "#stack" },
  { label: "MILESTONES", href: "#milestones" },
];

export default function Header() {
  return (
    <header className="flex items-start justify-between gap-6 px-6 py-8 sm:px-10 md:px-16 md:py-10">
      <div>
        <h1 className="font-serif text-2xl font-bold tracking-tight sm:text-3xl">
          NGUYEN THANH HUY
        </h1>
        <p className="mt-1 text-xs font-light tracking-[0.2em] text-gray-400 sm:text-sm">
          SENIOR AUTOMOTIVE SOFTWARE ENGINEER
        </p>
      </div>

      <div className="flex items-center gap-6">
        <nav className="hidden items-center gap-6 text-xs font-medium tracking-wider text-gray-700 sm:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-black">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-black px-5 py-2 text-xs font-medium tracking-wider transition-colors hover:bg-black hover:text-white"
        >
          CONTACT
        </a>
      </div>
    </header>
  );
}
