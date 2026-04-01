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
    const alreadyAdded = cartItems.find((item) => item.id === product.id)

    if (alreadyAdded) {
      toast.warning(`${product.name} is already in your cart`)
      return
    }

    setCartItems([...cartItems, product])
    toast.success(`${product.name} added to cart`)
  }

  const handleRemoveFromCart = (id) => {
    const removedItem = cartItems.find((item) => item.id === id)
    const remainingItems = cartItems.filter((item) => item.id !== id)
    setCartItems(remainingItems)

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
    toast.success('Proceeding to checkout')
  }

  return (
    <div>
      <Navbar cartCount={cartItems.length} />

      <Banner />
      <Stats />

      <section id="tools" className="py-16">
        <div className="container-width">
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
              handleRemoveFromCart={handleRemoveFromCart}
              handleCheckout={handleCheckout}
              totalPrice={totalPrice}
            />
          )}
        </div>
      </section>

      <Steps />
      <Pricing />
      <CTA />
      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  )
}

export default App