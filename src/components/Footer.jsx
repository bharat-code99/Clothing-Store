import React from 'react'
import footerImg from '../assets/logo_big.png'
import instaImg from '../assets/instagram_icon.png'
import pintImg from '../assets/pintester_icon.png'
import whatsImg from '../assets/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='flex flex-col gap-6 items-center px-20 py-8 mt-20'>
      <div className='flex gap-8'>
        <img src={footerImg} />
        <h1 className='text-3xl text-gray-800 font-bold self-center'>Bharat Collections</h1>
      </div>
      <div className='space-x-4'>
        <a href="">Company</a>
        <a href="">Products</a>
        <a href="">Offices</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
      <div className='flex gap-4'>
        <img src={instaImg}/>
        <img src={pintImg}/>
        <img src={whatsImg}/>
      </div>
      <div className='border border-gray-400 w-full'></div>
      <div>
        <p>Copyright @ 2025 - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer