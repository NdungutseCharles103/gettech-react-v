import { api } from '../utilities/one';
import React from 'react'
// import products from "../../products/Models";
import './style.css'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { compareAndUpdate } from "../utilities/two";


const Trendings = (props) => {
const local = useSelector((state) => state.user.isLocal);
  const {
    payment,
    userid,
    filter,
    wishDecrement,
    cartIncrement,
    wishIncrement,
    cartDecrement,
    products,
    setProducts,
    quantity,
    setFilter,
    setQuantity,
  } = props;
  
  

  function Trends(props) {
    const {product,products, cartDecrement, wishIncrement, userid, filter,setFilter,cartIncrement, wishDecrement} = props;
    const cartHandler = async () => {
      setFilter(
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
        cartIncrement(payment+product.price);
        product.cart = true;
        const upPro = await compareAndUpdate(product, filter);
        console.log(product);
        if (!local) {
          await api.put(`/user/${userid}/newUpdates`, {
            products: upPro,
          });
        } else {
          localStorage.setItem("products", JSON.stringify(upPro));
        }
      } else {
        cartDecrement(1, payment+product.price);
        product.cart = false;
        const upPro = await compareAndUpdate(product, filter);
        if (!local) {
          await api.put(`/user/${userid}/newUpdates`, {
            products: upPro,
          });
        } else {
          localStorage.setItem("products", JSON.stringify(upPro));
        }
      }
    };
    const wishHandler = async() => {
      setFilter(
        filter.map((pro) => {
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
        const upPro = await compareAndUpdate(product, filter);
        if (!local) {
          await api.put(`/user/${userid}/newUpdates`, {
            products: upPro,
          });
        } else {
          localStorage.setItem("products", JSON.stringify(upPro));
        }
      } else {
        wishDecrement();
        product.wish = false;
        const upPro = await compareAndUpdate(product, filter);
        if (!local) {
          await api.put(`/user/${userid}/newUpdates`, {
            products: upPro,
          });
        } else {
          localStorage.setItem("products", JSON.stringify(upPro));
        }
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
        <Link title='click to for more details' to={`/preview/${product._id}`} className="flex h-[65%] items-center flex-col w-full bg-white">
          <img className="h-full" src={product.image} alt="" />
        </Link>
        <Link to={`/preview/${product._id}`} className="py-2 text-center">{product.name}</Link>
        <div className="acts flex item-center w-full px-2 justify-between">
          <button
            onClick={wishHandler}
            title={wishBtnTitle}
            className={`flex rbtns p-2 text-3xl bg-slate-300 items-center rounded-full  ${wishBtnClass}`}
          ></button>
          <Link to={`/preview/${product._id}`} className='flex items-center'>${product.price}</Link>
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
      <h1 className="text-center text-2xl  font-semibold">Trendings</h1>
      <div className="grid pro auto-col grid-cols-6 gap-4">
        {products.map((product) => (
          <Trends
          userid={userid}
            key={product._id}
            setProducts={setProducts}
            product={product}
            products={products}
            filter={filter}
            setFilter={setFilter}
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

