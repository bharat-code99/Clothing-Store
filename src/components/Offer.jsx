import React from 'react'
import offerImg from '../assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className='flex justify-between px-8 bg-linear-to-b from-pink-200 to-white w-10/12 mx-auto my-8'>
      <div className='space-y-4 self-center'>
        <h1 className='text-5xl font-bold'>Exclusive</h1>
        <h1 className='text-4xl font-bold'>Offers For You</h1>
        <h1 className='text-3xl font-bold'>ONLY ON BEST SELLER PRODUCTS</h1>
        <button className='px-4 py-2 rounded bg-red-400 text-white'>Check Now</button>
      </div>
      <div>
        <img src={offerImg}/>
      </div>
    </div>
  )
}

export default Offer