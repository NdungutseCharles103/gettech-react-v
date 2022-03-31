import React, { useState } from "react";
import Nav from "../components/Navbar";
import Filter from '../components/filter'

const Products = (props) => {
  const [category, setCategory]= useState('gaming')
  const { cartCount, filter, setFilter, wishCount, products } = props;
  return (
    <div className="">
      <Nav cartCount={cartCount} wishCount={wishCount} />
      <Filter  filter={filter} setFilter={setFilter} products={products} category={category} setCategory={setCategory}/>
      <div className="grid  auto-col grid-cols-5 gap-4">
        {filter.map((product) => (
          <div
                  key={product._id}
            className="card justify-between  bg-slate-100 cursor-pointer hover:scale-[1.05] duration-300 shadow-xl
            mt-3 flex flex-col items-center p-2"
          >
            <div className="flex h-[65%] items-center flex-col w-full bg-white"><img className="h-full" src={product.image} alt="" /></div>
            <p className="py-2">{product.name}</p>
            <div className="acts flex item-center w-[80%] px-2 justify-between">
              <button
                className={`flex p-2 text-3xl bg-slate-300 items-center rounded-full  `}
              >
              </button>
              <p>{product.price}</p>
              <button
                className={`flex text-3xl items-center p-2 ml-2 bg-blue-600 rounded-full`}
              >
              </button>
            </div>
          </div>))}</div>
    </div>
  );
};

export default Products;
