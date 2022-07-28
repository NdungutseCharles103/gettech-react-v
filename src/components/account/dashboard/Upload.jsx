import React from "react";
import { useState } from "react";
import { api } from "../../utilities/one";
import { BiX } from 'react-icons/bi';
import axios from 'axios'

function Upload({userDetails, setIsUpload, setUserImage}) {
  const [image, setImage] = useState("");
  const [preview, setPreview]= useState('');
  const [uploading, setUploading] = useState(false)

  const handleChange = (e) =>{
    setImage(e.target.files[0])
    setPreview(URL.createObjectURL(e.target.files[0]))
  }
  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "charles0");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/hitech1/image/upload",
      formData
    );
    if (res.status === 200) {
      console.log(res);
      setUserImage(res.data.secure_url)
      const res1 = await api.put(`/user/${userDetails._id}`,{picture: res.data.secure_url})
      console.log(res1);
      setIsUpload(false)
    }
  };

  return (
    <div
      className="absolute w-screen left-0 top-0 z-[50]
     h-screen bg-opacity-[0.7] bg-black flex items-center justify-center"
    >
      <div className="bg-slate-50 h-[50vh]">
        <div className="labels mt-2 px-[5%] w-full h-full items-center
         justify-between py-5 flex flex-col">
          <div className="w-full flex justify-end  translate-y-[-15px] cursor-pointer">
            <BiX onClick={()=> setIsUpload(false)} className="text-3xl float-right"/>
          </div> 
          <label className="ml-2 text-black font-semibold text-xl">
            Update your profile picture
          </label>
          <input
            onChange={handleChange}
            className="w-full border focus:border-blue-700 focus:ring-1 focus:ring-sky-500 mt-1 h-[40px] px-2 rounded-md outline-none text-black"
            type="file"
            placeholder="Enter your username"
          />
          <div className="w-[150px] rounded-full h-[150px] overflow-hidden">
          <img src={preview} className="object-cover min-h-full min-w-full" alt="" />
          </div>
          <button
          className={`bg-blue-500 text-slate-200 py-2 px-3
          ${uploading?'cursor-not-allowed pointer-events-none':''}`}
           onClick={uploadImage}>Upload Image</button>
        </div>
      </div>
    </div>
  );
}

export default Upload;
