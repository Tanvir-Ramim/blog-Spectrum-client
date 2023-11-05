import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import AuthButton from './AuthButton';

const LayOut = ({children}) => {
     
    const navLink=<>
     <NavLink to='/' className={({ isActive }) =>
     isActive ? "text-xl font-semibold bg-[#11192BA8] text-white p-1" : "text-xl font-semibold p-1"
  }  >Home</NavLink> 
     <NavLink to='/allBlog' className={({ isActive }) =>
     isActive ? "text-xl font-semibold bg-[#11192BA8] text-white p-1" : "text-xl font-semibold p-1"
  }  >AllBlogs</NavLink> 
     <NavLink to='/featuredBlogs' className={({ isActive }) =>
     isActive ? "text-xl font-semibold bg-[#11192BA8] text-white p-1" : "text-xl font-semibold p-1"
  }  >FeaturedBlogs</NavLink> 
     <NavLink to='/wishList' className={({ isActive }) =>
     isActive ? "text-xl font-semibold bg-[#11192BA8] text-white p-1" : "text-xl font-semibold p-1"
  }  >WishList</NavLink> 
     <NavLink to='/addBlog' className={({ isActive }) =>
     isActive ? "text-xl font-semibold bg-[#11192BA8] text-white p-1" : "text-xl font-semibold p-1"
  }  >AddBlog</NavLink> 
    </>

    return (
        <div className="drawer max-w-[1800px] m-auto">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar py-10 md:flex-row flex flex-col ">
     <div className='flex-1'>
     <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className=" flex  px-2 mx-2  text-3xl font-semibold ">Blog<span className='ml-2'><img className='w-10 ' src="https://i.ibb.co/YyHwgt7/logo.png" alt="" /></span> <span className=' text-green-600 p-1'> Spectrum</span></div>
      
     </div>
      <div className='flex-1 justify-end '>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <div className='space-x-4'>
          {
            navLink
          }
          </div>
        </ul>
      </div>
        <AuthButton></AuthButton>
      </div>
    </div>
    {/* Page content here */}
     {
         children
     }
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 space-y-4">
      {/* Sidebar content here */}
     {navLink}
    </ul>
  </div>
</div>
    );
};

LayOut.propTypes={
    children: PropTypes.node
}
export default LayOut;
