import React, { useState } from 'react'
import brightStar from '../assets/star_icon.png'
import dullStar from '../assets/star_dull_icon.png'
import { useCart } from '../context/CartContext'
import { useNotification } from '../context/NotificationContext'

const ProductDisplay = (props) => {

  const {product} = props;
  const [selected, setSelected] = useState();
  const { addToCart } = useCart();
  const { showNotification } = useNotification();

  const handleSelected = (s) => {
    setSelected(s);
  }

  const handleAddToCart = () => {
    if (!selected) {
      showNotification('Please select a size');
      return;
    }
    addToCart(product, selected);
    showNotification(`${product.name} (Size: ${selected}) added to cart!`);
  }

  return (
  
    <div className='px-20 flex my-16'>
      {console.log(product)}
      <div className='product_left'>
        <img src={product.image} className=''/>
      </div>
      <div className='product_right flex flex-col gap-4 ml-20'>
        <h1 className='text-2xl text-gray-800 font-bold'>{product.name}</h1>
        <div className='flex gap-1'>
          <img src={brightStar} />
          <img src={brightStar} />
          <img src={brightStar} />
          <img src={brightStar} />
          <img src={dullStar} />
          <p>(122)</p>
        </div>
        <div className='text-xl font-bold space-x-2'>
          <span className='text-gray-500 line-through'>${product.old_price}</span>
          <span className='text-orange-400'>${product.new_price}</span>
        </div>
        <div className='w-[500px] text-gray-600'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo in reiciendis doloribus quod. Nostrum quo fugit itaque molestiae quae dolorem?
        </div>
        <div>
          <h1 className='font-bold'>Select Size</h1>
          <div className='flex gap-2'>
            <p onClick={() => handleSelected('S')} className={`p-1 border border-orange-400 rounded w-10 text-center ${selected === 'S' ? 'bg-orange-400 text-white' : 'text-orange-600'}`}>S</p>
            <p onClick={() => handleSelected('M')} className={`p-1 border border-orange-400 rounded w-10 text-center ${selected === 'M' ? 'bg-orange-400 text-white' : 'text-orange-600'}`}>M</p>
            <p onClick={() => handleSelected('L')} className={`p-1 border border-orange-400 rounded w-10 text-center ${selected === 'L' ? 'bg-orange-400 text-white' : 'text-orange-600'}`}>L</p>
            <p onClick={() => handleSelected('XL')} className={`p-1 border border-orange-400 rounded w-10 text-center ${selected === 'XL' ? 'bg-orange-400 text-white' : 'text-orange-600'}`}>XL</p>
            <p onClick={() => handleSelected('XXL')} className={`p-1 border border-orange-400 rounded w-10 text-center ${selected === 'XXL' ? 'bg-orange-400 text-white' : 'text-orange-600'}`}>XXL</p>
          </div>
        </div>
        <button 
          onClick={handleAddToCart}
          className='self-start px-4 py-2 text-white font-bold bg-orange-300 border-2 rounded-xl border-orange-500 cursor-pointer hover:bg-orange-400 transition-colors'
        >
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDisplay