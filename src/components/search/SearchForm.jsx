import React, { useState, useEffect} from 'react'

const SearchForm = (props) => {
  const { setSearchRes, products } = props;
  const [searchInput, setSearchInput] = useState("");
  const [noResults, setNoResults] = useState("");
  const [height, setHeight] = useState("h-[60vh]");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    //  getResults(e);
  };

  const getResults = (e) => {
    e.preventDefault();
    let res = products.filter(
      (p) =>
        p.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        p.category.toLowerCase().includes(searchInput.toLowerCase())
    );
    //  if(searchInput === '') res= products;
    setNoResults("");
    setHeight("");
    if (res.length === 0)
      setNoResults(
        `No products that has a name or category of ${searchInput} !`
      );
    setSearchRes(res);
  };
   useEffect(()=>{
     let res;
     if(searchInput !==''){
       res = products.filter((p) => p.name.toLowerCase().includes(searchInput.toLowerCase()) || p.category.toLowerCase().includes(searchInput.toLowerCase()) );
       setSearchRes(res);
        setHeight("");
        if (res.length === 0)
          setNoResults(
            `No products that has a name or category of ${searchInput} !`
          );
       if(res.length !== 0)  setNoResults("");
     }else{
       setNoResults("");
     }
   },[searchInput])

  return (
    <>
      <div className="w-full flex">
        <form
          onSubmit={getResults}
          className="s-home search bg-slate-100 rounded-3xl mt-4 p-2 flex items-center mx-auto w-[50%] justify-between pr-4"
        >
          <input
            onChange={handleChange}
            className="ml-2 w-[90%] outline-none border-none bg-transparent focus:border-sky-100"
            type="text"
            placeholder="Search Products"
          />
          <input type="submit" className="hidden" id="submit" />{" "}
          <label htmlFor="submit">
            <i
              onClick={getResults}
              className="bx bx-search text-xl cursor-pointer mt-2"
            ></i>
          </label>
        </form>
      </div>
      <h2 className="text-center text-xl mt-3">Search Results</h2>
      <p
        className={`flex flex-col mx-auto text-center ${height} w-full mt-3 text-cyan-500`}
      >
        {noResults}
      </p>
    </>
  );
}

export default SearchForm