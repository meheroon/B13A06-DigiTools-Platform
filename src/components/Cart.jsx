import CartItem from './CartItem'

const Cart = ({ cartItems, handleRemoveFromCart, handleCheckout, totalPrice }) => {
  return (
    <div>
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Items in Digital Tools</h2>
        <p className="mt-3 text-gray-600">
          Review your selected tools before moving to checkout.
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div className="mx-auto max-w-xl rounded-3xl bg-white p-10 text-center shadow-sm ring-1 ring-gray-200">
          <h3 className="text-2xl font-bold text-gray-800">Your cart is empty</h3>
          <p className="mt-3 text-gray-600">
            Add your preferred digital tools from the products section.
          </p>
        </div>
      ) : (
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            ))}
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-700">Total Price</span>
              <span className="text-2xl font-bold text-[#6d28d9]">${totalPrice}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full rounded-full bg-[#6d28d9] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5b21b6]"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart