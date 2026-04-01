import { FaBoxOpen, FaRocket, FaUser } from 'react-icons/fa6'

const steps = [
  {
    id: '01',
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required to get started.',
    icon: <FaUser />
  },
  {
    id: '02',
    title: 'Choose Products',
    description: 'Browse our catalog and select the tools that fit your needs.',
    icon: <FaBoxOpen />
  },
  {
    id: '03',
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
    icon: <FaRocket />
  }
]

const Steps = () => {
  return (
    <section id="steps" className="bg-[#f7f8fb] py-20 md:py-24">
      <div className="container-width">
        <div className="mx-auto max-w-[660px] text-center">
          <h2 className="section-heading text-[38px] md:text-[56px]">Get Started In 3 Steps</h2>
          <p className="mt-3 text-[15px] text-[#7a8395]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.id} className="soft-card relative rounded-[18px] px-6 py-10 text-center">
              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#7a3ef4] text-[12px] font-semibold text-white">
                {step.id}
              </span>

              <div className="mx-auto flex h-[84px] w-[84px] items-center justify-center rounded-full bg-[#efe6ff] text-[36px] text-[#7a3ef4]">
                {step.icon}
              </div>

              <h3 className="mt-8 text-[20px] font-bold text-[#20293d]">{step.title}</h3>
              <p className="mx-auto mt-4 max-w-[240px] text-[14px] leading-6 text-[#7a8395]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Steps