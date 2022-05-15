import React, { useState, useEffect } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { runFireworks } from "./utils";

const Success = () => {

  useEffect(() => {
    runFireworks();
  }, []);

  const reload =()=>{
    window.location.replace('http://localhost:4040/')
  }

  return (
    <div className=" items-center absolute bg-black bg-opacity-30 justify-center w-full h-screen flex ">
      <div className="flex flex-col items-center bg-stone-200 py-4 px-9 rounded-lg ">
        <p className="icon">
          <BsBagCheckFill className="text-3xl text-green-600" />
        </p>
        <h2 className="text-3xl">Thank you for your order!</h2>
        <p>Check the progress of your order in account&gt;orders</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <p className="email-msg">Check your email inbox for the receipt.</p>
          <button
          onClick={reload}
            type="button"
            width="300px"
            className="py-2 
           rounded-lg px-3 bg-blue-600 text-white mt-7"
          >
            Continue Shopping
          </button>
      </div>
    </div>
  );
};

export default Success;
