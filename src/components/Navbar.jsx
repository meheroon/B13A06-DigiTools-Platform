import { FaCartShopping } from 'react-icons/fa6'

const Navbar = ({ cartCount }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="container-width flex items-center justify-between py-4">
        <div>
          <h2 className="text-2xl font-bold text-[#6d28d9]">DigiTools</h2>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <li><a href="#">Home</a></li>
          <li><a href="#tools">Tools</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>

        <div className="relative">
          <button className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700">
            <FaCartShopping />
            Cart
          </button>
          <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#6d28d9] text-xs font-bold text-white">
            {cartCount}
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar