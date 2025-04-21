import { NavLink, Link } from 'react-router'
import cartImg from '../assets/cart_icon.png'
import { useNavigate } from 'react-router'

const Navbar = () => {

  const navigate = useNavigate();

  return(
    <header className="flex justify-between items-center py-4 shadow-lg px-20">
      <div onClick={() => navigate('/shop')} className="flex bg-amber-300 rounded-sm cursor-pointer">
        <span className="p-1 font-medium">BHARAT</span>
        <span className="bg-black text-white p-1 font-medium rounded-sm">COLLECTIONS</span>
      </div>
      <nav className="flex gap-5">
        <NavLink to={'/shop'} className={({isActive}) => (isActive ? 'border-b-2 border-b-pink-500 -translate-y-1.5 duration-300 pb-1' : '')}>Shop</NavLink>
        <NavLink to={'/men'} className={({isActive}) => (isActive ? 'border-b-2 border-b-pink-500 -translate-y-1.5 duration-300 pb-1' : '')}>Men</NavLink>
        <NavLink to={'/women'} className={({isActive}) => (isActive ? 'border-b-2 border-b-pink-500 -translate-y-1.5 duration-300 pb-1' : '')}>Women</NavLink>
        <NavLink to={'/kids'} className={({isActive}) => (isActive ? 'border-b-2 border-b-pink-500 -translate-y-1.5 duration-300 pb-1' : '')}>Kids</NavLink>
      </nav>
      <div className='flex gap-6 items-center'>
        <Link to={'/login'}>
          <button className='cursor-pointer py-2 px-4 border border-gray-500 rounded-xl'>Login</button>
        </Link>
        <Link to={'/cart'}>
          <div className='relative'>
            <img src={cartImg} className='w-5'/>
            <span className='bg-pink-500 text-white rounded-full absolute -right-1/2 -top-1/2 px-1 text-xs'>0</span>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Navbar