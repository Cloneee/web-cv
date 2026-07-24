const STACK = [
  { name: "TypeScript", iconClass: "devicon-typescript-plain" },
  { name: "Java", iconClass: "devicon-java-plain" },
  { name: "Kotlin", iconClass: "devicon-kotlin-plain" },
  { name: "Rust", iconClass: "devicon-rust-original" },
];

const FRAMEWORKS_AND_TOOLS = [
  { name: "Docker", iconClass: "devicon-docker-plain" },
  { name: "Ionic", iconClass: "devicon-ionic-original" },
  { name: "Tauri", iconClass: "devicon-tauri-plain" },
  { name: "Express", iconClass: "devicon-express-original" },
  { name: "Angular", iconClass: "devicon-angular-plain" },
];

export default function TechStack() {
  return (
    <section id="stack" className="border-t border-gray-100 px-6 py-16 sm:px-10 md:px-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-gray-500">CORE TECH STACK</p>
        <h2 className="mt-3 font-serif text-3xl font-black tracking-tight text-black sm:text-4xl">
          Built for reliable, maintainable automotive software.
        </h2>
        <p className="text-xs font-semibold tracking-[0.2em] text-gray-500">LANGUAGES</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {STACK.map((tech) => (
            <span
              key={tech.name}
              className="inline-flex items-center gap-2 rounded-full border border-black px-4 py-2 text-xs font-semibold tracking-wider text-black"
            >
              <i className={tech.iconClass} aria-hidden="true"></i>
              {tech.name.toUpperCase()}
            </span>
          ))}
        </div>

        <div className="mt-10">
          <p className="text-xs font-semibold tracking-[0.2em] text-gray-500">FRAMEWORKS AND TOOLS</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {FRAMEWORKS_AND_TOOLS.map((item) => (
              <span
                key={item.name}
                className="inline-flex items-center gap-2 rounded-full border border-black px-4 py-2 text-xs font-semibold tracking-wider text-black"
              >
                <i className={item.iconClass} aria-hidden="true"></i>
                {item.name.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
