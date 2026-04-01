import ProductCard from './ProductCard'

const ProductList = ({ products, handleAddToCart }) => {
  return (
    <div>
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Premium Digital Tools</h2>
        <p className="mt-3 text-gray-600">
          Explore practical digital products designed to save time and improve your workflow.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList