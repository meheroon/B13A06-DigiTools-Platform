const SectionToggle = ({ activeSection, setActiveSection, cartCount }) => {
  return (
    <div className="mt-8 mb-10 flex justify-center">
      <div className="flex rounded-full border border-[#ececf3] bg-white p-1 shadow-[0_8px_16px_rgba(15,23,42,0.04)]">
        <button
          onClick={() => setActiveSection('products')}
          className={`min-w-[108px] rounded-full px-6 py-3 text-sm font-semibold transition ${
            activeSection === 'products'
              ? 'purple-gradient text-white shadow-[0_10px_18px_rgba(111,54,246,0.22)]'
              : 'text-[#5d6473]'
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setActiveSection('cart')}
          className={`min-w-[108px] rounded-full px-6 py-3 text-sm font-semibold transition ${
            activeSection === 'cart'
              ? 'purple-gradient text-white shadow-[0_10px_18px_rgba(111,54,246,0.22)]'
              : 'text-[#5d6473]'
          }`}
        >
          Cart ({cartCount})
        </button>
      </div>
    </div>
  )
}

export default SectionToggle