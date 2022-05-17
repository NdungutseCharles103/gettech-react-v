import React from "react";
import { api } from "../components/utilities/one";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import { useState } from "react";

const AddProduct = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [proDetails, setProDetails] = React.useState({
    name: "",
    category: "",
    description: "",
    image: "",
    price: 0,
  });
  const [subStatus, setSubStatus] = useState("");

  const username = jwtDecode(user).name;
  console.log(username);

  const submitProduct = async (e) => {
    e.preventDefault();
    const product = {
      name: proDetails.name,
      price: Number(proDetails.price),
      category: proDetails.category,
      image: proDetails.image,
      owner: username,
      description: proDetails.description,
    };
    console.log(proDetails);

    const done = await api.post("/products", product);
    if (done) {
      setSubStatus("Your product was successfully added!");
      console.log(done);
    }
  };

  return (
    <div className="w-100 justify-center px-3 mt-5 d-flex items-center flex-col">
      <h3 className="text-center text-2xl font-semibold">
        Add Your New Product
      </h3>
      <p className="text-green-500 text-center">{subStatus}</p>
      <form onSubmit={submitProduct} className="w-[500px] mx-auto">
        <div className="flex flex-col mt-3">
          <label htmlFor="">Enter Product Name</label>
          <input
            onChange={(e) =>
              setProDetails({ ...proDetails, name: e.target.value })
            }
            className="w-full border focus:border-blue-700 focus:ring-1 focus:ring-sky-500 mt-1 h-[40px] px-2 rounded-md outline-none text-black"
            type="text"
            placeholder="Enter your product price"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="">Enter Product Price in $ (dollar)</label>
          <input
            onChange={(e) =>
              setProDetails({ ...proDetails, price: e.target.value })
            }
            className="w-full border focus:border-blue-700 focus:ring-1 focus:ring-sky-500 mt-1 h-[40px] px-2 rounded-md outline-none text-black"
            type="number"
            placeholder="Enter your product name"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="">Enter Product Category</label>
          <div className="flex items-center">
            <input
              onChange={(e) =>
                setProDetails({ ...proDetails, category: e.target.value })
              }
              className="ml-4 scale-[1.2] mr-2"
              type="radio"
              name="category"
            />
            <label htmlFor="">Home appliance</label>
            <input
              onChange={(e) =>
                setProDetails({ ...proDetails, category: e.target.value })
              }
              className="ml-4 scale-[1.2] mr-2"
              type="radio"
              value="Gaming"
              name="category"
            />
            <label htmlFor="">Gaming</label>
            <input
              onChange={(e) =>
                setProDetails({ ...proDetails, category: e.target.value })
              }
              className="ml-4 scale-[1.2] mr-2"
              type="radio"
              value="Pcs"
              name="category"
            />
            <label htmlFor="">Pcs</label>
          </div>
          <div className="flex items-center">
            <input
              onChange={(e) =>
                setProDetails({ ...proDetails, category: e.target.value })
              }
              className="ml-4 scale-[1.2] mr-2"
              type="radio"
              value="Phones"
              name="category"
            />
            <label htmlFor="">Phones</label>
            <input
              onChange={(e) =>
                setProDetails({ ...proDetails, category: e.target.value })
              }
              className="ml-4 scale-[1.2] mr-2"
              type="radio"
              value="accessories"
              name="category"
            />
            <label htmlFor="">Accessories</label>
            <input
              onChange={(e) =>
                setProDetails({ ...proDetails, category: e.target.value })
              }
              className="ml-4 scale-[1.2] mr-2"
              type="radio"
              value="other"
              name="category"
            />
            <label htmlFor="">Other</label>
          </div>
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="">Enter Product Image Url</label>
          <input
            onChange={(e) =>
              setProDetails({ ...proDetails, image: e.target.value })
            }
            className="w-full border focus:border-blue-700 focus:ring-1 focus:ring-sky-500 mt-1 h-[40px] px-2 rounded-md outline-none text-black"
            type="text"
            placeholder="example: https://cdn.sanity.io/images/vfxfwnaw/production/07fd4b12012f56f93ee9c5090a09754b4d8ee9dd-600x600.webp"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label htmlFor="">Enter Product Description</label>
          <textarea
            onChange={(e) =>
              setProDetails({ ...proDetails, description: e.target.value })
            }
            className="w-full border resize-none
             focus:border-blue-700 focus:ring-1 focus:ring-sky-500 mt-1 h-[140px] px-2 rounded-md outline-none text-black"
            placeholder="description here"
          />
        </div>
        <div className="flex flex-col mt-3">
          <input
            className="py-2 cursor-pointer px-4 mt-4 mx-auto bg-blue-500"
            type="submit"
            value="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
