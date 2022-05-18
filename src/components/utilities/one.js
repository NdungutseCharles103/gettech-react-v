import axios from "axios";
import { getLocal } from "./useLocal";

export const api = axios.create({
  baseURL: `ttps://hitech1.herokuapp.com`,
});
//https://hitech1.herokuapp.com
//http://localhost:8080
export const Products = async () => {
  const get = await api.get("/products");
  const res = await get.data;
  return res;
};

export const payHandler = (fun, con, op) => {
  if (op === "+") {
    return fun((p) => p + con);
  }else{
    return fun((p) => p - con);
  }
};

export const PriceHandler = () => {};

let price, Pname, image, category, desc;

export const getprice = (e) => {
  price = e.target.value;
};

export const getPname = (e) => {
  Pname = e.target.value;
};
export const getimage = (e) => {
  image = e.target.value;
};
export const getcat = (e) => {
  category = e.target.value;
};
export const getdesc = (e) => {
  desc = e.target.value;
};

const owner = getLocal("username")

export const submitProduct = async (e) =>{
  e.preventDefault();
  console.log(Pname, price, category, image, owner, desc);
  const product = {
    name: Pname,
    price: price,
    category: category,
    image: image,
    owner: owner,
    description: desc
  }

  const done = await api.post('/products', product)
  if(done) console.log(done);
}
