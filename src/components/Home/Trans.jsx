import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Trendings from "./Trendings";
import { Link } from "react-router-dom";
import homeimg from "../../Images/home.jpg";
import introimg from "../../Images/intro.png";
import gameimg from "../../Images/gaming.jpg";
import phoneimg from "../../Images/phone-pc.jpg";
import acessimg from "../../Images/acess.jpg";
import otherimg from "../../Images/others.jpg";

const Trans = (props) => {
  const {
    userid,
    wishDecrement,
    products,
    filter,
    setFilter,
    category,
    payment,
    setCategory,
    setProducts,
    wishIncrement,
    cartIncrement,
    cartDecrement,
    quantity,
    setQuantity,
  } = props;

  useEffect(() => {
    if (category === "all") {
      setFilter(products);
      return;
    }
    const filtered = products.filter((pro) => pro.category.includes(category));
    setFilter(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <div className="main">
      <div className="flex flex-col overflow-x-hidden">
        <div className="flex items-center justify-center w-full">
          <Link
            to="/search"
            className="s-home search bg-slate-100 rounded-3xl mt-4 p-2 flex items-center w-[30%] justify-between pr-4"
          >
            <input
              className="ml-2 cursor-pointer w-[90%] outline-none border-none bg-transparent focus:border-sky-100"
              type="text"
              placeholder="Search Products"
              disabled
            />
            <input type="submit" className="hidden " id="submit" />{" "}
            <label htmlFor="submit">
              <i className="bx bx-search text-xl cursor-pointer mt-2"></i>
            </label>
          </Link>
        </div>
        <div className="flex items-center px-10 mt-7 intro">
          <div className="w-[60%]">
            <img src={require("../../Images/beaut.png")} alt="" />
          </div>
          <div className="w-[40%] flex flex-col">
            {/* <p className="text-xl intro-s">
              Home of All Technological products, Trends and Tech Tips
            </p> */}
            <img className="w-[100%]" src={introimg} alt="" />
          </div>
        </div>
      </div>
      <h2 className="text-center text-2xl mt-3">Categories</h2>
      <div className="cat flex flex-col items-center mt-3">
        <div className="grid homegrid gap-4 auto-col grid-cols-5">
          <Link
            to="products/home"
            className="card justify-between cursor-pointer bg-slate-100 hover:scale-110 duration-300 shadow-xl
            mt-3 flex gap-3 flex-col items-center px-2"
          >
            <div
              onClick={() => setCategory("home")}
              className="flex flex-col items-center py-2 justify-between h-full"
            >
              <img className="w-full" src={homeimg} alt="" />
              <p>Home Appliances</p>
            </div>
          </Link>
          <Link
            to="products/gaming"
            className="card justify-between cursor-pointer bg-slate-100 hover:scale-110 duration-300 shadow-xl
            mt-3 flex gap-3 flex-col items-center px-2"
          >
            <div
              onClick={() => setCategory("gaming")}
              className="flex flex-col items-center py-2 justify-between h-full"
            >
              <img className="w-full" src={gameimg} alt="" />
              <p>Gaming</p>
            </div>
          </Link>
          <Link
            onClick={() => setCategory("Phones")}
            to="products/phones"
            className="card justify-between cursor-pointer bg-slate-100 hover:scale-110 duration-300 shadow-xl
            mt-3 flex gap-3 flex-col items-center px-2"
          >
            <div className="flex flex-col items-center py-2 justify-between h-full">
              <img className="w-full" src={phoneimg} alt="" />
              <p>Phones and Pcs</p>
            </div>
          </Link>
          <Link
            to="products/accessories"
            className="card justify-between cursor-pointer bg-slate-100 hover:scale-110 duration-300 shadow-xl
            mt-3 flex gap-3 flex-col items-center px-2"
          >
            <div
              onClick={() => setCategory("accessories")}
              className="flex flex-col items-center py-2 justify-between h-full"
            >
              <img className="w-full" src={acessimg} alt="" />
              <p>Accesories</p>
            </div>
          </Link>
          <Link
            to="products/others"
            className="card justify-between cursor-pointer bg-slate-100 hover:scale-110 duration-300 shadow-xl
            mt-3 flex gap-3 flex-col items-center px-2"
          >
            <div
              onClick={() => setCategory("others")}
              className="flex flex-col items-center py-2 justify-between h-full"
            >
              <img className="w-full" src={otherimg} alt="" />
              <p>Others</p>
            </div>
          </Link>
        </div>
      </div>
      <Trendings
        userid={userid}
        cartIncrement={cartIncrement}
        wishDecrement={wishDecrement}
        cartDecrement={cartDecrement}
        wishIncrement={wishIncrement}
        products={products}
        filter={filter}
        setFilter={setFilter}
        setProducts={setProducts}
        quantity={quantity}
        payment={payment}
        setQuantity={setQuantity}
      />
    </div>
  );
};

export default Trans;
