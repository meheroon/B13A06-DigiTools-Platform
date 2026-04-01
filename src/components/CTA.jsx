const CTA = () => {
  return (
    <section className="py-16">
      <div className="container-width rounded-3xl bg-[#6d28d9] px-6 py-14 text-center text-white">
        <h2 className="text-3xl font-bold md:text-4xl">
          Ready to Transform Your Workflow?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-purple-100 md:text-base">
          Start exploring digital tools built to improve creativity, productivity,
          and professional growth in one simple platform.
        </p>
        <a
          href="#tools"
          className="mt-8 inline-block rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#6d28d9] transition hover:bg-gray-100"
        >
          Explore Tools Now
        </a>
      </div>
    </section>
  )
}

export default CTA