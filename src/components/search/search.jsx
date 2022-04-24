import React from "react";
import { useState } from "react";
import Navbar from "../Navbar";
import Results from "./results";
import SearchForm from "./SearchForm";

function Search(props) {
    
  const [searchRes, setSearchRes] = useState([]);
  

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

  return (
    <div>
      <div>
        <Navbar cartCount={cartCount} wishCount={wishCount} />
        <SearchForm products={products} searchRes={searchRes}  setSearchRes={setSearchRes}/>
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
