
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
          if (pro._id === product._id) {
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
          if (pro._id === product._id) {
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
    const cartBtnClass = product.cart ? 'bx bx-check added' : 'bx bx-cart-add';
    const cartBtnTitle = product.cart ? "remove from cart" : "add to cart";
    const wishBtnClass = product.wish ? "bx bx-list-minus addedwish" : "bx bx-list-plus";
    const wishBtnTitle = product.wish ? 'remove from wishlist':'add to wishlist'
    return (
      <div
        key={product.id}
        className="card justify-between bg-slate-300 cursor-pointer hover:scale-[1.05] duration-300 shadow-xl
            mt-3 flex flex-col items-center p-2"
      >
        <img className="w-full" src={product.image} alt="" />
        <p className="py-2">{product.name}</p>
        <div className="acts flex item-center w-[80%] px-2 justify-between">
          <button title={wishBtnTitle}
            onClick={wishHandler}
            className={`flex px-1 text-3xl bg-slate-300 items-center ${wishBtnClass}`}
          >
          </button>
          <p>{product.price}</p>
          <button title={cartBtnTitle}
            onClick={cartHandler}
            className={`flex px-1 text-3xl items-center ml-2 bg-orange-300 ${cartBtnClass}`}
          >
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
          <Trends key={product._id} setProducts={setProducts} 
          product={product} products={products} cartIncrement={cartIncrement}
          cartDecrement={cartDecrement} wishDecrement={wishDecrement}
          wishIncrement={wishIncrement}/>
        ))}
      </div>
    </div>
  );
}

export default Trendings

