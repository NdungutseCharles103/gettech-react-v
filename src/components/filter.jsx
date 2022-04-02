import React, {useEffect} from 'react'

const Filter = (props) => {
    const { products, setFilter,category, setCategory} = props;

    useEffect(()=>{
        if(category === 'all'){
            setFilter(products);
            return
        }
        const filtered = products.filter((pro)=> pro.category.includes(category))
        setFilter(filtered)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[category])
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
              <p onClick={()=> setCategory('all')} className='ml-7 py-2 hover:text-blue-600 duration-300 mt-3 cursor-pointer'>All</p>
              <p onClick={()=> setCategory('home')}  className='ml-7 py-2 hover:text-blue-600 duration-300 mt-3 cursor-pointer'>Home equipments</p>
              <p onClick={()=> setCategory('Phones')}  className='ml-7 py-2 hover:text-blue-600 duration-300 mt-3 cursor-pointer'>Phones</p>
              <p onClick={()=> setCategory('Pcs')}  className='ml-7 py-2 hover:text-blue-600 duration-300 mt-3 cursor-pointer'>Computers</p>
              <p onClick={()=> setCategory('gaming')}  className='ml-7 py-2 hover:text-blue-600 duration-300 mt-3 cursor-pointer'>Gaming</p>
              <p onClick={()=> setCategory('others')}  className='ml-7 py-2 hover:text-blue-600 duration-300 mt-3 cursor-pointer'>Others</p>
          </div>
    </div>
  )
}

export default Filter