import React from "react";

function Orders() {
  return (
    <div className="flex flex-col px-[2%]">
      <div className="flex items-center">
        <p className="cursor-pointer">Acive Order</p>
        <p className="ml-3 cursor-pointer">Completed</p>
        <p className="ml-3 cursor-pointer">Cancelled</p>
      </div>
      <div
        className="order flex items-center mt-3
      justify-between border-[1px] border-slate-200 p-4"
      >
        <div className="flex items-center">
          <img src="https://img.icons8.com/ios-glyphs/60/user--v1.pn" alt="" />
          <div className="flex flex-col ml-3 my-auto">
            <p>client</p>
            <p className="font-bold">Naruto</p>
          </div>
        </div>
        <div className="flex flex-col  my-auto">
          <p>Price</p>
          <p className="font-bold">$3999</p>
        </div>
        <div className="flex flex-col">
          <p>Deadline</p>
          <p className="font-bold">15 Nov 2022</p>
        </div>
        <div className="flex items-center">
          <img
            className="object-cover h-[80px]"
            src="https://cdn.sanity.io/images/vfxfwnaw/production/8aa3c4242c30718c8add3cd373c2945908356f4a-600x600.webp"
            alt=""
          />
          <i className="bx bx-chevron-right cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
}

export default Orders;
