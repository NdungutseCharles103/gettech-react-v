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
import Login from "./components/Sign/Login";
import Account from "./components/account/Account";
import { api } from "./components/utilities/one";
import Search from "./components/search/search";
import ProductPreview from "./components/preview/productPrev";
import Wrong from "./components/Wrong";
import Category from "./products/categories/Category";
import { useSelector } from "react-redux";
import {
  compareAndUpdate,
  getUserPro,
  getUserCounts,
} from "./components/utilities/two";
import jwtDecode from "jwt-decode";

function App() {
  const local = useSelector((state) => state.user.isLocal);
  const [category, setCategory] = useState("all");
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);
  const [counts, setCounts] = useState([]);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [payment, setPayment] = useState(0);
  const [isHomeLoader, setHomeLoader] = useState(false);
  const [quantity, setQuantity] = useState([]);

  const user = useSelector((state) => state.user.currentUser);
  let userid;
  if (user) {
    userid = jwtDecode(user)._id;
  }
  const fetchProducts = async () => {
    const res = await api.get("/products");
    console.log(res);
    const fetched = await res.data;
    const localProducts = await JSON.parse(localStorage.getItem("products"));
    if (local) {
      if (localProducts) {
        console.log(fetched);
        setProducts(localProducts);
        setFilter(localProducts);
      } else {
        console.log(fetched);
        setFilter(fetched);
        setProducts(fetched);
        localStorage.setItem("products", JSON.stringify(fetched));
      }
    } else {
      const userPro = await getUserPro(userid);
      const fin = compareAndUpdate(userPro, fetched);
      setProducts(fin);
      setFilter(fin);
    }
    setHomeLoader(true);
  };
  const fetchCounts = async () => {
    const res = await api.get("/user/counts");
    const fecounts = await res.data;
    if (local) {
      const localCounts = JSON.parse(localStorage.getItem("counts"));
      console.log(localCounts);
      if (localCounts) {
        setCounts(localCounts);
        setCounts(localCounts);
        setPayment(localCounts.payment);
        if (localCounts.cart < 0) localCounts.cart = 0;
        setCartCount(localCounts.cart);
        if (localCounts.wish < 0) localCounts.wish = 0;
        setWishCount(localCounts.wish);
      } else {
        localStorage.setItem("counts", JSON.stringify(fecounts[0]));
        setCounts(fecounts);
        setPayment(fecounts[0].payment);
        if (fecounts[0].cart < 0) fecounts[0].cart = 0;
        setCartCount(fecounts[0].cart);
        if (fecounts[0].wish < 0) fecounts[0].wish = 0;
        setWishCount(fecounts[0].wish);
      }
    } else {
      const usercounts = await getUserCounts(userid);
      const fin = compareAndUpdate(usercounts, fecounts);
      setCounts(fin);
      setPayment(fin[0].payment);
      if (fin[0].cart < 0) fin[0].cart = 0;
      setCartCount(fin[0].cart);
      if (fin[0].wish < 0) fin[0].wish = 0;
      setWishCount(fin[0].wish);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchCounts();
  }, []);

  const updateCounts = async (newdata) => {
    if (local) {
      localStorage.setItem("counts", JSON.stringify(newdata));
    } else {
      let cou = [...newdata]
      const newUpdates = {
        counts: cou,
      };
      const response = await api.put(`/user/${userid}/newUpdates`, newUpdates);
      console.log(response);
    }
  };

  const cartIncrement = async (pay) => {
    console.log(pay);
    if (pay) {
      setCartCount((prevCount) => prevCount + 1);
      if(local){
        counts.payment = pay;
        setPayment(payment + pay);
        counts.cart = cartCount + 1;
      }else{
        counts[0].payment = pay;
        setPayment(payment + pay);
        counts[0].cart = cartCount + 1;
      }
        updateCounts(counts);
      
    } else {
       setCartCount((prevCount) => prevCount + 1);
       counts.payment = payment;
       counts.cart = cartCount + 1;
       updateCounts(counts);
    }
   
  };
  const cartDecrement = (qua, pay) => {
    if (qua) {
      setCartCount(cartCount - qua);
      counts.cart = cartCount - qua;
      counts.payment = pay
      setPayment(payment-pay)
      updateCounts(counts);
    }
    else {
      setCartCount((prevCount) =>
        prevCount <= 0 ? (prevCount = 0) : prevCount - 1
      );
      counts.cart = cartCount - 1;
      updateCounts(counts);
    }
  };

  const wishIncrement = () => {
    setWishCount((prevCount) => prevCount + 1);
    counts.wish = wishCount + 1;
    updateCounts(counts);
  };
  const wishDecrement = () => {
    setWishCount((prevCount) =>
      prevCount <= 0 ? (prevCount = 0) : prevCount - 1
    );
    counts.wish = wishCount - 1;
    updateCounts(counts);
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
                setProducts={setFilter}
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
                setProducts={setFilter}
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
                products={filter}
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
                products={filter}
              />
            }
          />
          <Route
            path="account"
            element={
              !user ? (
                <Navigate replace to="/login" />
              ) : (
                <Account cartCount={cartCount} wishCount={wishCount} />
              )
            }
          />
          <Route
            path="preview/:product_id"
            element={
              <ProductPreview
                userid={userid}
                cartCount={cartCount}
                wishCount={wishCount}
                filter={filter}
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
                userid={userid}
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
            element={user ? <Navigate replace to="/" /> : <Signup />}
          />
          <Route path="allmenu" element={<Signup />} />
          <Route path="messages" element={<Signup />} />
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
