import React from "react";
import './style.css'
import { FaUserShield, FaShippingFast, FaDollarSign } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Floats() {
    const user = useSelector((state) => state.user.currentUser);

  return (
      <>
    <div className="flex items-center px-[7%] mt-7 intro ">
      <div className="w-[45%] flex flex-col">
          <h1 className="text-[2em] text-gray-800 font-bold">
              Every Purchase Will Be Made
              With Pleasure
          </h1>
          <p className="mt-3">Buying and selling of technlogical
               products using internet</p>
            <Link to={user?'/products':'/signup'} className=" cursor-pointer mt-11
            flex flex-col items-center shadow-md startbtn duration-900 bg-gradient-to-r text-slate-200
            rounded-3xl py-2 text-xl font-semibold w-[200px] from-blue-500 to-blue-700">
               <p className="text-slate-200"> {user?'Start Shopping':'Get Started'}</p></Link>
      </div>
      <div className="w-[55%] flex items-center flex-col">
        <img src={require("../../Images/beaut.png")} alt="" />
      </div>
    </div>
    <div className="grid grid-cols-3 px-5 mt-9">
        <div className="flex flex-col w-full items-center justify-center">
            <div className="bg-green-200 p-[5%]
             shadow-lg rounded-3xl">
                <FaUserShield className="text-[8em] " />
            </div>
            <p className="text-xl font-semibold mt-4">Free Shopping</p>
        </div>
        <div className="flex flex-col w-full items-center justify-center">
            <div className="bg-yellow-100 p-[5%]
             shadow-lg rounded-3xl">
                <FaShippingFast className="text-[8em] " />
            </div>
            <p className="text-xl font-semibold mt-4">Fast Delivery</p>
        </div>
        <div className="flex flex-col w-full items-center justify-center">
            <div className="bg-violet-200 p-[5%]
             shadow-lg rounded-3xl">
                <FaDollarSign className="text-[8em] " />
            </div>
            <p className="text-xl font-semibold mt-4">Make Money</p>
        </div>
    </div>
    </>
  );
}

export default Floats;
