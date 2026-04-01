const statsData = [
  { id: 1, value: '500+', label: 'Premium Users' },
  { id: 2, value: '300+', label: 'Tools Sold' },
  { id: 3, value: '4.9', label: 'Average Rating' },
]

const Stats = () => {
  return (
    <section className="py-8">
      <div className="container-width grid gap-6 rounded-3xl bg-[#6d28d9] px-6 py-8 text-center text-white md:grid-cols-3">
        {statsData.map((stat) => (
          <div key={stat.id}>
            <h3 className="text-3xl font-bold">{stat.value}</h3>
            <p className="mt-2 text-sm text-purple-100">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats