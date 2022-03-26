import React from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <nav className="navbar bg-slate-100 text-black h-[60px] flex items-center justify-center">
      <div className="navbar__container items-center justify-between w-[90%] max-w-[1500px] flex px-6">
        <a href="/" id="navbar__logo" className="w-[80px]">
          <img src={require("../Images/logo.png")} alt="" />
        </a>
        <div className="navbar__toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="navbar__menu flex items-center text-[1.2em]  justify-center">
          <li className="ml-7">
            <a href="/" className="navbar__links active" id="home-page">
              Home
            </a>
          </li>
          <li className="mx-7">
            <a href="/" className="navbar__links" id="about-page">
              Products
            </a>
          </li>
          <IconButton className="ml-7" aria-label="cart">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <li className="ml-7">
            <a href="/" className="navbar__links" id="services-page">
              Wishlist
            </a>
          </li>
          <li className="ml-7">
            <a href="/" className="button">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
