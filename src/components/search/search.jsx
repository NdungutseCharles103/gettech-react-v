import React from "react";
import { useState } from "react";
import Navbar from "../Navbar";
import Results from "./results";

function Search({ props }) {
    
  const {
    cartCount,
    counts,
    updateCounts,
    quantity,
    setQuantity,
    wishCount,
    cartDecrement,
    wishIncrement,
    wishDecrement,
    cartIncrement,
    setProducts,
    products,
  } = props;
  const [searchRes, setSearchRes] = useState(products);
  return (
    <div>
      <div>
        <Navbar cartCount={cartCount} wishCount={wishCount} />
        <form className="s-home search bg-slate-100 rounded-3xl mt-4 p-2 flex items-center w-[30%] justify-between pr-4">
          <input
            className="ml-2 w-[90%] outline-none border-none bg-transparent focus:border-sky-100"
            type="text"
            placeholder="Search Products"
          />
          <input type="submit" className="hidden" id="submit" />{" "}
          <label htmlFor="submit">
            <i className="bx bx-search text-xl cursor-pointer mt-2"></i>
          </label>
        </form>
      </div>
      <div className="grid px-2 pro auto-col grid-cols-6 gap-4">
        {searchRes.map((product) => (
          <Results
            key={product._id}
            product={product}
            setProducts={setProducts}
            products={products}
            cartIncrement={cartIncrement}
            cartDecrement={cartDecrement}
            wishDecrement={wishDecrement}
            counts={counts}
            updateCounts={updateCounts}
            wishIncrement={wishIncrement}
            cartCount={cartCount}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;
