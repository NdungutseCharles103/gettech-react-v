import React, {useState} from "react";
import photo from "../../Images/acess.jpg";

function Related(props) {
  const {product, products } = props
  const relProducts = products.filter(p => p.category === product.category && p._id !== product._id)

  return (
    <>
      {relProducts.length !== 0 ? (
        relProducts.map((rel) => (
          <div className="mt-4 overflow-x-auto overflow-y-hidden gap-2 grid grid-flow-col auto-cols-[27%] px-2">
            <div className="card text-sm  justify-between  bg-slate-100 cursor-pointer hover:scale-[1.05] duration-300 shadow-xl mt-3 flex flex-col items-center p-2">
              <div className="flex h-[65%] items-center flex-col w-full bg-white">
                <img className="h-full" src={rel.image} alt="" />
              </div>
              <p className=" text-center text-xl">{rel.name}</p>
              <div className="acts flex item-center w-full px-2 justify-between">
                <p className="flex w-full justify-center text-xl items-center">
                  ${rel.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center">Sorry. No other related products found!</div>
      )}
    </>
  );
}

export default Related;
