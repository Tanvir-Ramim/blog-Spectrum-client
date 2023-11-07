import PropTypes from 'prop-types';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
// import { Link } from 'react-router-dom';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosNormal from '../../hooks/useAxiosNormal';


const SingleWish = ({wish,refetch}) => {
       const axiosNormal=useAxiosNormal()
       const{_id,title,shortDescription,category,url,oldId}=wish||{}
       
      const handleDelete=()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             
              axiosNormal.delete(`/deleteWish/${_id}`)
              .then(res=>{
                 if(res?.data.deletedCount==1){
                       Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              }); 
              refetch()
                 }
              })
            }
          });
      }

    console.log(wish)
    return (
        <div className=' md:p-2 p-4'>
             <div className='md:mt-6 mt-8 border bg-gray-100 '>
            <div className='flex md:flex-row flex-col md:gap-10'>
              <div>
              <PhotoProvider >
                <PhotoView src={url}>
                 <img className='md:max-h-60 md:max-w-xs' src={url} alt="" />
                </PhotoView>
              </PhotoProvider>
              </div>
                <div className='px-2'>
                    <h3 className='mt-4 text-xl font-semibold'>{title}</h3>
                    <p className='mt-2 text-lg font-normal'>Description:    {shortDescription}</p>
                    <h4 className='mt-2 text-lg font-normal'><span className='font-semibold'>Category</span> : {category}</h4>
                    <button className='mt-3 '><Link to={`/details/${oldId}`} className='underline  text-lg font-medium'>Go Details</Link></button>
                </div>
            </div>
            <div className=' flex items-center '>
                <div className='flex w-full   md:justify-end justify-center cursor-pointer bg-[#26324ea8]'>
                    <div className='flex gap-2'><h1 className='font-semibold'>Remove</h1>
                    <button onClick={handleDelete} className='md:mr-1 '><RiDeleteBin5Line></RiDeleteBin5Line></button></div>
                </div>
            </div>
        </div>
        </div>
    );
};

SingleWish.propTypes={
     wish:PropTypes.object.isRequired,
     refetch:PropTypes.func
}
export default SingleWish;