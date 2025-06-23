import { getAllProducts } from "../../data/products";

export default function ProductList() {
  const products = getAllProducts();

  return (
    <div className="lg:col-span-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Products</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Sort by:</span>
          <select className="border rounded-md px-2 py-1 text-sm">
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* <!-- Products Grid --> */}
      <div className="product-grid">
        {/* <!-- Product 1 --> */}
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300"
          >
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <img
                src={product.image}
                alt="Gradient Graphic T-shirt"
                className="h-full w-auto object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium">{product.title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center my-1">
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-gray-300">★</span>
                  </div>
                  <span className="text-xs text-gray-500 ml-1">4/5</span>
                </div>
                <span className="text-xs text-gray-700">
                  ({product.stock} pcs left)
                </span>
              </div>
              <p className="font-bold">${product.price}</p>
              <button className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center">
                Remove from Cart
              </button>
            </div>
          </div>
        ))}

        {/* <!-- Product 2 --> */}
        <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            <img
              src="./assets/img/image 10-1.png"
              alt="Polo with Tipping Details"
              className="h-full w-auto object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-medium">Polo with Tipping Details</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center my-1">
                <div className="flex text-yellow-400">
                  <span>★</span>
                  <span className="text-gray-300">★</span>
                  <span className="text-gray-300">★</span>
                  <span className="text-gray-300">★</span>
                  <span className="text-gray-300">★</span>
                </div>
                <span className="text-xs text-gray-500 ml-1">1/5</span>
              </div>
              <span className="text-xs text-gray-700">(320 pcs left)</span>
            </div>
            <p className="font-bold">$180</p>
            <button className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
