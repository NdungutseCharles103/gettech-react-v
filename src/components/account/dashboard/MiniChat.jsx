import React from 'react'

function MiniChat() {
  return (
    <div className="flex flex-col mt-3">
      <div className="flex justify-between items-center">
        <h1>Recent Chats</h1>
        <p>See All</p>
      </div>
      <div className="recent flex flex-col items-center px-4 mt-2">
        <div className="flex items-center justify-between bg-slate-100 px-[3%]  rounded-lg w-full">
          <div className="flex items-cnter">
            <img
              src="https://img.icons8.com/ios-glyphs/60/user--v1.pn"
              alt="" />
            <div className="flex flex-col my-auto">
              <p className='font-bold'>Sasuke</p>
              <p >Sure</p>
            </div>
          </div>
          <span className='p-2'>1</span>
        </div>
      </div>
    </div>
  );
}

export default MiniChat