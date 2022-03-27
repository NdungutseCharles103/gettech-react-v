
import React from 'react'
// import products from "../../products/Models";
import './style.css'

const Trendings = (props) => {
  const {
    wishDecrement,
    cartIncrement,
    wishIncrement ,
    cartDecrement,
    products,
    setProducts,
  } = props;
  
  

  function Trends(props) {
    const {product,products, cartDecrement, wishIncrement,
      setProducts,cartIncrement, wishDecrement} = props;
    const cartHandler = () => {
      setProducts(
        products.map((pro) => {
          if (pro.id === product.id) {
            return {
              ...pro,
              cart: !pro.cart,
            };
          }
          return pro;
        })
      );
      if (!product.cart) {
        cartIncrement();
      } else {
        cartDecrement();
      }
    };
    const wishHandler = () => {
      setProducts(
        products.map((pro) => {
          if (pro.id === product.id) {
            return {
              ...pro,
              wish: !pro.wish,
            };
          }
          return pro;
        })
      );
      if (!product.wish) {
        wishIncrement();
      } else {
        wishDecrement();
      }
    };
    const cartBtnClass = product.cart ? 'added' : '';
    const cartBtnText = product.cart ? 'Remove From Cart':'Add To Cart'
    const wishBtnClass = product.wish ? 'addedwish' : '';
    const wishBtnText = product.wish ? 'Remove from Wishlist':'Add To Wishlist'
    return (
      <div
        key={product.id}
        className="card justify-between bg-slate-100 cursor-pointer hover:scale-[1.05] duration-300 shadow-xl
            mt-3 flex flex-col items-center p-2"
      >
        <img className="w-full" src={product.image} alt="" />
        <p className="py-2">{product.name}</p>
        <div className="acts flex item-center w-[100%] px-2 justify-center">
          <button
            onClick={wishHandler}
            className={`flex py-2 px-3 bg-slate-400 items-center ${wishBtnClass}`}>
            {wishBtnText}
          </button>
          <button
            onClick={cartHandler}
            className={`flex items-center ml-2 bg-orange-300 py-2 px-3 ${cartBtnClass}`}
          >
            {cartBtnText}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex trend flex-col mt-3 overflow-hidden">
      <h1 className="text-center text-2xl">Trendings</h1>
      <div className="grid gap-4 auto-col-1 overflow-x-scroll grid-flow-col">
        {products.map((product) => (
          <Trends key={product.id} setProducts={setProducts} 
          product={product} products={products} cartIncrement={cartIncrement}
          cartDecrement={cartDecrement} wishDecrement={wishDecrement}
          wishIncrement={wishIncrement}/>
        ))}
      </div>
    </div>
  );
}

export default Trendings

