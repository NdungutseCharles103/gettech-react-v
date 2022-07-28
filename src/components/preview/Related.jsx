import React, {useState} from "react";
import photo from "../../Images/acess.jpg";
import { Link } from 'react-router-dom'

function Related(props) {
  const {product, products, setProduct } = props
  const relProducts = products.filter(p => p.category === product.category && p._id !== product._id)

  function RelProduct({rel}) {

    const setRel = ()=>{
      const pro = products.filter(p=> p._id === rel._id)
      setProduct(pro[0])
    }
    return (
      <Link
        to={`/preview/${rel._id}`}
        key={rel._id}
        onClick={setRel}
        className="card text-sm  justify-between  bg-slate-100 cursor-pointer hover:scale-[1.05] duration-300 shadow-xl mt-3 flex flex-col items-center p-2"
      >
        <div className="flex h-[65%] items-center flex-col w-full bg-white">
          <img className="h-full" src={rel.image} alt="" />
        </div>
        <p className=" text-center text-xl">{rel.name}</p>
        <div className="acts flex item-center w-full px-2 justify-between">
          <p className="flex w-full justify-center text-xl items-center">
            ${rel.price}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <>
      <div className="mt-4 related overflow-x-auto overflow-y-hidden gap-2 grid grid-flow-col auto-cols-[20%] px-2">
        {relProducts.length !== 0 ? (
          relProducts.map((rel, index) => (
            <RelProduct rel={rel} key={index} />
          ))
        ) : (
          <div className="text-center">
            Sorry. No other related products found!
          </div>
        )}
      </div>
    </>
  );
}

export default Related;

