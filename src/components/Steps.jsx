const stepData = [
  {
    id: 1,
    title: 'Browse Tools',
    description: 'Explore premium tools that match your professional and creative needs.',
    icon: '🔎'
  },
  {
    id: 2,
    title: 'Add to Cart',
    description: 'Choose the tools you want and collect them in your personal cart.',
    icon: '🛒'
  },
  {
    id: 3,
    title: 'Start Using',
    description: 'Complete checkout and begin improving your workflow right away.',
    icon: '⚡'
  }
]

const Steps = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-width">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Get Started in 3 Steps</h2>
          <p className="mt-3 text-gray-600">
            Buying and using digital tools has never been easier.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {stepData.map((step) => (
            <div key={step.id} className="rounded-3xl bg-gray-50 p-6 text-center ring-1 ring-gray-200">
              <div className="mb-4 text-4xl">{step.icon}</div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="text-sm leading-6 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Steps