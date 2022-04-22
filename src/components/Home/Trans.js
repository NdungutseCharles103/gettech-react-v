import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Trendings from "./Trendings";
import { Link } from "react-router-dom";

const Trans = (props) => {
  const {
    wishCount,
    wishDecrement,
    cartCount,
    products,
    setFilter,
    category,
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
      <Navbar cartCount={cartCount} wishCount={wishCount} />
      <div className="flex flex-col overflow-x-hidden">
        <div className="flex items-center justify-center w-full">
          <form className="s-home search bg-slate-100 rounded-3xl mt-4 p-2 flex items-center w-[30%] justify-between pr-4">
            <input
              className="ml-2 w-[90%] outline-none border-none bg-transparent focus:border-sky-100"
              type="text"
              placeholder="Search Products"
            />
            <input type="submit" className="hidden" id="submit" />{" "}
            <label htmlFor="submit">
              <i className="bx bx-search text-xl cursor-pointer mt-2"></i>
            </label>
          </form>
        </div>
        <div className="flex items-center px-10 mt-7 intro">
          <div className="w-[70%]">
            <span className="text-3xl intro-s">
              Home of All Technological products, Trends and Tech Tips
            </span>
          </div>
          <img
            className="w-[30%]"
            src={require("../../Images/intro.png")}
            alt=""
          />
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
              <img
                className="w-full"
                src={require("../../Images/home.jpg")}
                alt=""
              />
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
              <img
                className="w-full"
                src={require("../../Images/gaming.jpg")}
                alt=""
              />
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
              <img
                className="w-full"
                src={require("../../Images/phone-pc.jpg")}
                alt=""
              />
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
              <img
                className="w-full"
                src={require("../../Images/acess.jpg")}
                alt=""
              />
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
              <img
                className="w-full"
                src={require("../../Images/others.jpg")}
                alt=""
              />
              <p>Others</p>
            </div>
          </Link>
        </div>
      </div>
      <Trendings
        cartIncrement={cartIncrement}
        wishDecrement={wishDecrement}
        cartDecrement={cartDecrement}
        wishIncrement={wishIncrement}
        products={products}
        setProducts={setProducts}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </div>
  );
};

export default Trans;
