import { MILESTONES } from "../data/projectStack";

type MilestonesProps = {
  activeTech: string | null;
  onSelectTech: (tech: string) => void;
};

export default function Milestones({
  activeTech,
  onSelectTech,
}: MilestonesProps) {
  return (
    <section
      id="milestones"
      className="border-t border-gray-100 px-6 py-16 dark:border-white/10 sm:px-10 md:px-16 md:py-24"
    >
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
        {MILESTONES.map((milestone) => (
          <article
            key={milestone.id}
            className={`rounded-2xl border border-transparent p-6 transition-all duration-200 ${
              activeTech && !milestone.stack.includes(activeTech) ? "opacity-35" : "opacity-100"
            }`}
          >
            <span className="font-serif text-6xl font-black text-black dark:text-white sm:text-7xl">
              {milestone.number}
            </span>
            <h3 className="mt-4 text-sm font-semibold tracking-wide text-black dark:text-white">
              {milestone.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-neutral-400">{milestone.description}</p>
            <p className="mt-4 text-[11px] font-semibold tracking-[0.18em] text-gray-500 dark:text-neutral-400">
              MAIN CONTRIBUTION
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-neutral-400">{milestone.mainContribution}</p>
            <p className="mt-4 text-[11px] font-semibold tracking-[0.18em] text-gray-500 dark:text-neutral-400">
              STACK USED
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {milestone.stack.map((tech) => {
                const isActive = activeTech === tech;

                return (
                  <button
                    key={`${milestone.id}-${tech}`}
                    type="button"
                    onClick={() => onSelectTech(tech)}
                    className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.12em] transition ${
                      isActive
                        ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                        : "border-black/70 text-black hover:border-black hover:bg-black hover:text-white dark:border-white/70 dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
                    }`}
                  >
                    {tech.toUpperCase()}
                  </button>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
