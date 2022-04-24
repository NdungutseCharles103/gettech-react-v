import React, {useState, useEffect} from "react";
import Nav from "../Navbar";
import { api } from "../utilities/one";
import Loader from '../Loaders/Loader'
import { Link } from "react-router-dom";
import emptyimg from "../../Images/empty.png";

const Cart = (props) => {
  const { cartCount, wishCount,
     payment, setPayment, products, cartDecrement} = props;
  const [ onCart, setOnCart] = useState([])
  
  const [isLoading, setIsLoading] = useState(false)
     const fetchCart = async () => {
       const data = await api.get("/user/cart");
       const products = await data.data;
       setOnCart(products);
       setIsLoading(true)
     };
  
     useEffect(()=>{
       fetchCart();
     }, [])

     const cartRemover = async(e)=>{
       const id = e.target.id;
       const parent = document.getElementsByClassName(id)
       parent[0].style.display = 'none';
        cartDecrement();
        const prorem = await products.find((p)=> p._id===id)
         prorem.cart = false;
        const remove = await api.put(`/products/${id}`, prorem) 
        console.log(remove);
        parent[0].style.display = "none";
     }
            
  function Test() {
    
     const quantIncrement = async (e) => {
       let eid = e.target.id;
       const id = eid.replace("add", "");

       const prorem = await onCart.find((p) => p._id === id);
       prorem.quantity += 1;
       
       setPayment(payment + prorem.price);
       console.log(payment + prorem.price);
       setOnCart([...onCart]);

       const putquanty = await api.put(`/products/${id}`, prorem);
       console.log(putquanty);
       // console.log(prorem.quantity+1);
       
     };
     const quantDecrement = async (e) => {
       let eid = e.target.id;
       const id = eid.replace("min", "");

       const prorem = await onCart.find((p) => p._id === id);
       prorem.quantity -= 1;
       let price = prorem.price
       if(prorem.quantity < 1)price = 0;
       if(prorem.quantity < 1) prorem.quantity = 1
        setPayment(payment - price)
       setOnCart([...onCart])

       const putquanty = await api.put(`/products/${id}`, prorem);
       console.log(putquanty);
       // console.log(prorem.quantity+1);
       
     };
  
    if (onCart.length === 0) {
      return (
        <div className="w-full h-[70vh] mt-4 flex items-center justify-center">
          <img
            className="w-[10%]"
            src={emptyimg}
            alt=""
          />
          <p>The Cart is Empty. Please search for something</p>
        </div>
      );
    } else {
      return (
        <div className="px-[2%] flex flex-col mt-10 cdiv w-full">
          <h2 className="w-full text-center text font-bold">
            Product currently on your Cart
          </h2>
          <div className="flex w-full items-center justify-center mt-7">
            <p>Products: {onCart.length}</p>
            <p className="mx-[20px]">Total Cost: {payment} USD</p>
            <button className="px-2 py-1 bg-blue-600 text-white">
              Order Now
            </button>
          </div>
          <div className=" overflow-auto">
            <div className="table w-full mt-4   overflow-scroll">
              <table className="w-full mt-8 cwish">
                <thead>
                  <tr>
                    <th className="w-[15%] text-center bg-yellow-200 h-[40px]">
                      Product
                    </th>
                    <th className="w-[15%] text-center bg-yellow-200 h-[40px]">
                      Price
                    </th>
                    <th className="w-[15%] text-center bg-yellow-200 h-[40px]">
                      Quantity
                    </th>
                    <th className="w-[15%] text-center bg-yellow-200 h-[40px]">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {onCart.map((c) => (
                    <tr key={c._id} className={c._id}>
                      <td className="flex w-full items-center justify-center flex-col">
                        <div className="flex w-full items-center justify-center flex-col py-2">
                          <img
                            className="w-[90px] mx-auto"
                            src={c.image}
                            alt=""
                          />
                          <p className="w-full text-center">{c.name}</p>
                        </div>
                      </td>
                      <td>
                        <div className="flex w-full items-center justify-center">
                          <p> {c.price} USD</p>
                        </div>
                      </td>
                      <td>
                        <div className="flex w-full mx-auto items-center justify-center">
                          <button 
                            id={`min${c._id}`}
                            onClick={quantDecrement}
                            title=" Decrease quantity"
                            className="cbtns bg-red-200 px-5"
                          >
                            -
                          </button> 
                          <p className="cp mx-6">{c.quantity}</p>
                          <button 
                            id={`add${c._id}`}
                            onClick={quantIncrement}
                            title=" Increase quantity"
                            className="cbtns bg-green-200 px-5"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>
                        <div className="flex w-full items-center justify-center">
                          <p
                            id={c._id}
                            title="remove"
                            onClick={cartRemover}
                            className=" text-red-500 text-3xl cursor-pointer rounded-md px-1 bx bx-x"
                          ></p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }
  return (
    <div className="w-full flex flex-col">
      <Nav cartCount={cartCount} wishCount={wishCount} />
      <Link
        to="/search"
        className="s-home mx-auto search bg-slate-100 rounded-3xl mt-4 p-2 flex items-center w-[30%] justify-between pr-4"
      >
        <input
          className="ml-2 cursor-pointer w-[90%] outline-none border-none bg-transparent focus:border-sky-100"
          type="text"
          placeholder="Search Products"
          disabled
        />
        <input type="submit" className="hidden " id="submit" />{" "}
        <label htmlFor="submit">
          <i className="bx bx-search text-xl cursor-pointer mt-2"></i>
        </label>
      </Link>
      {isLoading ? <Test /> : <Loader />}
    </div>
  );
};

export default Cart;
