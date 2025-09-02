import ProductCard from "./components/ProductCard"

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Noise-cancelling over-ear headphones",
      price: 2999,
      image: "https://via.placeholder.com/400x300?text=Headphones",
    },
    {
      id: 2,
      name: "Smart Watch",
      description: "Track your fitness and notifications",
      price: 4999,
      image: "https://via.placeholder.com/400x300?text=Smart+Watch",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      description: "Portable waterproof speaker",
      price: 1999,
      image: "https://via.placeholder.com/400x300?text=Speaker",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Product Card List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}

export default App
