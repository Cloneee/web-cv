const MILESTONES = [
  {
    number: '1.',
    title: 'LED CROSS-FUNCTIONAL DESIGN FOR PRODUCT X',
    description:
      'Aligned design, engineering, and business teams around a single vision, shipping a unified product language.',
  },
  {
    number: '2.',
    title: 'ARCHITECTED PLATFORM Y WITH A FOCUS ON INTUITIVE UX',
    description:
      'Rebuilt the core platform from the ground up, cutting time-to-value and reducing support load.',
  },
  {
    number: '3.',
    title: 'DELIVERED AWARD-WINNING MOBILE APP',
    description:
      'Led design and development of a mobile experience recognized for its clarity and craft.',
  },
]

export default function Milestones() {
  return (
    <section id="milestones" className="border-t border-gray-100 px-6 py-16 sm:px-10 md:px-16 md:py-24">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
        {MILESTONES.map((milestone) => (
          <div key={milestone.number}>
            <span className="font-serif text-6xl font-black text-black sm:text-7xl">
              {milestone.number}
            </span>
            <h3 className="mt-4 text-sm font-semibold tracking-wide text-black">
              {milestone.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              {milestone.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
