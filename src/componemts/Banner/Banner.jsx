import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className='relative max-w-[1800px] m-auto '>
        <div className='banner-main'>
          <div className='z-[1]'>
          <h1 className='lg:text-5xl  md:text-3xl text-xl font-bold text-white'>Welcome to our blog, your gateway to a world of <br /> </h1>
          <p className='lg:text-5xl  md:text-3xl text-xl font-bold text-white md:mt-4 mt-2'>knowledge, inspiration, and exploration.</p>
           
          </div>
           <div className='z-[1]  md:mt-8 mt-6 lg:mt-14'>
           <button  className='bg-[#11192BA8] text-white  p-4'><Link to='allBlog'>Go All BLogs</Link></button>
           </div>
    </div>
    </div>
    );
};

export default Banner;