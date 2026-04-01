const stats = [
  { id: 1, value: '50K+', label: 'Active Users' },
  { id: 2, value: '200+', label: 'Premium Tools' },
  { id: 3, value: '4.9', label: 'Rating' }
]

const Stats = () => {
  return (
    <section className="purple-gradient py-10 md:py-14">
      <div className="container-width grid gap-8 text-center text-white md:grid-cols-3 md:gap-0">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className={`relative px-4 ${index !== 2 ? 'md:after:absolute md:after:right-0 md:after:top-1/2 md:after:h-16 md:after:w-px md:after:-translate-y-1/2 md:after:bg-white/30' : ''}`}
          >
            <h3 className="text-[42px] font-extrabold tracking-[-0.03em] md:text-[54px]">
              {stat.value}
            </h3>
            <p className="mt-3 text-[17px] text-white/90">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats