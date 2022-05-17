import React from 'react'
import { FaAmazon,FaApplePay, FaCcMastercard
,FaCcPaypal, FaCcVisa } from 'react-icons/fa'

function Partners() {
  return (
    <div className='flex flex-col mt-6 w-full p-3'>
        <h1 className="text-2xl text-center font-semibold">Partners</h1>
        <div className="flex j4 items-center justify-between mt-[10vh] w-full">
          <FaAmazon className='text-[10em] p-3' />
          <FaApplePay className='text-[10em] p-3' />
          <FaCcMastercard className='text-[10em] p-3' />
          <FaCcVisa className='text-[10em] p-3' />
          <FaCcPaypal className='text-[10em] p-3' />
        </div>
    </div>
  )
}

export default Partners