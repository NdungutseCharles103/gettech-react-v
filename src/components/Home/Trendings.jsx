
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
    const cartBtnClass = product.cart ? 'bx bx-x added' : 'bx bx-cart-add';
    const cartBtnTitle = product.cart ? "view cart" : "add to cart";
    const wishBtnClass = product.wish ? "bx bx-list-minus addedwish" : "bx bx-list-plus";
    const wishBtnTitle = product.wish ? 'remove from wishlist':'add to wishlist'
    return (
      <div
        key={product.id}
        className="card justify-between h-[45vh] bg-slate-100 cursor-pointer hover:scale-[1.05] duration-300 shadow-xl
            mt-3 flex flex-col items-center p-2"
      >
       <div className="flex h-[65%] items-center flex-col w-full"><img className="h-full" src={product.image} alt="" /></div> 
        <p className="py-2">{product.name}</p>
        <div className="acts flex item-center w-[80%] px-2 justify-between">
          <button title={wishBtnTitle}
            onClick={wishHandler}
            className={`flex p-2 text-3xl bg-slate-300 items-center rounded-full  ${wishBtnClass}`}
          >
          </button>
          <p>{product.price}</p>
          <button title={cartBtnTitle}
            onClick={cartHandler}
            className={`flex text-3xl items-center p-2 ml-2 bg-blue-600 rounded-full ${cartBtnClass}`}
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

