import React, { useState, useEffect } from "react";
import "./App.css";
import "boxicons/css/boxicons.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddProduct from "./products/AddProduct";
import Products from "./products/Products";
import Cart from "./components/Cart/Cart";
import Favs from "./components/Favs/Favs";
import Signup from "./components/Sign/signup";
import Login from './components/Sign/Login'
import Account from "./components/account/Account";
import { api } from './components/utilities/one';
import Search from "./components/search/search";
import ProductPreview from "./components/preview/productPrev";
import Wrong from "./components/Wrong";
import Category from "./products/categories/Category";
import { useSelector } from "react-redux";
import { compareAndUpdate, getUserPro, getUserCounts } from './components/utilities/two'
import jwtDecode from "jwt-decode";


function App() {
  const [category, setCategory] = useState("all");
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);
  const [counts, setCounts] = useState([])
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState([]);
  const [payment, setPayment] = useState(0)
  const [isHomeLoader, setHomeLoader] = useState(false);
  const [quantity, setQuantity ] = useState([]);
  const local = useSelector((state) => state.user.isLocal);
  
  const user = useSelector((state)=> state.user.currentUser)
  const userid = jwtDecode(user)._id

  const fetchProducts = async () => {
    const res = await api.get('/products');
    const products = await res.data
    const userPro = await getUserPro(userid)
    console.log(userPro);
    const localProducts = await JSON.parse(localStorage.getItem('products'))
    if (local) {
      if (localProducts) {
        setProducts(localProducts);
      }else{
        localStorage.setItem("products", JSON.stringify(products));
        setProducts(products);
        setFilter(products);
      }
    } else {
      const fin = compareAndUpdate(userPro, products)
      console.log(fin);
      setProducts(fin);
      setFilter(fin);
    }
    setHomeLoader(true)
  };
  const fetchCounts = async () => {
    const res = await api.get("/user/counts");
    const fecounts = await res.data
    const usercounts = await getUserCounts(userid);
    const localCounts = JSON.parse(localStorage.getItem('counts'))
    if (local) {
      if (localCounts) {
        setCounts(localCounts)
        setCounts(localCounts);
        setPayment(localCounts[0].payment);
        if (localCounts[0].cart < 0) localCounts[0].cart = 0;
        setCartCount(localCounts[0].cart);
        if (localCounts[0].wish < 0) localCounts[0].wish = 0;
        setWishCount(localCounts[0].wish);
      } else {
        localStorage.setItem('counts', JSON.stringify(counts))
        setCounts(fecounts)
        setPayment(fecounts[0].payment);
        if (fecounts[0].cart < 0) fecounts[0].cart = 0;
        setCartCount(fecounts[0].cart);
        if (fecounts[0].wish < 0) fecounts[0].wish = 0;
        setWishCount(fecounts[0].wish);
      }
    } else {
      const fin = compareAndUpdate(usercounts, fecounts)
      setCounts(fin);
      setPayment(fin[0].payment);
      if (fin[0].cart < 0) fin[0].cart = 0;
      setCartCount(fin[0].cart);
      if (fin[0].wish < 0) fin[0].wish = 0;
      setWishCount(fin[0].wish);
    }
    
  }
  useEffect(()=>{
    fetchProducts();
  }, [])

  useEffect(()=>{
    fetchCounts();
  }, [])
  
  const updateCounts = async (newdata) => {
    if (local) {
      localStorage.setItem('counts', JSON.stringify(newdata))
    } else {
      const newUpdates = {
        counts: newdata
      }
      const response = await api.put(`/user/${userid}/newUpdates`, newUpdates);
      console.log(response);
    }
  }

  const cartIncrement = async () => {
    setCartCount((prevCount) => prevCount + 1);
    counts[0].payment = payment
    counts[0].cart = cartCount + 1
    updateCounts(counts[0]);
  };
  const cartDecrement = (qua) => {
    if (qua) {
      setCartCount(cartCount-qua)
      counts[0].cart = cartCount - qua;
      updateCounts(counts[0]);
    }else{
    setCartCount((prevCount) =>
      prevCount <= 0 ? (prevCount = 0) : prevCount - 1);
    counts[0].cart = cartCount - 1;
    updateCounts(counts[0]);
    }
  };

  const wishIncrement = () => {
    setWishCount((prevCount) => prevCount + 1);
    counts[0].wish = wishCount + 1;
    updateCounts(counts[0]);
  };
  const wishDecrement = () => {
    setWishCount((prevCount) =>
      prevCount <= 0 ? (prevCount = 0) : prevCount - 1);
    counts[0].wish = wishCount - 1;
    updateCounts(counts[0]);
  };
  
  return (
    <BrowserRouter>
      <div className="App flex flex-col w-full">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                userid={userid}
                cartIncrement={cartIncrement}
                cartCount={cartCount}
                isHomeLoader={isHomeLoader}
                setHomeLoader={setHomeLoader}
                wishCount={wishCount}
                category={category}
                setCategory={setCategory}
                wishDecrement={wishDecrement}
                cartDecrement={cartDecrement}
                wishIncrement={wishIncrement}
                products={products}
                filter={filter}
                setFilter={setFilter}
                setProducts={setProducts}
                quantity={quantity}
                setQuantity={setQuantity}
              />
            }
          />
          <Route
            path="products"
            element={
              <Products
                filter={filter}
                category={category}
                setCategory={setCategory}
                setFilter={setFilter}
                counts={counts}
                userid={userid}
                wishDecrement={wishDecrement}
                cartDecrement={cartDecrement}
                wishIncrement={wishIncrement}
                setProducts={setProducts}
                cartIncrement={cartIncrement}
                cartCount={cartCount}
                setPayment={setPayment}
                wishCount={wishCount}
                payment={payment}
                products={products}
                updateCounts={updateCounts}
                quantity={quantity}
                setQuantity={setQuantity}
              />
            }
          />
          <Route
            path="cart"
            element={
              <Cart
                userid={userid}
                cartCount={cartCount}
                wishIncrement={wishIncrement}
                cartDecrement={cartDecrement}
                wishDecrement={wishDecrement}
                products={products}
                wishCount={wishCount}
                cartIncrement={cartIncrement}
                payment={payment}
                setPayment={setPayment}
              />
            }
          />
          <Route
            path="wishlist"
            element={
              <Favs
                 userid={userid}
                cartCount={cartCount}
                wishIncrement={wishIncrement}
                cartDecrement={cartDecrement}
                wishDecrement={wishDecrement}
                wishCount={wishCount}
                cartIncrement={cartIncrement}
                products={products}
              />
            }
          />
          <Route
            path="account"
            element={!user?<Navigate replace to='/login' /> : <Account cartCount={cartCount} wishCount={wishCount} />}
          />
          <Route
            path="preview/:product_id"
            element={
              <ProductPreview
                cartCount={cartCount}
                wishCount={wishCount}
                products={products}
                cartIncrement={cartIncrement}
                cartDecrement={cartDecrement}
                wishDecrement={wishDecrement}
                wishIncrement={wishIncrement}
              />
            }
          />
          <Route
            path="search"
            element={
              <Search
                counts={counts}
                wishDecrement={wishDecrement}
                cartDecrement={cartDecrement}
                wishIncrement={wishIncrement}
                setProducts={setProducts}
                cartIncrement={cartIncrement}
                cartCount={cartCount}
                setPayment={setPayment}
                wishCount={wishCount}
                payment={payment}
                products={products}
                updateCounts={updateCounts}
                quantity={quantity}
                setQuantity={setQuantity}
              />
            }
          />
          <Route
            path="products/:product_cat"
            element={
              <Category
                filter={filter}
                category={category}
                setCategory={setCategory}
                setFilter={setFilter}
                counts={counts}
                wishDecrement={wishDecrement}
                cartDecrement={cartDecrement}
                wishIncrement={wishIncrement}
                setProducts={setProducts}
                cartIncrement={cartIncrement}
                cartCount={cartCount}
                setPayment={setPayment}
                wishCount={wishCount}
                payment={payment}
                products={products}
                updateCounts={updateCounts}
                quantity={quantity}
                setQuantity={setQuantity}
              />
            }
          />
          <Route
            path="signup"
            element={user ? <Navigate replace to="/" /> : <Login />}
          />
          <Route path="allmenu" element={<Signup />} />
          <Route path="messages" element={<Signup />} />
          <Route path="shop" element={<Signup />} />
          <Route path="listed" element={<Signup />} />
          <Route
            path="/login"
            element={user ? <Navigate replace to="/" /> : <Login />}
          />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="*" element={<Wrong />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;