import React, {useState, useEffect} from "react";
import Nav from "../Navbar";
import { api } from "../utilities/one";
import Loader from '../Loaders/Loader'

const Favs = (props) => {
  const { cartCount, wishCount} = props;
  const [ onWish, setOnWish] = useState([])
  const [isLoading, setIsLoading] = useState(false)
     const fetchProducts = async () => {
       const data = await api.get("/user/wish");
       const products = await data.data;
       setOnWish(products);
       setIsLoading(true)
     };
  
     useEffect(()=>{
       fetchProducts();
     }, [])
  console.log(onWish.length);
  function Test() {
  
    if (onWish.length === 0) {
      return (
        <div className="w-full mt-4 flex items-center justify-center">
          <img
            className="w-[10%]"
            src={require("../../Images/wish.jpg")}
            alt=""
          />
          <p>The Wishlist is Empty. Please search for something</p>
        </div>
      );
    } else {
      return (
        <div className="px-[2%] flex flex-col mt-10">
          <h2 className="w-full text-center text font-bold">
            Product currently on your Wishlist
          </h2>
          <div className="flex w-full items-center justify-center mt-7">
            <p>Products: {onWish.length}</p>
            {/* <p className="mx-[20px]">Total Cost: {payment} USD</p> */}
            <button className="px-2 ml-10 py-1 bg-blue-600 text-white">Add all To Cart</button>
          </div>
          <table className="w-full mt-8">
            <thead>
              <tr>
                <th className="w-[15%] bg-yellow-200 h-[40px]">Product</th>
                <th className="w-[15%] bg-yellow-200 h-[40px]">Price</th>
                <th className="w-[15%] bg-yellow-200 h-[40px]">Cart</th>
                <th className="w-[15%] bg-yellow-200 h-[40px]">Action</th>
              </tr>
            </thead>
            <tbody>
            {onWish.map((c) => (
              <tr key={c._id}>
                <td className="flex w-full items-center justify-center flex-col">
                  <div className="flex w-full items-center justify-center flex-col py-2">
                    <img className="w-[90px] mx-auto" src={c.image} alt="" />
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
                    <button title="Add To Cart" className="bg-green-200 py-2 px-5">
                      Add To Cart
                    </button>
                  </div>
                </td>
                <td>
                  <div className="flex w-full items-center justify-center">
                    <i
                      title="remove"
                      className=" text-red-500 text-3xl rounded-md cursor-pointer px-1 bx bx-x"
                    ></i>
                  </div>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
  return (
    <div>
      <Nav cartCount={cartCount} wishCount={wishCount} />
      <div className="flex justify-center items-center">
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
      {isLoading? <Test />:<Loader />}
    </div>
  );
};

export default Favs;
