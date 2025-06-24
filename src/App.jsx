import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { ProductContext } from "./context";
import { getAllProducts } from "./data/products";
import Page from "./Page";

function App() {
  const [cartData, setCartData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState(getAllProducts());

  return (
    <ProductContext.Provider
      value={{
        cartData,
        setCartData,
        searchTerm,
        setSearchTerm,
        products,
        setProducts,
      }}
    >
      <Page />
      <ToastContainer />
    </ProductContext.Provider>
  );
}

export default App;
