import React, { useState, useEffect } from "react";
import "./App.css";
import "boxicons/css/boxicons.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./products/AddProduct";
import Products from "./products/Products";
import Cart from "./components/Cart/Cart";
import Favs from "./components/Favs/Favs";
import Signup from "./components/Sign/Signup";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const data = await fetch("http://localhost:8080/products");
    const products = await data.json();
    setProducts(products)
  };

  useEffect(()=>{
    fetchProducts();
  }, [])

  const cartIncrement = () => {
    setCartCount((prevCount) => prevCount + 1);
  };
  const cartDecrement = () => {
    setCartCount((prevCount) =>
      prevCount <= 0 ? (prevCount = 0) : prevCount - 1
    );
  };

  const wishIncrement = () => {
    setWishCount((prevCount) => prevCount + 1);
  };
  const wishDecrement = () => {
    setWishCount((prevCount) =>
      prevCount <= 0 ? (prevCount = 0) : prevCount - 1
    );
  };
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cartIncrement={cartIncrement}
                cartCount={cartCount}
                wishCount={wishCount}
                wishDecrement={wishDecrement}
                cartDecrement={cartDecrement}
                wishIncrement={wishIncrement}
                products = {products} setProducts={setProducts}
              />
            }
          />
          <Route
            path="/products"
            element={<Products 
              cartCount={cartCount} wishCount={wishCount}  products={products}/>}
          />
          <Route
            path="/cart"
            element={<Cart cartCount={cartCount} wishCount={wishCount} />}
          />
          <Route
            path="/wishlist"
            element={<Favs cartCount={cartCount} wishCount={wishCount} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
