import React, { useEffect } from 'react'
import Filter from '../../components/filter'
import Nav from "../../components/Navbar";
import { api } from "../../components/utilities/one";
import Sort from "../../components/sort";
import ProLoader from "../../components/Loaders/ProLoader";
import { compDates } from "../../components/utilities/two";
import { comPrice } from "../../components/utilities/two";
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react';

function Category(props) {
    const [catProducts, seCatProducts] = useState('')
    const [sorted, setSorted] = React.useState("");
    const [isLoading, setLoading] = useState(true)
     const {
        filter, 
       cartCount,
       payment,
       setPayment,
       counts,
       updateCounts,
       quantity,
       setQuantity,
       setFilter,
       wishCount,
       cartDecrement,
       wishIncrement,
       wishDecrement,
       cartIncrement,
       setProducts,
       products,
     } = props;

     let params = useParams();

     const categorized = products.filter(
         (pro) =>{
          if (params.product_cat==='all') return products === products
          return (
            pro.category.toLowerCase() === params.product_cat.toLowerCase()
          );
         });
     useEffect(() => {
       seCatProducts(categorized);
       setTimeout(()=>{
           setLoading(false)
       }, 2000)
     }, [params]); 

        useEffect(() => {
          handleSorted();
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [filter, sorted]);

        const handleSorted = () => {
          switch (sorted) {
            case "none":
              seCatProducts(catProducts);
              break;

            case "price":
              seCatProducts(catProducts.sort(compDates));
              break;
            case "date":
              seCatProducts(catProducts.sort(comPrice));
              break;

            default:
              seCatProducts(catProducts);
              break;
          }
        }; 
         
    
  return (
    <div className="mb-7">
      <Nav className="z-10" cartCount={cartCount} wishCount={wishCount} />
      <Filter />
      <div className="w-full flex items-center justify-center">
        <Sort
          filter={catProducts}
          setFilter={seCatProducts}
          sorted={sorted}
          setSorted={setSorted}
        />
      </div>
      {!isLoading ? (
        <div className="grid px-2 pro auto-col grid-cols-6 gap-4">
          {catProducts.length !== 0 ? catProducts.map((product) => (
          <Test
            key={product._id}
            product={product}
            setProducts={setProducts}
            products={products}
            cartIncrement={cartIncrement}
            cartDecrement={cartDecrement}
            wishDecrement={wishDecrement}
            payment={payment}
            counts={counts}
            updateCounts={updateCounts}
            wishIncrement={wishIncrement}
            filter={filter}
            setFilter={setFilter}
            setPayment={setPayment}
            cartCount={cartCount}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          )) : ""}
        </div>
      ) : (
        <ProLoader />
      )}
    </div>
  );
}

export default Category

function Test(props) {
  const {
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
      setQuantity(quantity + 1);
      product.quantity = quantity + 1;
      product.cart = true;
      api.put(`/products/${product._id}`, product);
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
      api.put(`/products/${product._id}`, product);
    } else {
      wishDecrement();
      product.wish = false;
      api.put(`/products/${product._id}`, product);
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
      <Link title='click to for more details' to={`/preview/${product._id}`}
       className="flex h-[65%] items-center flex-col w-full bg-white">
        <img className="h-full" src={product.image} alt="" />
      </Link>
      <Link to={`/preview/${product._id}`}
       className="py-2 text-center">{product.name}</Link>
      <div className="acts mx-auto flex items-center w-full px-2 justify-between">
        <button
          onClick={wishHandler}
          title={wishBtnTitle}
          className={`flex rbtns p-2 text-3xl bg-slate-300 items-center rounded-full  ${wishBtnClass}`}
        ></button>
        <Link to={`/preview/${product._id}`}
        className="flex items-center">${product.price}</Link>
        <button
          onClick={cartHandler}
          title={cartBtnTitle}
          className={`flex lbtns text-3xl items-center p-2 ml-2 bg-blue-600 rounded-full ${cartBtnClass}`}
        ></button>
      </div>
    </div>
  );
}