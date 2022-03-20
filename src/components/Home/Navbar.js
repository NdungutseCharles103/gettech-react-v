import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar bg-black text-white">
        <div className="navbar__container items-center flex px-6">
            <a href="index.html" id="navbar__logo"><img src={`images/tech-s.png`} alt='' /></a>
            <div className="navbar__toggle" id="mobile-menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <ul className="navbar__menu flex items-center justify-between">
                <li className="navbar__item">
                    <a href="index.html" className="navbar__links active" id="home-page">Home</a>
                </li>
                <li className="navbar__item">
                    <a href="Products.html" className="navbar__links" id="about-page">Products</a>
                </li>
                <li className="navbar__item">
                    <a href="About.html" className="navbar__links" id="services-page">About</a>
                </li>
                <li className="navbar__btn">
                    <a href='/' className="button">Sign Up</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar