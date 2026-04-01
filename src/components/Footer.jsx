import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#111827] py-14 text-white">
      <div className="container-width grid gap-10 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-bold text-white">DigiTools</h2>
          <p className="mt-4 text-sm leading-7 text-gray-300">
            A practical platform to discover premium digital tools for work,
            creativity, and productivity.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#">Home</a></li>
            <li><a href="#tools">Tools</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Resources</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>Help Center</li>
            <li>Support</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
          <div className="flex gap-3">
            <a className="rounded-full bg-white/10 p-3 hover:bg-white/20" href="#"><FaFacebookF /></a>
            <a className="rounded-full bg-white/10 p-3 hover:bg-white/20" href="#"><FaTwitter /></a>
            <a className="rounded-full bg-white/10 p-3 hover:bg-white/20" href="#"><FaLinkedinIn /></a>
            <a className="rounded-full bg-white/10 p-3 hover:bg-white/20" href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="container-width mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
        © 2026 DigiTools Platform. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer