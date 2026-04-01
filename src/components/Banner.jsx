import heroImage from '../assets/banner.png'
import { FaPlay } from 'react-icons/fa6'

const Banner = () => {
  return (
    <section className="bg-white py-12 md:py-18">
      <div className="container-width grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div className="max-w-[560px]">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#ede7ff] px-4 py-2 text-[13px] font-medium text-[#6f36f6]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#6f36f6]" />
            New: AI-Powered Tools Available
          </div>

          <h1 className="mt-7 text-[42px] font-extrabold leading-[1.02] tracking-[-0.04em] text-[#262f44] md:text-[72px]">
            Supercharge Your
            <br />
            Digital Workflow
          </h1>

          <p className="mt-5 max-w-[500px] text-[17px] leading-8 text-[#7a8395]">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#tools"
              className="rounded-full purple-gradient px-7 py-4 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(111,54,246,0.22)]"
            >
              Explore Products
            </a>

            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full border border-[#7b46f8] px-6 py-4 text-sm font-semibold text-[#7b46f8]"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#7b46f8] text-[9px]">
                <FaPlay />
              </span>
              Watch Demo
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[430px] overflow-hidden rounded-[8px] bg-[#f2f2f4] shadow-[0_20px_50px_rgba(17,24,39,0.08)]">
            <img
              src={heroImage}
              alt="DigiTools hero"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner