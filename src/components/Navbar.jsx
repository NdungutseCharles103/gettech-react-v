import React, {useState} from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = (props) => {
  const [show, setShow]=useState(false)
  const {wishCount, cartCount} = props;

  const showHandler = () =>{
    setShow(!show)
  }
  // const dropshow = show? <Dropdown /> : ''

    const Dropdown = () =>{
      return (
            <div className="flex flex-col absolute bg-slate-100 py-3 translate-x-[-15px] text-[.9em]">
              <a href="/" className="flex hover:bg-slate-400  pr-6 pl-5">Home</a>
              <a href="/gaming" className="flex  hover:bg-slate-400   pl-5">PCs</a>
              <a href="/" className="flex  hover:bg-slate-400   pl-5">Phones</a>
              <a href="" className="flex  hover:bg-slate-400   pl-5">Gaming</a>
            </div>
      )
    }

  return (
    <nav className="navbar bg-slate-100 text-black h-[60px] flex items-center justify-center sticky top-0">
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
          <li className="ml-7">
            <div onClick={showHandler} className="navbar__links cursor-pointer" id="about-page ">
              Products
            </div>
              {show?<Dropdown />:''}
          </li>
          <a href="/cart">
            <IconButton className="ml-7 navitem" aria-label="cart">
              <Badge max={99} badgeContent={cartCount} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </a>
          <a href="wishlist">
            <IconButton className="ml-7 navitem" aria-label="cart">
              <Badge max={99} badgeContent={wishCount} color="secondary">
                <FavoriteIcon />
              </Badge>
            </IconButton>
          </a>
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
