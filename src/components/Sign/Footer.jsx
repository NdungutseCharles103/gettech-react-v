import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col footer text-white justify-between p-4 text-md w-full h-[30vh]">
      <div className="flex justify-between w-full text-white">
        <div className="foot flex flex-col">
          <h1>About Us</h1>
          <a className="text-white" href="/">Testimonials</a>
          <a className="text-white" href="/">Statistics</a>
        </div>
        <div className="foot flex flex-col">
          <h1>Contact Us</h1>
          <a className="text-white" href="/">Facebook</a>
          <a className="text-white" href="/">Instagram</a>
          <a className="text-white" href="/">Youtube</a>
        </div>
        <div className="foot flex flex-col">
          <h1>Reach Us</h1>
          <a className="text-white" href="/">Facebook</a>
          <a className="text-white" href="/">Instagram</a>
          <a className="text-white" href="/">Youtube</a>
        </div>
        <div className="foot flex flex-col  w-[20%]">
          <h1>Partners</h1>
          <div className="flex">
            <img className='w-[20%]'
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Trivago.svg/120px-Trivago.svg.png?20151005195949"
              alt=""
            />
            <img  className='w-[20%]'
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/512px-Samsung_Logo.svg.png?20211002073723"
              alt=""
            />
            <img className='w-[20%]'
              src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo-500x313.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-center w-full">&copy; HiTech 2022 All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
