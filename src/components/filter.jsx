import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';

const Filter = () => {
    // const { products,filter, setFilter,category} = props;

  return (
    <div className="s-filter w-full flex flex-col items-center justify-center">
      <Link
        to="/search"
        className="s-home search bg-slate-100 rounded-3xl mt-4 p-2 flex items-center w-[30%] justify-between pr-4"
      >
        <input
          className="ml-2 cursor-pointer w-[90%] outline-none border-none bg-transparent focus:border-sky-100"
          type="text"
          placeholder="Search Products"
          disabled
        />
        <input type="submit" className="hidden " id="submit" />{" "}
        <label htmlFor="submit">
          <i className="bx bx-search text-xl cursor-pointer mt-2"></i>
        </label>
      </Link>
      <div className="filter flex items-center">
        <Link to="/products/all">
          <p
            className="ml-7 py-2 hover:text-blue-600 duration-300 mt-3 cursor-pointer"
          >
            All
          </p>
        </Link>
        <Link to="/products/home">
          <p
            className="ml-7 py-2 hover:text-blue-600 duration-300 mt-3 cursor-pointer"
          >
            Home equipments
          </p>
        </Link>
        <Link to="/products/phones">
          <p
            className="ml-7 py-2 hover:text-blue-600 duration-300 mt-3 cursor-pointer"
          >
            Phones
          </p>
        </Link>
        <Link to="/products/Pcs">
          <p
            className="ml-7 py-2 hover:text-blue-600 duration-300 mt-3 cursor-pointer"
          >
            Computers
          </p>
        </Link>
        <Link to="/products/gaming">
          <p
            className="ml-7 py-2 hover:text-blue-600 duration-300 mt-3 cursor-pointer"
          >
            Gaming
          </p>
        </Link>
        <Link to="/products/accessories">
          <p
            className="ml-7 py-2 hover:text-blue-600 duration-300 mt-3 cursor-pointer"
          >
            Accessories
          </p>
        </Link>
        <Link to="/products/others">
          <p
            className="ml-7 py-2 hover:text-blue-600 duration-300 mt-3 cursor-pointer"
          >
            Others
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Filter
