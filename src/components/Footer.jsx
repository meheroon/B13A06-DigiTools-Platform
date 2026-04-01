import { FaDribbble, FaFacebookF, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#07132d] py-16 text-white md:py-20">
      <div className="container-width">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.45fr_1fr_1fr_1fr_.9fr]">
          <div>
            <h2 className="text-[42px] font-extrabold tracking-[-0.03em]">DigiTools</h2>
            <p className="mt-5 max-w-[310px] text-[15px] leading-8 text-white/75">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h3 className="text-[24px] font-semibold">Product</h3>
            <ul className="mt-6 space-y-4 text-[15px] text-white/75">
              <li><a href="#steps">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#tools">Templates</a></li>
              <li><a href="#tools">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[24px] font-semibold">Company</h3>
            <ul className="mt-6 space-y-4 text-[15px] text-white/75">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[24px] font-semibold">Resources</h3>
            <ul className="mt-6 space-y-4 text-[15px] text-white/75">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[24px] font-semibold">Social Links</h3>
            <div className="mt-6 flex gap-3">
              <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#07132d]">
                <FaDribbble />
              </a>
              <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#07132d]">
                <FaFacebookF />
              </a>
              <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#07132d]">
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/12 pt-7 text-[14px] text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Digitools. All rights reserved.</p>

          <div className="flex flex-wrap gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer