import { useMemo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import productsData from './data/products.json'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Stats from './components/Stats'
import SectionToggle from './components/SectionToggle'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('products')
  const [cartItems, setCartItems] = useState([])

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price, 0)
  }, [cartItems])

  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id)

    if (exists) {
      toast.warning(`${product.name} is already in your cart`)
      setActiveSection('cart')
      return
    }

    setCartItems([...cartItems, product])
    toast.success(`${product.name} added to cart`)
  }

  const handleRemoveFromCart = (id) => {
    const removedItem = cartItems.find((item) => item.id === id)
    setCartItems(cartItems.filter((item) => item.id !== id))

    if (removedItem) {
      toast.info(`${removedItem.name} removed from cart`)
    }
  }

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error('Your cart is empty')
      return
    }

    setCartItems([])
    toast.success('Proceed to checkout successful')
  }

  return (
    <div className="bg-[#f7f8fb] text-[#111827]">
      <Navbar
        cartCount={cartItems.length}
        setActiveSection={setActiveSection}
      />

      <Banner />
      <Stats />

      <section id="tools" className="bg-[#f7f8fb] py-18 md:py-24">
        <div className="container-width">
          <div className="mx-auto max-w-[620px] text-center">
            <h2 className="text-[34px] font-extrabold tracking-[-0.02em] text-[#1f2937] md:text-[52px]">
              Premium Digital Tools
            </h2>
            <p className="mx-auto mt-3 max-w-[540px] text-sm leading-6 text-[#6b7280] md:text-[15px]">
              Choose from our curated collection of premium digital products designed
              to boost your productivity and creativity.
            </p>
          </div>

          <SectionToggle
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            cartCount={cartItems.length}
          />

          {activeSection === 'products' ? (
            <ProductList
              products={productsData}
              handleAddToCart={handleAddToCart}
            />
          ) : (
            <Cart
              cartItems={cartItems}
              totalPrice={totalPrice}
              handleRemoveFromCart={handleRemoveFromCart}
              handleCheckout={handleCheckout}
            />
          )}
        </div>
      </section>

      <Steps />
      <Pricing />
      <CTA />
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={1800}
        hideProgressBar={false}
        newestOnTop
        pauseOnHover={false}
      />
    </div>
  )
}

export default App