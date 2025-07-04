import { useContext } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";
import { ProductContext } from "../../context";
import PromoIcon from "../../icons/PromoIcon";

export default function CartDetails() {
  const { cartData, setCartData, products, setProducts } =
    useContext(ProductContext);

  const handleIncrement = (productId) => {
    const product = products.find((p) => p.id === productId);
    if (product.stock <= 0) return; // no stock left

    setCartData(
      cartData.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

    setProducts(
      products.map((p) =>
        p.id === productId ? { ...p, stock: p.stock - 1 } : p
      )
    );

    toast.success(`${product.title} added to cart`);
  };

  const handleDecrement = (productId) => {
    const cartItem = cartData.find((item) => item.id === productId);
    if (!cartItem) return;

    if (cartItem.quantity === 1) {
      // Remove item completely from cart
      setCartData(cartData.filter((item) => item.id !== productId));
    } else {
      setCartData(
        cartData.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }

    setProducts(
      products.map((p) =>
        p.id === productId ? { ...p, stock: p.stock + 1 } : p
      )
    );

    toast.success(`${cartItem.title} removed from cart`);
  };

  const handleRemove = (productId) => {
    setCartData(cartData.filter((item) => item.id !== productId));

    const productName = products.find((p) => p.id === productId).title;
    toast.success(`${productName} removed from cart`);
  };

  const subtotal = cartData.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>

        {cartData.length > 0 ? (
          cartData.map((product) => (
            <div
              key={product.id}
              className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4"
            >
              <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-auto object-cover"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{product.title}</h3>
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="text-red-500 text-sm cursor-pointer"
                  >
                    <IoMdClose />
                  </button>
                </div>
                <p className="text-sm text-gray-500">Size: Large</p>
                <p className="text-sm text-gray-500">Color: White</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="font-bold">${product.price}</p>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleDecrement(product.id)}
                      className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center cursor-pointer"
                    >
                      <FiMinus />
                    </button>
                    <span className="text-sm">{product.quantity}</span>
                    <button
                      onClick={() => handleIncrement(product.id)}
                      className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center cursor-pointer"
                    >
                      <FiPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">Your cart is empty.</p>
        )}

        {cartData.length > 0 && (
          <div className="mt-6">
            <h3 className="font-bold text-lg mb-4">Order Summary</h3>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-red-500">
                <span>Discount (-20%)</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-medium">${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 mb-6">
              <div className="flex-grow relative">
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="w-full border border-gray-300 rounded-md py-2 pl-8 px-3 text-sm"
                />

                <PromoIcon />
              </div>
              <button className="bg-black text-white rounded-md px-4 py-2 text-sm">
                Apply
              </button>
            </div>

            <a
              href="#"
              className="block bg-black text-white text-center py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Go to Checkout
              <span className="inline-block ml-2">→</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
