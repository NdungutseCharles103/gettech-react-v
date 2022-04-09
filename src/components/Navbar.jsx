import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {Link} from 'react-router-dom'
import { Products } from "./utilities/one";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = (props) => {
  // const [active, seActive] = useState("")
  const [toggle, setToggle] = useState("")
  const {wishCount, cartCount} = props;

  const activeHandler = (e) => {
    e.target.classList.add('active');
  }
  const toggled = toggle ? 'toggled':''
  return (
    <nav className="navbar z-50 bg-slate-100 text-black h-[60px] flex items-center justify-center sticky top-0">
      <div className="navbar__container items-center justify-between w-[90%] max-w-[1500px] flex px-6">
        <Link to="/" id="navbar__logo" className="w-[80px]">
          <img src={require("../Images/logo.png")} alt="" />
        </Link>
        <div className="navbar__toggle" id="mobile-menu" onClick={()=> setToggle(!toggle)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`${toggled} navbar__menu flex items-center text-[1.2em]  justify-center` }>
          <li className="ml-7">
            <Link onClick={activeHandler} to="/" className="navbar__links" id="home-page">
              Home
            </Link>
          </li>
          <li className="ml-7">
            <Link to='/products' className="navbar__links cursor-pointer" id="about-page ">
              Products</Link>
              {/* {show?<Dropdown />:''} */}
          </li>
          <Link to='/cart'>
            <IconButton className="ml-7 navitem" aria-label="cart" onClick={Products}>
              <Badge max={99} badgeContent={cartCount} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
          <Link to='/wishlist'>
            <IconButton className="ml-7 navitem" aria-label="cart">
              <Badge max={99} badgeContent={wishCount} color="secondary">
                <FavoriteIcon />
              </Badge>
            </IconButton>
          </Link>
          <li className="ml-7">
            <Link to="/signup" className="">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
