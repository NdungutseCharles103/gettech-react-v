import React, { useState, useEffect } from 'react'
import { api } from '../utilities/one';
import Success from './Congs';
import { useSelector } from "react-redux";

function Order({products, userid}) {
  const local = useSelector((state) => state.user.isLocal);
  const [orders, setOrders] = useState([])

  const getProducts = async()=>{
    if (local) {
      const cartItems = await products.filter((pro) => pro.cart === true);
      setOrders(cartItems);
      // setIsLoading(true);
    } else {
      const data = await api.get(`/user/${userid}/products`);
      const products = await data.data;
      console.log(products);
      const cartItems = await products.filter((pro) => pro.cart === true);
      setOrders(products);
      // setIsLoading(true);
    }
  }

  useEffect(() => {
    getProducts()
  }, []);

  return (
    <div className="w-full flex flex-col overflow-hidden">
      <img
        className="w-[70px] mx-auto mt-3"
        src={require("../../Images/logo.png")}
        alt=""
      />
      <div className="grid grid-cols-2 mt-8 h-[89vh] overflow-hidden">
        <div className="flex flex-col px-6 w-full h-full overflow-auto">
         <p className="text-xl sticky top-0 bg-slate-100">Products to be purchased</p>
          {orders.map((order, index) => (
            <div
              key={index}
              className="flex w-full px-4 py-2 mt-4  bg-slate-100 rounded-lg justify-between"
            >
              <div className="flex">
                <div className="w-[40px] flex bg-white">
                  <img className="aspect-square" src={order.image} alt="" />
                </div>
                <div className="flex ml-4 flex-col my-auto">
                  <h2>{order.name}</h2>
                  <p>Quantity: {order.quantity}</p>
                </div>
              </div>
              <p>${order.price * order.quantity}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col px-5">
          <h2 className="text-xl">Payment Details</h2>
          <p className="text-sm">
            Complete your purchase by providing your payment details
          </p>
          <p className="text-sm">
            These inputs doesn't require real life cards just fill for only to
            continue
          </p>
          <div className="w-4/5">
            <div className="flex flex-col mt-3">
              <label htmlFor="">Email address</label>
              <input
                className="w-full border focus:border-blue-700 focus:ring-1 focus:ring-sky-500 mt-1 h-[40px] px-2 rounded-md outline-none text-black"
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="">Card details </label>
              <input
                className="w-full border
                focus:border-blue-700 focus:ring-1 focus:ring-sky-500 mt-1 h-[40px] px-2 rounded-md outline-none text-black"
                type="number"
                placeholder="Card Number(12-16 numbers)            MM/YY  CVC"
                maxLength={16}
                minLength={12}
              />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="">Cardholder name</label>
              <input
                className="w-full border focus:border-blue-700 focus:ring-1 focus:ring-sky-500 mt-1 h-[40px] px-2 rounded-md outline-none text-black"
                type="text"
                placeholder="Enter cardholder name"
              />
            </div>
            <div className="w-full flex justify-between mt-4 items-center px-4">
              <p> SubTotal</p>
              <p>$</p>
            </div>
            <div className="w-full flex justify-between mt-4 items-center px-4">
              <p>VAT(18%)</p>
              <p>$</p>
            </div>
            <div className="w-full flex justify-between mt-4 items-center px-4">
              <p> Total Payment</p>
              <p>$</p>
            </div>
            <div className="w-full flex">
              <button
                type="submit"
                className="px-3 py-2 bg-blue-500 mx-auto mt-8 w-1/3"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Success /> */}
    </div>
  );
}

export default Order