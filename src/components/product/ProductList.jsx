// components/product/ProductList.jsx
import { useContext, useMemo, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import { ProductContext } from "../../context";

export default function ProductList() {
  const { cartData, setCartData, products, setProducts, searchTerm } =
    useContext(ProductContext);

  const [sortBy, setSortBy] = useState("Most Popular");

  const isInCart = (productId) => {
    return cartData.some((item) => item.id === productId);
  };

  const handleToggleCart = (product) => {
    const exists = isInCart(product.id);

    if (exists) {
      // Remove from cart and increment stock
      setCartData(cartData.filter((item) => item.id !== product.id));
      setProducts(
        products.map((p) =>
          p.id === product.id ? { ...p, stock: p.stock + 1 } : p
        )
      );
      toast.success(`${product.title} removed from cart`);
    } else if (product.stock > 0) {
      // Add to cart and decrement stock
      setCartData([...cartData, { ...product, quantity: 1 }]);
      setProducts(
        products.map((p) =>
          p.id === product.id ? { ...p, stock: p.stock - 1 } : p
        )
      );
      toast.success(`${product.title} added to cart`);
    }
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, products]);

  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    switch (sortBy) {
      case "Newest":
        return sorted.slice().reverse();
      case "Price: Low to High":
        return sorted.sort((a, b) => a.price - b.price);
      case "Price: High to Low":
        return sorted.sort((a, b) => b.price - a.price);
      case "Most Popular":
      default:
        return sorted.sort((a, b) => b.rating - a.rating);
    }
  }, [sortBy, filteredProducts]);

  return (
    <div className="lg:col-span-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Products</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Sort by:</span>
          <select
            className="border rounded-md px-2 py-1 text-sm"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {sortedProducts.length > 0 ? (
        <div className="product-grid">
          {sortedProducts.map((product) => {
            const added = isInCart(product.id);

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
                        {[...Array(5)].map((_, i) =>
                          i < product.rating ? (
                            <FaStar key={i} className="fill-yellow-400" />
                          ) : (
                            <FaRegStar key={i} className="text-gray-300" />
                          )
                        )}
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
                    className={`w-full mt-2 py-1 text-gray-100 rounded flex items-center justify-center cursor-pointer ${
                      added
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-gray-800 hover:bg-gray-900"
                    }`}
                  >
                    {added ? "Remove From Cart" : "Add to Cart"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-600">No products found.</p>
      )}
    </div>
  );
}
