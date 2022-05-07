import React from "react";
import HomeLoader from "./Loaders/HomeLoader";
import Trans from "./Home/Trans";
import Footer from "./Sign/Footer";
import Navbar from "./Navbar";

const Home = (props) => {
  const {
    userid,
    wishCount,
    wishDecrement,
    cartCount,
    products,
    setFilter,
    filter,
    category,
    setCategory,
    setProducts,
    wishIncrement,
    cartIncrement,
    cartDecrement,
    isHomeLoader,
    quantity, setQuantity
  } = props;


  return (
    <>
      <div className="main mb-7">
        <Navbar cartCount={cartCount} wishCount={wishCount} />
        {isHomeLoader ? (
          <Trans
            userid={userid}
            wishCount={wishCount}
            wishDecrement={wishDecrement}
            cartCount={cartCount}
            products={products}
            filter={filter}
            setFilter={setFilter}
            category={category}
            setCategory={setCategory}
            setProducts={setProducts}
            wishIncrement={wishIncrement}
            cartIncrement={cartIncrement}
            cartDecrement={cartDecrement}
            isHomeLoader={isHomeLoader}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        ) : (
          <HomeLoader />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
