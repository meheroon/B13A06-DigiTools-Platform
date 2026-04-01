const ProductCard = ({ product, handleAddToCart }) => {
  const { name, description, price, period, tagType, features, icon } = product

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-3xl">{icon}</div>
        <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-[#6d28d9]">
          {tagType}
        </span>
      </div>

      <h3 className="mb-3 text-xl font-bold text-gray-900">{name}</h3>
      <p className="mb-5 text-sm leading-6 text-gray-600">{description}</p>

      <div className="mb-5">
        <h4 className="text-3xl font-bold text-[#6d28d9]">
          ${price}
          <span className="ml-2 text-sm font-medium text-gray-500">/{period}</span>
        </h4>
      </div>

      <ul className="mb-6 space-y-2 text-sm text-gray-700">
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>

      <button
        onClick={() => handleAddToCart(product)}
        className="w-full rounded-full bg-[#6d28d9] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5b21b6]"
      >
        Buy Now
      </button>
    </div>
  )
}

export default ProductCard