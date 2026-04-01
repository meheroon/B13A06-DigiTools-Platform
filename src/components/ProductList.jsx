import ProductCard from './ProductCard'

const ProductList = ({ products, handleAddToCart }) => {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  )
}

export default ProductList