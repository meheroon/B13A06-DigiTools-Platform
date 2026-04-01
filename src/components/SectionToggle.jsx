const SectionToggle = ({ activeSection, setActiveSection, cartCount }) => {
  return (
    <div className="mb-10 flex justify-center">
      <div className="flex rounded-full bg-gray-200 p-1">
        <button
          onClick={() => setActiveSection('products')}
          className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
            activeSection === 'products'
              ? 'bg-[#6d28d9] text-white'
              : 'text-gray-700'
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setActiveSection('cart')}
          className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
            activeSection === 'cart'
              ? 'bg-[#6d28d9] text-white'
              : 'text-gray-700'
          }`}
        >
          Cart ({cartCount})
        </button>
      </div>
    </div>
  )
}

export default SectionToggle