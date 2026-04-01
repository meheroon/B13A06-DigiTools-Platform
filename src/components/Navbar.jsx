import { FaBars, FaCartShopping, FaXmark } from 'react-icons/fa6'
import { useState } from 'react'

const Navbar = ({ cartCount, setActiveSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleProducts = () => {
    setActiveSection('products')
    setMobileOpen(false)
  }

  const handleCart = () => {
    setActiveSection('cart')
    setMobileOpen(false)
    const toolsSection = document.getElementById('tools')
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#ececf2] bg-white/95 backdrop-blur">
      <div className="container-width flex h-[74px] items-center justify-between">
        <a href="#" className="text-[30px] font-extrabold tracking-[-0.03em] text-[#6f36f6]">
          DigiTools
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          <a href="#tools" className="text-sm font-medium text-[#242c3d]">Products</a>
          <a href="#steps" className="text-sm font-medium text-[#242c3d]">Features</a>
          <a href="#pricing" className="text-sm font-medium text-[#242c3d]">Pricing</a>
          <a href="#cta" className="text-sm font-medium text-[#242c3d]">Testimonials</a>
          <a href="#footer" className="text-sm font-medium text-[#242c3d]">FAQ</a>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <button
            onClick={handleCart}
            className="relative flex items-center gap-2 text-sm font-medium text-[#242c3d]"
          >
            <FaCartShopping className="text-[13px]" />
            <span>Login</span>
            <span className="absolute -top-2 -left-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#6f36f6] px-1 text-[10px] font-bold text-white">
              {cartCount}
            </span>
          </button>

          <a
            href="#tools"
            onClick={handleProducts}
            className="rounded-full purple-gradient px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(111,54,246,0.24)]"
          >
            Get Started
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e8e8ee] text-[#242c3d] lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#ececf2] bg-white lg:hidden">
          <div className="container-width flex flex-col gap-4 py-4">
            <a href="#tools" onClick={handleProducts} className="text-sm font-medium text-[#242c3d]">Products</a>
            <a href="#steps" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-[#242c3d]">Features</a>
            <a href="#pricing" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-[#242c3d]">Pricing</a>
            <button onClick={handleCart} className="text-left text-sm font-medium text-[#242c3d]">
              Cart ({cartCount})
            </button>
            <a
              href="#tools"
              onClick={handleProducts}
              className="inline-flex w-fit rounded-full purple-gradient px-5 py-3 text-sm font-semibold text-white"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar