import React from 'react'
import Navbar from '../Navbar'
import photo from '../../Images/acess.jpg'
import Related from './Related';

function ProductPreview() {
    
  return (
    <div className="w-full mb-11">
      <Navbar />
      <div className=" mt-7">
        <i title='go back' className="bx bx-arrow-back bg-slate-200 p-1 hover:bg-slate-500
        translate-y-7 ml-[8%] cursor-pointer rounded-full text-black duration-300"></i>
        <h1 className="text-center font-semibold text-xl">Product Preview</h1>
      </div>
      <div className="flex w-full ">
        <div className="flex flex-col mt-11 w-[45%">
          <div className="p-4 border-[1px] bg-slate-50 w-[80%] mx-auto rounded-md shadow-lg">
            <img className="" src={photo} alt="" />
          </div>
          <div className="grid mx-auto w-[70%] gap-4 mt-4 auto-cols-auto grid-flow-col px-3">
            <img
              className="rounded-2xl shadow-xl border-2 object-cover w-[80px] h-[60px] cursor-pointer"
              src={photo}
              alt=""
            />
            <img
              className="rounded-2xl shadow-xl border-2 object-cover w-[80px] h-[60px] cursor-pointer"
              src={photo}
              alt=""
            />
            <img
              className="rounded-2xl shadow-xl border-2 object-cover w-[80px] h-[60px] cursor-pointer"
              src={photo}
              alt=""
            />
            <img
              className="rounded-2xl shadow-xl border-2 object-cover w-[80px] h-[60px] cursor-pointer"
              src={photo}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col mt-11 w-[55%] px-5 h-full justify-between">
          <h1 className="text-2xl font-bold">Accessories</h1>
          <div className="rate">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
          </div>
          <div className="desc mt-7">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Incidunt, id quia autem temporibus, nam perferendis earum, nostrum
              dolorem molestias hic ipsa saepe rem minus fugit omnis vitae
              deleniti officiis reiciendis.
            </p>
          </div>
          <div>
            <p className="cut-off"></p>
            <p className="text-2xl font-semibold mt-3">$40</p>
          </div>
          <div className="btns mt-[3vh] flex items-center">
            <button className=" border-2 border-blue-500 hover:bg-blue-500 duration-300 flex items-center px-2 py-2">
              <i className="bx bxs-cart text-2xl"></i>Add To Cart
            </button>
            <button className="flex items-center duration-300
              ml-6 border-2 hover:bg-slate-400 border-slate-400 p-2">
              <i className="bx bxs-heart text-2xl "></i>
              Add To Wishlist
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className=" text-center font-semibold text-xl mt-2">
          Related Products
        </h1>
        <Related />
      </div>
    </div>
  );
}

export default ProductPreview