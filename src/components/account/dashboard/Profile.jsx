import React from "react";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import Upload from "./Upload";
import { useState } from "react";

function Profile() {
  const user = useSelector((state) => state.user.currentUser);
  const userDetails = jwt_decode(user);
  const [isUpload, setIsUpload] = useState(false);
  const [userImage, setUserImage] = useState(userDetails.picture);

  return (
    <div className="border-[1px] p-6 border-slate-200">
      <div className="avatar w-full flex flex-col items-center">
        <div>
          <img
            className="w-[80px] rounded-full "
            src={userImage}
            alt=""
          />
        </div>
        <p>{userDetails.name}</p>
        <div className="flex items-center">
          <i className="bx bx-star"></i>
          <p>5.0</p>
        </div>
        <p
        onClick={()=> setIsUpload(true)}
         className="text-blue-800 cursor-pointer
         hover:text-blue-500">Upload profile picture</p>
      </div>
      <div className="w-full flex flex-col mt-2">
        <button className="bg-slate-500 text-gray-100 py-2">
          View Your Products
        </button>
        <Link
          to="/addproduct"
          className=" py-2 mt-3 bg-slate-500 flex items-center justify-center"
        >
          <button className=" text-gray-100">Add Product</button>
        </Link>
      </div>
      {isUpload ? <Upload userDetails={userDetails} setUserImage={setUserImage}
      setIsUpload={setIsUpload} /> : ""}
    </div>
  );
}

export default Profile;
