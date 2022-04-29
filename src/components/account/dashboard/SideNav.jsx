import React from 'react'
import { Link } from 'react-router-dom'

function SideNav() {
  return (
    <div className="flex flex-col w-[60px] items-center justify-between h-[92vh] bg-stone-100 py-6">
      <div className="navicons h-[40%] flex flex-col items-center">
        <Link to='/allmenu'>
          <i className="cursor-pointer text-2xl p-2 bx bxs-grid-alt"></i></Link>
        <Link to='/messages'>
          <i className="cursor-pointer text-2xl p-2 mt-3 bx bx-message-rounded"></i></Link>
        <Link to='/shop'>
          <i className="cursor-pointer text-2xl p-2 mt-3 bx bx-shopping-bag"></i></Link>
        <Link to='/listed'>
          <i className="cursor-pointer text-2xl p-2 mt-3 bx bx-list-ul"></i></Link> 
        <Link to='/analytics'>
          <i className="cursor-pointer text-2xl p-2 mt-3 bx bxs-bar-chart-alt-2"></i></Link> 
      </div>
      <div className=" flex flex-col items-center">
        <i className="cursor-pointer bx bx-cog text-2xl mb-5"></i>
        <Link to="/login">
          <i className="cursor-pointer bx bx-log-out text-2xl"></i>
        </Link>
      </div>
    </div>
  );
}

export default SideNav