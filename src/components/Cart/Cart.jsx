import React, {useState, useEffect} from "react";
import Nav from "../Navbar";
import { api } from "../utilities/one";
import Loader from '../Loaders/Loader'

const Cart = (props) => {
  const { cartCount, wishCount, payment} = props;
  const [ onCart, setOnCart] = useState([])
  const [isLoading, setIsLoading] = useState(false)
     const fetchProducts = async () => {
       const data = await api.get("/user/cart");
       const products = await data.data;
       setOnCart(products);
       setIsLoading(true)
     };
  
     useEffect(()=>{
       fetchProducts();
     }, [])
  console.log(onCart.length);
  function Test() {
  
    if (onCart.length === 0) {
      return (
        <div className="w-full mt-4 flex items-center justify-center">
          <img
            className="w-[10%]"
            src={require("../../Images/empty.png")}
            alt=""
          />
          <p>The Cart is Empty. Please search for something</p>
        </div>
      );
    } else {
      return (
        <div className="px-[2%] flex flex-col mt-10 cdiv w-full">
          <h2 className="w-full text-center text font-bold">
            Product currently on your Cart
          </h2>
          <div className="flex w-full items-center justify-center mt-7">
            <p>Products: {onCart.length}</p>
            <p className="mx-[20px]">Total Cost: {payment} USD</p>
            <button className="px-2 py-1 bg-blue-600 text-white">
              Order Now
            </button>
          </div>
          <div className="table mt-4">
            <table className="w-full mt-8 cwish">
              <thead>
                <tr>
                  <th className="w-[15%] bg-yellow-200 h-[40px]">Product</th>
                  <th className="w-[15%] bg-yellow-200 h-[40px]">Price</th>
                  <th className="w-[15%] bg-yellow-200 h-[40px]">Quantity</th>
                  <th className="w-[15%] bg-yellow-200 h-[40px]">Action</th>
                </tr>
              </thead>
              <tbody>
                {onCart.map((c) => (
                  <tr key={c._id}>
                    <td className="flex w-full items-center justify-center flex-col">
                      <div className="flex w-full items-center justify-center flex-col py-2">
                        <img
                          className="w-[90px] mx-auto"
                          src={c.image}
                          alt=""
                        />
                        <p className="w-full text-center">{c.name}</p>
                      </div>
                    </td>
                    <td>
                      <div className="flex w-full items-center justify-center">
                        <p> {c.price} USD</p>
                      </div>
                    </td>
                    <td>
                      <div className="flex w-full mx-auto items-center justify-center">
                        <button
                          title=" Decrease quantity"
                          className="cbtns bg-red-200 px-5"
                        >
                          -
                        </button>
                        <p className="cp mx-6">3</p>
                        <button
                          title=" Increase quantity"
                          className="cbtns bg-green-200 px-5"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      <div className="flex w-full items-center justify-center">
                        <i
                          title="remove"
                          className=" text-red-500 text-3xl cursor-pointer rounded-md px-1 bx bx-x"
                        ></i>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <Nav cartCount={cartCount} wishCount={wishCount} />
      <div className="flex justify-center items-center">
        <form className="search z-[-1] psearch bg-slate-100 rounded-3xl mt-4 p-2 flex items-center w-[30%] justify-between pr-4">
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
      {isLoading? <Test />:<Loader />}
    </div>
  );
};

export default Cart;
