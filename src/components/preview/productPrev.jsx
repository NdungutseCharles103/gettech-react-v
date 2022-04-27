import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import Related from './Related';
import { useParams, useNavigate } from "react-router-dom";
import Product from './product';
import { api } from '../utilities/one'
import { useState } from 'react';

function ProductPreview(props) {
  const {cartCount, wishCount, wishDecrement, wishIncrement,
     cartIncrement, cartDecrement, products }= props
  const [product, setProduct] = useState({})  

  const navigate = useNavigate();
  let params = useParams();

    const getProduct = async()=> {
      const res = await api.get(`/products/${params.product_id}`);
      setProduct(res.data)
      
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
       product={product} wishDecrement={wishDecrement}
      cartIncrement={cartIncrement} cartDecrement={cartDecrement} />: <div></div>}
      <div className="flex flex-col mt-11">
        <h1 className=" text-center font-semibold text-xl mt-2">
          Related Products
        </h1>
        <Related product={product} products={products} />
      </div>
    </div>
  );
}

export default ProductPreview