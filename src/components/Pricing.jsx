import { FaCheck } from 'react-icons/fa6'

const plans = [
  {
    id: 1,
    name: 'Starter',
    subtitle: 'Perfect for getting started',
    price: '$0',
    period: '/Month',
    button: 'Get Started Free',
    featured: false,
    features: [
      'Access to 10 free tools',
      'Basic templates',
      'Community support',
      '1 project per month'
    ]
  },
  {
    id: 2,
    name: 'Pro',
    subtitle: 'Best for professionals',
    price: '$29',
    period: '/Month',
    button: 'Start Pro Trial',
    featured: true,
    features: [
      'Access to all premium tools',
      'Unlimited templates',
      'Priority support',
      'Unlimited projects',
      'Cloud sync',
      'Advanced analytics'
    ]
  },
  {
    id: 3,
    name: 'Enterprise',
    subtitle: 'For teams and businesses',
    price: '$99',
    period: '/Month',
    button: 'Contact Sales',
    featured: false,
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Custom branding'
    ]
  }
]

const Pricing = () => {
  return (
    <section id="pricing" className="bg-[#f7f8fb] py-20 md:py-24">
      <div className="container-width">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="section-heading text-[40px] md:text-[58px]">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 text-[15px] text-[#7a8395]">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-[18px] border p-6 md:p-7 ${
                plan.featured
                  ? 'border-[#7a3ef4] purple-gradient-vertical text-white shadow-[0_20px_40px_rgba(111,54,246,0.24)]'
                  : 'border-[#e7e7ec] bg-white text-[#20293d]'
              }`}
            >
              {plan.featured && (
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffd88a] px-4 py-1.5 text-[12px] font-medium text-[#9a6200]">
                  Most Popular
                </span>
              )}

              <h3 className="text-[30px] font-bold">{plan.name}</h3>
              <p className={`mt-2 text-[14px] ${plan.featured ? 'text-white/80' : 'text-[#7a8395]'}`}>
                {plan.subtitle}
              </p>

              <div className="mt-7 flex items-end">
                <span className="text-[54px] font-extrabold tracking-[-0.04em]">
                  {plan.price}
                </span>
                <span className={`mb-2 ml-1 text-[16px] ${plan.featured ? 'text-white/80' : 'text-[#8d95a5]'}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="mt-7 space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-[15px]">
                    <FaCheck className={`mt-1 text-[12px] ${plan.featured ? 'text-white' : 'text-[#22c55e]'}`} />
                    <span className={plan.featured ? 'text-white/95' : 'text-[#667085]'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-full px-5 py-4 text-sm font-semibold ${
                  plan.featured
                    ? 'bg-white text-[#6f36f6]'
                    : 'purple-gradient text-white'
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing