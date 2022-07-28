import React from 'react'
import MiniChat from './MiniChat'
import Profile from './Profile'
import SideNav from './SideNav'
import UpHalf from './UpHalf'
import Add from './Add'
import Orders from './Orders'

function DashBoard() {
  return (
    <div className="flex w-full">
      <SideNav />
      <div className="w-[95%] flex border-[1px] border-slate-200">
        <div className="w-[70%] flex flex-col">
          <div className="w-[100%] border-r-[1px] p-[2%] flex">
            <UpHalf />
            <Add />
          </div>
          <Orders />
        </div>
        <div className="w-[30%] p-6 flex flex-col">
          <Profile />
          <MiniChat />
        </div>
      </div>
    </div>
  );
}

export default DashBoard