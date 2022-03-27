import React from "react";
import Navbar from "./Navbar";
import Trendings from './Home/Trendings'

const Home = (props) => {
  const {wishCount, wishDecrement, cartCount, products, setProducts,
   wishIncrement,cartIncrement, cartDecrement} = props;
  return (
    <div className="main ">
      <Navbar cartCount={cartCount} wishCount={wishCount} />
      <div className="flex flex-col overflow-x-hidden">
        <div className="flex items-center justify-center w-full">
          <form className="search bg-slate-100 rounded-3xl mt-4 p-2 flex items-center w-[30%] justify-between pr-4">
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
        <div className="flex items-center px-10">
          <div className="w-[70%]">
            <span className="text-3xl">
              Home of All Technological products, Trends and Tech Tips
            </span>
          </div>
          <img
            className="w-[30%]"
            src={require("../Images/intro.png")}
            alt=""
          />
        </div>
      </div>
      <div className="cat flex flex-col items-center mt-3">
        <h2 className="text-center text-2xl">Categories</h2>
        <div className="grid gap-4 auto-col grid-cols-5">
          <div
            className="card justify-between cursor-pointer bg-slate-100 hover:scale-110 duration-300 shadow-xl
            mt-3 flex gap-3 flex-col items-center px-2"
          >
            <img
              className="w-full"
              src={require("../Images/home.jpg")}
              alt=""
            />
            <p>Home Appliances</p>
          </div>
          <div
            className="card justify-between cursor-pointer bg-slate-100 hover:scale-110 duration-300 shadow-xl
            mt-3 flex flex-col items-center px-2"
          >
            <img
              className="w-full"
              src={require("../Images/gaming.jpg")}
              alt=""
            />
            <p>Gaming</p>
          </div>
          <div
            className="card justify-between cursor-pointer bg-slate-100 hover:scale-110 duration-300 shadow-xl
            mt-3 flex flex-col items-center px-2"
          >
            <img
              className="w-full"
              src={require("../Images/phone-pc.jpg")}
              alt=""
            />
            <p>Phones and Pcs</p>
          </div>
          <div
            className="card justify-between cursor-pointer bg-slate-100 hover:scale-110 duration-300 shadow-xl
            mt-3 flex flex-col items-center px-2"
          >
            <img
              className="w-full"
              src={require("../Images/acess.jpg")}
              alt=""
            />
            <p>Accesories</p>
          </div>
          <div
            className="card justify-between cursor-pointer bg-slate-100 hover:scale-110 duration-300 shadow-xl
            mt-3 flex flex-col items-center px-2"
          >
            <img
              className="w-full"
              src={require("../Images/others.jpg")}
              alt=""
            />
            <p>Others</p>
          </div>
        </div>
      </div>
      <Trendings
        cartIncrement={cartIncrement}
        wishDecrement={wishDecrement}
        cartDecrement={cartDecrement}
        wishIncrement={wishIncrement}
        products={products} setProducts={setProducts}
      />
    </div>
  );
};

export default Home;
