import heroImage from '../assets/hero.png'

const Banner = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-width grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-4 inline-block rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-[#6d28d9]">
            AI powered smart platform
          </p>

          <h1 className="mb-5 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Supercharge Your <br />
            Digital Workflow
          </h1>

          <p className="mb-8 max-w-xl text-base leading-7 text-gray-600">
            Explore premium digital tools that help you create resumes, build
            portfolios, design brand assets, manage invoices, and grow your work
            faster with a simple buying experience.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#tools"
              className="rounded-full bg-[#6d28d9] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5b21b6]"
            >
              Get Started
            </a>
            <a
              href="#pricing"
              className="rounded-full border border-[#6d28d9] px-6 py-3 text-sm font-semibold text-[#6d28d9] transition hover:bg-purple-50"
            >
              View Plans
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Digital tools hero"
            className="w-full max-w-md rounded-3xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Banner