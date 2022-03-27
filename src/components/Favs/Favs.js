import React from "react";
import Nav from "../Navbar";

const Favs = (props) => {
  const { cartCount, wishCount } = props;
  return (
    <div>
      <Nav cartCount={cartCount} wishCount={wishCount}/>
      Favs
    </div>
  );
};

export default Favs;
