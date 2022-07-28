import { api } from "../utilities/one";
import { Link } from "react-router-dom";

export default function Results(props) {
  const {
    userid,
    product,
    cartDecrement,
    quantity,
    setQuantity,
    wishIncrement,
    filter,
    setFilter,
    cartIncrement,
    wishDecrement,
  } = props;

  const smChange = () => {
    setFilter(
      filter.map((pro) => {
        if (pro._id === product._id) {
          return {
            ...pro,
            cart: !pro.cart,
            quantity: pro.quantity,
          };
        }
        return pro;
      })
    );
  };

  const cartHandler = () => {
    setFilter(
      filter.map((pro) => {
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
      product.cart = true;
      api.put(`/user/${userid}/newUpdates`, { products: filter });
    } else {
      cartDecrement();
      product.cart = false;
      api.put(`/user/${userid}/newUpdates`, { products: filter });
    }
  };
  const wishHandler = () => {
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
      product.wish = true;
      api.put(`/user/${userid}/newUpdates`, { products: filter });
    } else {
      wishDecrement();
      product.wish = false;
      api.put(`/user/${userid}/newUpdates`, { products: filter });
    }
  };
  const cartBtnClass = product.cart ? "bx bx-x added" : "bx bx-cart-add";
  const cartBtnTitle = product.cart ? "view cart" : "add to cart";
  const wishBtnClass = product.wish
    ? "bx bx-list-minus added wish"
    : "bx bx-list-plus";
  const wishBtnTitle = product.wish
    ? "remove from wishlist"
    : "add to wishlist";
  return (
    <div
      className="card text-sm  justify-between  bg-slate-100 cursor-pointer hover:scale-[1.05] duration-300 shadow-xl
mt-3 flex flex-col items-center p-2 w-full"
    >
      <Link
        title="click for more details"
        to={`/preview/${product._id}`}
        className="flex h-[65%] items-center flex-col w-full bg-white"
      >
        <img className="h-full" src={product.image} alt="" />
      </Link>
      <Link to={`/preview/${product._id}`} className="py-2 text-center">
        {product.name}
      </Link>
      <div className="acts mx-auto flex items-center w-full px-2 justify-between">
        <button
          onClick={wishHandler}
          title={wishBtnTitle}
          className={`flex rbtns p-2 text-3xl bg-slate-300 items-center rounded-full  ${wishBtnClass}`}
        ></button>
        <Link to={`/preview/${product._id}`} className="flex items-center">
          ${product.price}
        </Link>
        <button
          onClick={cartHandler}
          title={cartBtnTitle}
          className={`flex lbtns text-3xl items-center p-2 ml-2 bg-blue-600 rounded-full ${cartBtnClass}`}
        ></button>
      </div>
    </div>
  );
}