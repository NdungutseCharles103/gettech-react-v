import React, { useState, useEffect } from 'react'
import { api } from '../utilities/one'
import { compareAndUpdate } from '../utilities/two'
import { useSelector } from "react-redux";

function Product(props) {
  const local = useSelector((state) => state.user.isLocal);
    const { product, cartIncrement, userid,filter,
         cartDecrement,wishIncrement, wishDecrement } = props

    const cartHandler = async(prod)=>{
      if (!product.cart) {
            product.cart = true
            cartIncrement()
            const fin = []
            fin[0]= product
            const upPro = await compareAndUpdate(fin, filter);
            console.log(upPro);
            if (!local) {
              await api.put(`/user/${userid}/newUpdates`, {
                products: upPro,
              });
            } else {
              localStorage.setItem("products", JSON.stringify(upPro));
            }
        } else if(product.cart) {
            product.cart = false
            cartDecrement()
            const upPro = await compareAndUpdate(product, filter);
            if (!local) {
              await api.put(`/user/${userid}/newUpdates`, {
                products: upPro,
              });
            } else {
              localStorage.setItem("products", JSON.stringify(upPro));
            }
        }
    
    }

    const wishHandler = async()=>{
        if (product.wish === false) {
            product.wish = true
            wishIncrement()
            const upPro = await compareAndUpdate(product, filter);
            if (!local) {
              await api.put(`/user/${userid}/newUpdates`, {
                products: upPro,
              });
            } else {
              localStorage.setItem("products", JSON.stringify(upPro));
            }
        } else if(product.wish === true) {
            product.wish = false
            wishDecrement()
            const upPro = await compareAndUpdate(product, filter);
            if (!local) {
              await api.put(`/user/${userid}/newUpdates`, {
                products: upPro,
              });
            } else {
              localStorage.setItem("products", JSON.stringify(upPro));
            }
        }
     
    }
    console.log(product);
  return (
    <div className="flex w-full ">
      <div className="flex flex-col mt-11 w-[45%">
        <div className="p-4 flex border-[1px] bg-slate-50 w-[80%] h-[40vh] object-cover mx-auto rounded-md shadow-lg">
          <img className="object-cover mx-auto h-full" src={product.image} alt="" />
        </div>
        <div className="grid mx-auto w-[100%] ml-3  gap-4 mt-5 auto-cols-auto grid-flow-col px-3">
          <img
            className="rounded-2xl shadow-xl border-2 object-cover w-[80px] h-[60px] cursor-pointer"
            src={product.image}
            alt=""
          />
          <img
            className="rounded-2xl shadow-xl border-2 object-cover w-[80px] h-[60px] cursor-pointer"
            src={product.image}
            alt=""
          />
          <img
            className="rounded-2xl shadow-xl border-2 object-cover w-[80px] h-[60px] cursor-pointer"
            src={product.image}
            alt=""
          />
          <img
            className="rounded-2xl shadow-xl border-2 object-cover w-[80px] h-[60px] cursor-pointer"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col mt-11 w-[55%] px-5 h-full justify-between">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <div className="rate">
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
          <i className="bx bxs-star"></i>
        </div>
        <div className="desc mt-7">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt,
            id quia autem temporibus, nam perferendis earum, nostrum dolorem
            molestias hic ipsa saepe rem minus fugit omnis vitae deleniti
            officiis reiciendis.
          </p>
        </div>
        <div>
          <p className="cut-off"></p>
          <p className="text-2xl font-semibold mt-3">${product.price}</p>
        </div>
        <div className="btns mt-[3vh] flex items-center">
          <button 
          onClick={cartHandler}
          className={` ${product.cart? 'prorev': ''}
          border-2 border-blue-500 hover:bg-blue-500 duration-300 flex items-center px-2 py-2`}>
            <i className="bx bxs-cart text-2xl"></i>{product.cart? 'Remove': 'Add To Cart'}
          </button>
          <button
          onClick={wishHandler}
            className={`flex items-center duration-300 ${product.wish? 'prorev1': ''}
              ml-6 border-2 hover:bg-slate-400 border-slate-400 p-2`}
          >
            <i className="bx bxs-heart text-2xl "></i>
            {product.wish? 'Remove': 'Add To Wishlist'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product