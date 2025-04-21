import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col gap-4 py-8 w-10/12 mx-auto bg-linear-to-b from-pink-200 to-white'>
      <h1 className='text-4xl font-bold text-center'>Get Exclusive Offers On Your Mail</h1>
      <p className='text-2xl text-center'>Subscribe to our newsletter and stay updated</p>
      <div className='border border-gray-300 rounded-full mx-auto overflow-hidden'>
        <input type="text" placeholder='Your Email Id' className='focus:outline-none px-4 py-2'/>
        <button className='bg-black text-white px-4 py-2'>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter