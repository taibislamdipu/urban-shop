import { useContext } from "react";
import { ProductContext } from "../../context";
import { getAllProducts } from "../../data/products";

export default function ProductList() {
  const products = getAllProducts();
  const { cartData, setCartData } = useContext(ProductContext);

  function isInCart(product) {
    return cartData.some((item) => item.id === product.id);
  }

  function handleToggleCart(product) {
    if (isInCart(product)) {
      setCartData(cartData.filter((item) => item.id !== product.id));
    } else {
      setCartData([...cartData, product]);
    }
  }

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

      <div className="product-grid">
        {products.map((product) => {
          const inCart = isInCart(product);
          return (
            <div
              key={product.id}
              className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
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
                    <span className="text-xs text-gray-500 ml-1">
                      {product.rating}/5
                    </span>
                  </div>
                  <span className="text-xs text-gray-700">
                    ({product.stock} pcs left)
                  </span>
                </div>
                <p className="font-bold">${product.price}</p>
                <button
                  onClick={() => handleToggleCart(product)}
                  className={`w-full mt-2 py-1 text-gray-100 rounded flex items-center justify-center transition-all ${
                    inCart ? "bg-red-600" : "bg-gray-800"
                  }`}
                >
                  {inCart ? "Remove From Cart" : "Add To Cart"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
