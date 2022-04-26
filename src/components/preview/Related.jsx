import React from "react";
import photo from "../../Images/acess.jpg";

function Related() {
  return (
    <div className="mt-4 overflow-auto gap-2 grid grid-flow-col auto-cols-[27%] px-2">
      <div
        className="card text-sm  justify-between  bg-slate-100 cursor-pointer hover:scale-[1.05] duration-300 shadow-xl
mt-3 flex flex-col items-center p-2"
      >
        <div className="flex h-[65%] items-center flex-col w-full bg-white">
          <img className="h-full" src={photo} alt="" />
        </div>
        <p className=" text-center text-xl">sdfeer</p>
        <div className="acts flex item-center w-full px-2 justify-between">
          <p className="flex w-full justify-center text-xl items-center">$324</p>
        </div>
      </div>
    </div>
  );
}

export default Related;
