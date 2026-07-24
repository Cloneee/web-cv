const STACK = ["Node.js", "TypeScript", "Java", "Kotlin", "Rust"];

export default function TechStack() {
  return (
    <section id="stack" className="border-t border-gray-100 px-6 py-16 sm:px-10 md:px-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-gray-500">CORE TECH STACK</p>
        <h2 className="mt-3 font-serif text-3xl font-black tracking-tight text-black sm:text-4xl">
          Built for reliable, maintainable automotive software.
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {STACK.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-black px-4 py-2 text-xs font-semibold tracking-wider text-black"
            >
              {tech.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
