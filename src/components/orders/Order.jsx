import React, { useState, useEffect } from 'react'
import { api } from '../utilities/one';
import Success from './Congs';
import { useSelector } from "react-redux";

function Order({products, userid}) {
  const local = useSelector((state) => state.user.isLocal);
  const user = useSelector((state) => state.user.currentUser);
  const [orders, setOrders] = useState([])
  const [disabled, setDisabled]= useState(false)
  const [orderDetails, setOrderDetails] = useState({subtotal: 0, VAT: 0, totalPyment: 0})
  const [address, setAddress] = useState('')
  const [isuccess, setSuccess] = useState(false)

  const getProducts = async()=>{
    if (local) {
      const cartItems = await products.filter((pro) => pro.cart === true);
      setOrders(cartItems);
      // setIsLoading(true);
    } else {
      const data = await api.get(`/user/${userid}/products`);
      const products = await data.data;
      const cartItems = await products.filter((pro) => pro.cart === true);
      setOrders(cartItems);
      const totalarr = cartItems.map(item=> item.price*item.quantity)
      const subtotal = totalarr.reduce((a,b)=> a+b)
      const vat = subtotal*0.18;
      const total = Math.round(subtotal+vat)
      setOrderDetails({subtotal: subtotal, VAT: vat, totalPyment: total})
    }
  }

  const submitOrder = async(e)=>{
    setDisabled(true)
    e.preventDefault();
    const newOrder = {
      userId: userid,
      products: orders,
      amount: orderDetails.totalPyment,
      address: address,
    }
    const res = await api.post('/order/newOrder', newOrder,{
      headers: {
        'accessToken': user
      }
    })
    if(res.status === 200){
       setSuccess(true)
       const res = await api.put(`/user/${userid}/newUpdates`, {products: [], counts: [{cart: 0, wish: 0, payment: 0}]})
       console.log(res);
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
          <form className="w-4/5" onSubmit={submitOrder}>
            <div className="flex flex-col mt-3">
              <label htmlFor="">Email address</label>
              <input
                className="w-full border focus:border-blue-700 focus:ring-1 focus:ring-sky-500 mt-1 h-[40px] px-2 rounded-md outline-none text-black"
                type="text"
                placeholder="Enter your email"
              required/>
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor="">Your location address</label>
              <input onChange={(e)=> setAddress(e.target.value)}
                className="w-full border focus:border-blue-700 focus:ring-1 focus:ring-sky-500 mt-1 h-[40px] px-2 rounded-md outline-none text-black"
                type="text"  placeholder="Enter your address" required/>
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
              required/>
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
              <p>${orderDetails.subtotal} </p>
            </div>
            <div className="w-full flex justify-between mt-4 items-center px-4">
              <p>VAT(18%)</p>
              <p>${orderDetails.VAT}</p>
            </div>
            <div className="w-full flex justify-between mt-4 items-center px-4">
              <p> Total Payment</p>
              <p>${orderDetails.totalPyment}</p>
            </div>
            <div className="w-full flex">
              <input
                type="submit"
                className={`px-3 py-2 bg-blue-500 mx-auto
                 mt-8 w-1/3 ${disabled?'cursor-not-allowed':'cursor-pointer'} `}
              value="Buy Now" disabled={disabled}/>
            </div>
          </form>
        </div>
      </div>
      {isuccess?<Success />:''}
    </div>
  );
}

export default Order