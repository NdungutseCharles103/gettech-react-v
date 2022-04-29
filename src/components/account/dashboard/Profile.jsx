import React from 'react'

const username =JSON.parse(localStorage.getItem('username'));

function Profile() {
  return (
    <div className="border-[1px] p-6 border-slate-200">
      <div className="avatar w-full flex flex-col items-center">
        <img
          className="w-[80px] rounded-full "
          src="https://img.icons8.com/ios-glyphs/60/user--v1.pn"
          alt=""
        />
        <p>{username}</p>
        <div className="flex items-center">
          <i className="bx bx-star"></i>
          <p>5.0</p>
        </div>
      </div>
      <div className="w-full flex flex-col mt-2">
        <div className="flex items-center mt-3 justify-between">
          <p>Inbox Response Rate</p>
          <p>30%</p>
        </div>
        <div className="flex items-center mt-3 justify-between">
          <p>Inbox Response Rate</p>
          <p>30%</p>
        </div>
        <div className="flex items-center mt-3 justify-between">
          <p>Inbox Response Rate</p>
          <p>30%</p>
        </div>
        <div className="flex items-center mt-3 justify-between">
          <p>Inbox Response Rate</p>
          <p>30%</p>
        </div>
        <div className="flex items-center mt-3 justify-between">
          <p>Inbox Response Rate</p>
          <p>30%</p>
        </div>
      </div>
    </div>
  );
}

export default Profile