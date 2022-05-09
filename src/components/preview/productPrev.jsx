import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import Related from './Related';
import { useParams, useNavigate } from "react-router-dom";
import Product from './product';
import { api } from '../utilities/one'
import { useState } from 'react';
import { useSelector } from "react-redux";

function ProductPreview(props) {
  const local = useSelector((state) => state.user.isLocal);
  const {cartCount, wishCount,userid, wishDecrement, wishIncrement,
     cartIncrement, cartDecrement, filter, payment }= props
  const [product, setProduct] = useState(undefined)  

  const navigate = useNavigate();
  let params = useParams();
  console.log(product);

    const getProduct = async()=> {
      if (local) {
        const pro = filter.filter(p=> p._id === params.product_id)
        console.log(pro);
        setProduct(pro[0])
      } else {
        const data = await api.get(`/user/${userid}/products`);
        const products = await data.data;
        const pro = await products.filter(p=> p._id === params.product_id)
        setProduct(pro[0]);
      }
    }

    useEffect(() => {
      getProduct()
    }, []);

  return (
    <div className="w-full mb-11">
      <Navbar cartCount={cartCount} wishCount={wishCount} />
      <div onClick={()=> navigate(-1)} className=" mt-7">
        <i title='go back'
        className="bx bx-arrow-back bg-slate-200 p-1 hover:bg-slate-500
        translate-y-7 ml-[8%] cursor-pointer rounded-full text-black duration-300"></i>
        <h1 className="text-center font-semibold text-xl">Product Preview</h1>
      </div>
      {product !== undefined ?< Product wishIncrement={wishIncrement} setProduct={setProduct}
       product={product} wishDecrement={wishDecrement} filter={filter} userid={userid}
      cartIncrement={cartIncrement} cartDecrement={cartDecrement}
      payment={payment} />: <div></div>}
      <div className="flex flex-col mt-11">
        <h1 className=" text-center font-semibold text-xl mt-2">
          Related Products
        </h1>
        {product !== undefined?
        <Related product={product} products={filter} />
        : ''}
      </div>
    </div>
  );
}

export default ProductPreview