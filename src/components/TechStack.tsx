import { TECH_TAGS } from "../data/projectStack";

type TechStackProps = {
  activeTech: string | null;
  onSelectTech: (tech: string) => void;
};

export default function TechStack({ activeTech, onSelectTech }: TechStackProps) {
  const languages = TECH_TAGS.filter((tag) => tag.category === "language");
  const frameworksAndTools = TECH_TAGS.filter((tag) => tag.category === "framework");

  const renderChip = (name: string, iconClass?: string) => {
    const isSelected = activeTech === name;

    return (
      <button
        key={name}
        type="button"
        onClick={() => onSelectTech(name)}
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-wider transition ${
          isSelected
            ? "border-black bg-black text-white"
            : "border-black text-black hover:bg-black hover:text-white"
        }`}
      >
        {iconClass ? <i className={iconClass} aria-hidden="true"></i> : null}
        {name.toUpperCase()}
      </button>
    );
  };

  return (
    <section id="stack" className="border-t border-gray-100 px-6 py-16 sm:px-10 md:px-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-gray-500">CORE TECH STACK</p>
        <h2 className="mt-3 font-serif text-3xl font-black tracking-tight text-black sm:text-4xl">
          Built for reliable, maintainable automotive software.
        </h2>
        <p className="mt-3 text-xs text-gray-500">
          Click a chip to highlight related projects in Milestones. Click again to clear.
        </p>

        <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-gray-500">LANGUAGES</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {languages.map((tech) => renderChip(tech.name, tech.iconClass))}
        </div>

        <div className="mt-10">
          <p className="text-xs font-semibold tracking-[0.2em] text-gray-500">
            FRAMEWORKS AND TOOLS
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {frameworksAndTools.map((item) => renderChip(item.name, item.iconClass))}
          </div>
        </div>
      </div>
    </section>
  );
}
