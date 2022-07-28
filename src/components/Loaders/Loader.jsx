import React from 'react'
import './loader.css'

function Loader() {
  return (
    <div className="flex flex-col w-full mt-10">
      <div className="flex items-center justify-center w-full">
        <div className="anim h-[40px] w-[20%]"></div>
      </div>
      <div className="flex items-center justify-center mt-7 w-full">
        <div className="anim h-[40px] w-[8%] ml-4"></div>
        <div className="anim h-[40px] w-[8%] ml-4"></div>
        <div className="anim h-[40px] w-[8%] ml-4"></div>
      </div>
      <div className="flex items-center justify-center mt-8 w-full">
        <div className="anim h-[50vh] w-[90%]"></div>
      </div>
    </div>
  );
}

export default Loader