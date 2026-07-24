const PROJECTS = [
  { label: "Headphone concept", icon: "headphones" },
  { label: "Minimal footwear", icon: "shoe" },
  { label: "UI wireframe", icon: "wireframe" },
];

function ProjectIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "headphones":
      return (
        <svg
          viewBox="0 0 64 64"
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 34v-2a20 20 0 0 1 40 0v2" />
          <rect x="8" y="34" width="10" height="16" rx="4" />
          <rect x="46" y="34" width="10" height="16" rx="4" />
        </svg>
      );
    case "shoe":
      return (
        <svg
          viewBox="0 0 64 64"
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M10 46V28c4 0 6 2 9 4 3 2 6 3 10 3h6c5 0 8 1 12 4 3 2.5 5 3 7 3v4z" />
          <path d="M10 46h44M19 32v3M27 34v3" />
        </svg>
      );
    default:
      return (
        <svg
          viewBox="0 0 64 64"
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="10" y="10" width="44" height="44" rx="2" />
          <path d="M10 22h44M22 22v32" />
        </svg>
      );
  }
}

export default function Portfolio() {
  return (
    <section className="border-t border-gray-100 px-6 py-16 sm:px-10 md:px-16 md:py-24">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {PROJECTS.map((project) => (
          <div
            key={project.label}
            className="flex aspect-square flex-col items-center justify-center gap-4 bg-gray-50 text-gray-400"
          >
            <ProjectIcon icon={project.icon} />
            <span className="text-xs tracking-wide">{project.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
