import React from 'react'

const AddProduct = () => {
  return (
    <div>
      <form action="" className="flex flex-col">
        <div className="flex">
          <label htmlFor="">ProductName</label>
          <input type="text" />
        </div>
        <div className="flex">
          <label htmlFor="">Category</label>
          <input type="text" />
        </div>
        <div className="flex">
          <label htmlFor="">Price</label>
          <input type="text" />
        </div>
      </form>
    </div>
  )
}

export default AddProduct