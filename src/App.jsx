import { useState } from "react";
import CartDetails from "./components/cart/CartDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import ProductList from "./components/product/ProductList";
import TopPromoBanner from "./components/TopPromoBanner";
import { ProductContext } from "./context";

function App() {
  const [cartData, setCartData] = useState([]);

  return (
    <>
      <ProductContext.Provider value={{ cartData, setCartData }}>
        <TopPromoBanner />
        <Header />

        <main className="container mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ProductList />
            <CartDetails />
          </div>
        </main>

        <Newsletter />
        <Footer />
      </ProductContext.Provider>
    </>
  );
}

export default App;
