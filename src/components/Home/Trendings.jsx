import { api } from '../utilities/one';
import React from 'react'
// import products from "../../products/Models";
import './style.css'

const Trendings = (props) => {
  const {
    wishDecrement,
    cartIncrement,
    wishIncrement,
    cartDecrement,
    products,
    setProducts,
    quantity,
    setQuantity,
  } = props;
  
  

  function Trends(props) {
    const {product,products, cartDecrement, wishIncrement,
      setProducts,cartIncrement, wishDecrement, quantity, setQuantity} = props;
    const cartHandler = async () => {
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
        setQuantity(quantity + 1);
        product.quantity = await quantity + 1;
        product.cart = true;
        console.log(product);
        /* const res = */ await api.put(`/products/${product._id}`, product);
      } else {
        cartDecrement();
        setQuantity(quantity - 1);
        product.quantity = quantity - 1;
        if (product.quantity <= 0) {
          setQuantity(0);
          product.quantity = 0;
        }
        product.cart = false;
        api.put(`/products/${product._id}`, product);
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
        product.wish = true
        api.put(`/products/${product._id}`, product)
      } else {
        wishDecrement();
        product.wish = false;
        api.put(`/products/${product._id}`, product);
      }
    };
    const cartBtnClass = product.cart ? 'bx bx-x added' : 'bx bx-cart-add';
    const cartBtnTitle = product.cart ? "remove from cart" : "add to cart";
    const wishBtnClass = product.wish ? "bx bx-list-minus added wish" : "bx bx-list-plus";
    const wishBtnTitle = product.wish ? 'remove from wishlist':'add to wishlist'

    if (!products) return  `Loading...`;
    return (
      <div
        className="card text-sm  justify-between  bg-slate-100 cursor-pointer hover:scale-[1.05] duration-300 shadow-xl
mt-3 flex flex-col items-center p-2"
      >
        <div className="flex h-[65%] items-center flex-col w-full bg-white">
          <img className="h-full" src={product.image} alt="" />
        </div>
        <p className="py-2 text-center">{product.name}</p>
        <div className="acts flex item-center w-full px-2 justify-between">
          <button
            onClick={wishHandler}
            title={wishBtnTitle}
            className={`flex rbtns p-2 text-3xl bg-slate-300 items-center rounded-full  ${wishBtnClass}`}
          ></button>
          <p className='flex items-center'>${product.price}</p>
          <button
            onClick={cartHandler}
            title={cartBtnTitle}
            className={`flex lbtns text-3xl items-center p-2 ml-2 bg-blue-600 rounded-full ${cartBtnClass}`}
          ></button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex trend flex-col mt-3 overflow-hidden">
      <h1 className="text-center text-2xl">Trendings</h1>
      <div className="grid pro auto-col grid-cols-6 gap-4">
        {products.map((product) => (
          <Trends
            key={product._id}
            setProducts={setProducts}
            product={product}
            products={products}
            cartIncrement={cartIncrement}
            cartDecrement={cartDecrement}
            wishDecrement={wishDecrement}
            wishIncrement={wishIncrement}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        ))}
      </div>
    </div>
  );
}

export default Trendings

