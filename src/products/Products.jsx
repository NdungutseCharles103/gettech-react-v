import React from "react";
import Nav from "../components/Navbar";

const Products = (props) => {
  const {cartCount, wishCount} = props;
  return (
    <div className="">
      <Nav cartCount={cartCount} wishCount={wishCount} />
    </div>
  );
};

export default Products;
