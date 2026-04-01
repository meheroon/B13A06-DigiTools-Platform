const CTA = () => {
  return (
    <section id="cta" className="purple-gradient py-20 text-center text-white md:py-24">
      <div className="container-width">
        <h2 className="text-[38px] font-extrabold tracking-[-0.03em] md:text-[56px]">
          Ready To Transform Your Workflow?
        </h2>

        <p className="mx-auto mt-5 max-w-[700px] text-[15px] leading-7 text-white/85">
          Join thousands of professionals who are already using Digitools to work
          smarter. Start your free trial today.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#tools"
            className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#6f36f6]"
          >
            Explore Products
          </a>
          <a
            href="#pricing"
            className="rounded-full border border-white/70 px-7 py-3.5 text-sm font-semibold text-white"
          >
            View Pricing
          </a>
        </div>

        <p className="mt-6 text-[14px] text-white/75">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  )
}

export default CTA