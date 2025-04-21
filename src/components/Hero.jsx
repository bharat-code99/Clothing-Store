import handIcon from '../assets/hand_icon.png'
import heroImg from '../assets/hero_image.png'

const Hero = () => {

  return (
    <div className='flex items-center justify-center px-20 gap-20 bg-linear-to-b from-pink-200 to-white '>
      <div className='w-sm flex flex-col gap-4'>
        <h1 className='text-2xl font-semibold'>NEW ARRIVALS ONLY</h1>
        <div className='text-6xl font-bold flex gap-3 items-center'>
          <p>new</p>
          <img src={handIcon} className='w-20'/>
        </div>
        <div className='text-6xl font-bold'>collections</div>
        <div className='text-6xl font-bold'>for everyone</div>
      </div>
      <div className=''>
        <img src={heroImg} className='h-[550px]'/>
      </div>
    </div>
  )
}

export default Hero;