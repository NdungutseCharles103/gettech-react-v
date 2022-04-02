import React, { useState, useEffect } from "react";
import "./App.css";
import "boxicons/css/boxicons.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./products/AddProduct";
import Products from "./products/Products";
import Cart from "./components/Cart/Cart";
import Favs from "./components/Favs/Favs";
import Signup from "./components/Sign/signup";
const axios = require('axios');
// import { app } from './firebaseConfig'

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState([]);

  const fetchProducts = async () => {
    const data = await fetch("https://hitech1.herokuapp.com/products");
    const products = await data.json();
    setProducts(products)
    setFilter(products)
  };
  const fetchCounts = async () => {
    const data = await fetch("https://hitech1.herokuapp.com/user/counts");
    const counts = await data.json()
    setCartCount(counts[0].cart);
    setWishCount(counts[0].wish)
  }
  useEffect(()=>{
    fetchProducts();
  }, [])
  useEffect(()=>{
    fetchCounts();
  }, [])
 
  const updateCounts = async () => {
    const data = await fetch("https://hitech1.herokuapp.com/user/counts");
    const newdata = await data.json();
    console.log(newdata);
    newdata[0].wish = wishCount
    newdata[0].cart = cartCount
     axios.put(`https://hitech1.herokuapp.com/user/counts/:${newdata[0]._id}`, newdata);
  }
  // const updateWish = async () => {
  //    axios.put(`https://hitech1.herokuapp.com/user/counts/:${newdata._id}`, cartCount);
  // }

  const cartIncrement = async () => {
    setCartCount((prevCount) => prevCount + 1);
    updateCounts()
  };
  const cartDecrement = () => {
    setCartCount((prevCount) =>
      prevCount <= 0 ? (prevCount = 0) : prevCount - 1
    );
    updateCounts()
  };

  const wishIncrement = () => {
    setWishCount((prevCount) => prevCount + 1);
    updateCounts()
  };
  const wishDecrement = () => {
    setWishCount((prevCount) =>
      prevCount <= 0 ? (prevCount = 0) : prevCount - 1
    );
    updateCounts()
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
            element={<Products  filter={filter} setFilter={setFilter} wishDecrement={wishDecrement}
            cartDecrement={cartDecrement}
            wishIncrement={wishIncrement}
            setProducts={setProducts}  cartIncrement={cartIncrement}
              cartCount={cartCount} wishCount={wishCount}  products ={products}/>}
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
