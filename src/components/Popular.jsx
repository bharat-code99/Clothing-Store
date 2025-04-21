import React from 'react'
import Item from './Item'
import data_product from '../assets/data'

const Popular = () => {
  return (
    <div className='my-8'>
      <h1 className='text-center text-5xl text-gray-800 font-bold mb-8'>New Collections</h1>
      <div className='flex gap-8 flex-wrap justify-center'>
        {data_product.map((collection) => {
          return <Item key={collection.id} name={collection.name} image={collection.image} new={collection.new_price} old={collection.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular