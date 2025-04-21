import React from 'react'

const Item = (props) => {
  return (
    <div className='w-[284px] p-4 rounded-xl border-gray-300 border hover:shadow-xl hover:cursor-pointer duration-300'>
      <img src={props.image} className='h-[300px] rounded-xl'/>
      <p className='my-4'>{props.name}</p>
      <div className='space-x-2'>
        <span>${props.new}</span>
        <span className='text-gray-500 line-through'>${props.old}</span>
      </div>
    </div>
  )
}

export default Item