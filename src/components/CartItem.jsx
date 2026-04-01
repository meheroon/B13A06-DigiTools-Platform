const CartItem = ({ item, handleRemoveFromCart }) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="text-3xl">{item.icon}</div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
          <p className="text-sm text-gray-500">${item.price}</p>
        </div>
      </div>

      <button
        onClick={() => handleRemoveFromCart(item.id)}
        className="rounded-full border border-red-300 px-5 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
      >
        Remove
      </button>
    </div>
  )
}

export default CartItem