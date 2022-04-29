import React from 'react'
import './loader.css'

const HomeLoader = () => {
  return (
    <div className="h-[100vh] flex flex-col w-full">
      <div className="flex items-center justify-center mt-4">
        <div className="anim w-[30%] rounded-3xl h-[40px]"></div>
      </div>
      <div className="flex items-center px-10 w-full mt-10">
        <div className="w-[70%] h-[40px] anim"></div>
        <div className="w-[28%] ml-[2%] h-[240px] anim"></div>
      </div>
      <div className="cat flex flex-col items-center mt-3 w-full">
        <div className="w-full flex mt-3 items-center justify-center">
          <div className="h-[30px] w-[10%] anim"></div>
        </div>
        <div className="grid pro gap-4 auto-col grid-cols-5 w-full px-4">
          <div className="mt-3 h-[200px] flex gap-3 flex-col items-center anim"> </div>
          <div className="mt-3 h-[200px] flex gap-3 flex-col items-center anim"> </div>
          <div className="mt-3 h-[200px] flex gap-3 flex-col items-center anim"> </div>
          <div className="mt-3 h-[200px] flex gap-3 flex-col items-center anim"> </div>
          <div className="mt-3 h-[200px] flex gap-3 flex-col items-center anim"> </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-6">
          <div className="h-[30px] w-[10%] anim"></div>
      </div>
    </div>
  );
}

export default HomeLoader