const MILESTONES = [
  {
    number: "1.",
    title: "BUILT THE FOUNDATION OF PASSTHRU TABLET DIAGNOSTICS",
    description:
      "Established core architecture for robust communication between a custom Android OS and VCI hardware, creating a reliable baseline for future diagnostic modules.",
  },
  {
    number: "2.",
    title: "LED TECHNICAL DELIVERY OF PASSTHRU VIRTUAL TOOL",
    description:
      "Delivered a virtualization version across on-tool and web experiences with strict multi-layer security from app to server, reducing operational risk and improving deployment confidence.",
  },
  {
    number: "3.",
    title: "CONTRIBUTED TO PASSTHRU SDK ARCHITECTURE MODERNIZATION",
    description:
      "Helped shape the SDK rewrite with business logic rebuilt in Kotlin, addressing legacy hardware and technology constraints while improving maintainability and long-term extensibility.",
  },
];

export default function Milestones() {
  return (
    <section
      id="milestones"
      className="border-t border-gray-100 px-6 py-16 sm:px-10 md:px-16 md:py-24"
    >
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
        {MILESTONES.map((milestone) => (
          <div key={milestone.number}>
            <span className="font-serif text-6xl font-black text-black sm:text-7xl">
              {milestone.number}
            </span>
            <h3 className="mt-4 text-sm font-semibold tracking-wide text-black">
              {milestone.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">{milestone.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
