import * as React from "react";

const Sort = (props) => {
  const {filter, setFilter, sorted, setSorted} = props
  // console.log(filter.sort(compDates));

/* 
 */


  const handleChange = (event) => {
    setSorted(event.target.value);
  };
  return (
    <div className="select">
      <span className="mr-3">Sort By:</span>
      <select name="" onChange={handleChange} className=" pl-2">
        <option value="none">none</option>
        <option  value="price">Price</option>
        <option  value="date">Release date</option>
      </select>
    </div>
  );
};

export default Sort;
