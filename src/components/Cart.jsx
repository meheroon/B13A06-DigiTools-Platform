import CartItem from './CartItem'

const Cart = ({ cartItems, totalPrice, handleRemoveFromCart, handleCheckout }) => {
  return (
    <div className="mx-auto max-w-[980px] rounded-[18px] border border-[#e8e8ee] bg-white p-5 shadow-[0_10px_30px_rgba(17,24,39,0.03)] md:p-6">
      <h3 className="mb-6 text-[24px] font-bold text-[#1f2937]">Your Cart</h3>

      {cartItems.length === 0 ? (
        <div className="rounded-[16px] bg-[#f6f7fb] px-6 py-14 text-center">
          <p className="text-lg font-semibold text-[#1f2937]">Your cart is empty</p>
          <p className="mt-2 text-sm text-[#7a8395]">
            Add products from the Products tab to see them here.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between px-1">
            <span className="text-[14px] text-[#7a8395]">Total:</span>
            <span className="text-[36px] font-extrabold tracking-[-0.03em] text-[#20293d]">
              ${totalPrice}
            </span>
          </div>

          <button
            onClick={handleCheckout}
            className="mt-4 w-full rounded-full purple-gradient px-6 py-4 text-sm font-semibold text-white shadow-[0_16px_28px_rgba(111,54,246,0.18)]"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  )
}

export default Cart