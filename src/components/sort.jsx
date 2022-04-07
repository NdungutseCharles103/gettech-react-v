import * as React from "react";
const Sort = () => {
  const [type, setType] = React.useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };
  return (
    <div className="select">
      <span className="mr-3">Sort By:</span>
      <select name="todos" onChange={handleChange} className="filter-todo pl-2">
        <option value="none">none</option>
        <option value="price">Price</option>
        <option value="date">Release date</option>
      </select>
    </div>
  );
};

export default Sort;
