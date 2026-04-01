const plans = [
  {
    id: 1,
    name: 'Basic',
    price: '$19',
    description: 'A simple option for individuals starting their digital journey.',
    features: ['1 premium tool', 'Email support', 'Basic usage access'],
    featured: false
  },
  {
    id: 2,
    name: 'Professional',
    price: '$49',
    description: 'Perfect for freelancers and creators who need multiple useful tools.',
    features: ['3 premium tools', 'Priority support', 'Extended access'],
    featured: true
  },
  {
    id: 3,
    name: 'Enterprise',
    price: '$99',
    description: 'A complete package for teams and businesses with larger requirements.',
    features: ['Unlimited access', 'Dedicated support', 'Advanced productivity tools'],
    featured: false
  }
]

const Pricing = () => {
  return (
    <section id="pricing" className="py-16">
      <div className="container-width">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Simple Transparent Pricing</h2>
          <p className="mt-3 text-gray-600">
            Choose a plan that suits your workflow and project goals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-6 ring-1 ${
                plan.featured
                  ? 'bg-[#6d28d9] text-white ring-[#6d28d9] shadow-lg'
                  : 'bg-white text-gray-900 ring-gray-200'
              }`}
            >
              <h3 className="mb-3 text-2xl font-bold">{plan.name}</h3>
              <p className={`mb-4 text-4xl font-bold ${plan.featured ? 'text-white' : 'text-[#6d28d9]'}`}>
                {plan.price}
              </p>
              <p className={`mb-6 text-sm leading-6 ${plan.featured ? 'text-purple-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <ul className="mb-6 space-y-3 text-sm">
                {plan.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>

              <button
                className={`w-full rounded-full px-5 py-3 text-sm font-semibold transition ${
                  plan.featured
                    ? 'bg-white text-[#6d28d9] hover:bg-gray-100'
                    : 'bg-[#6d28d9] text-white hover:bg-[#5b21b6]'
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing