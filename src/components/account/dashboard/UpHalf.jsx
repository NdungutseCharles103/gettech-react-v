import React from 'react'
import Chart from './charts/Chart';

function UpHalf() {
  return (
    <div className=" border-slate-200 border-[1px] p-[2%] w-[70%] ">
      <h1>Earnings</h1>
      <div className="w-full grid grid-cols-3 gap-6">
        <div className="border-slate-200 border-[1px] p-1 flex cursor-pointer">
          <i className="bx bx-pie-chart p-2 text-3xl bg-green-300 rounded-md"></i>
          <div className="flex flex-col ml-2">
            <p>Net income</p>
            <h1 className="font-bold">$23434</h1>
          </div>
        </div>
        <div className="border-slate-200 border-[1px] p-1 flex cursor-pointer">
          <i className="bx bx-pie-chart p-2 text-3xl bg-yellow-200 rounded-md"></i>
          <div className="flex flex-col ml-2">
            <p>Withdrawn</p>
            <h1 className="font-bold">$23434</h1>
          </div>
        </div>
        <div className="border-slate-200 border-[1px] p-1 flex cursor-pointer">
          <i className="bx bxs-time p-2 text-3xl bg-red-200 rounded-md"></i>
          <div className="flex flex-col ml-2">
            <p>Pending</p>
            <h1 className="font-bold">$23434</h1>
          </div>
        </div>
      </div>
      <Chart />
    </div>
  );
}

export default UpHalf