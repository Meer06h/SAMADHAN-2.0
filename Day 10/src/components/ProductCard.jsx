export default function ProductCard({ product }) {
    return (
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600 text-sm mt-1">{product.description}</p>
          <div className="flex justify-between items-center mt-3">
            <span className="text-xl font-bold text-blue-600">₹{product.price}</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    )
  }
  