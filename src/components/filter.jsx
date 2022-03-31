import React, {useEffect} from 'react'

const Filter = (props) => {
    const { products, filter, setFilter, /*category, */setCategory} = props;

    const filterHandler = () =>{
        setFilter(products.filter((pro)=> pro.category === filter.category))
    }
    // useEffect(()=>{
    //     filterHandler();
    // },)
    // useEffect(()=>{
    //     if(category === 'all'){
    //         setFilter(products);
    //         return
    //     }
    //     const filtered = products.filter((pro)=> pro.category.includes(category))
    //     setFilter(filtered)
    // },[category])
  return (
    <div className='w-full flex justify-center'>
         <form className="search bg-slate-100 rounded-3xl mt-4 p-2 flex items-center w-[30%] justify-between pr-4">
            <input
              className="ml-2 w-[90%] outline-none border-none bg-transparent focus:border-sky-100"
              type="text"
              placeholder="Search Products"
            />
            <input type="submit" className="hidden" id="submit" />{" "}
            <label htmlFor="submit">
              <i className="bx bx-search text-xl cursor-pointer mt-2"></i>
            </label>
          </form>
          <div className="flex items-center">
              <p onClick={filterHandler} className='ml-7 mt-3 cursor-pointer'>All</p>
              <p onClick={()=> setCategory('home')}  className='ml-7 mt-3 cursor-pointer'>Home equipments</p>
              <p onClick={()=> setCategory('phones')}  className='ml-7 mt-3 cursor-pointer'>Phones</p>
              <p onClick={()=> setCategory('pcs')}  className='ml-7 mt-3 cursor-pointer'>Computers</p>
              <p onClick={()=> setCategory('others')}  className='ml-7 mt-3 cursor-pointer'>Others</p>
          </div>
    </div>
  )
}

export default Filter