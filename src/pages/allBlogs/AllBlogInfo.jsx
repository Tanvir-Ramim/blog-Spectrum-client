import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdBookmarkAdd } from 'react-icons/md';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const AllBlogInfo = ({allBLogsInfo}) => {

    const { _id, title, category, url, shortDescription, UserPhoto, currentTime } = allBLogsInfo || {}



    return (
        <div className='mt-5 max-w-[400px] h-[510px] border bg-gray-100 '>
            
            <div>
              
              <PhotoProvider >
                <PhotoView src={url}>
                 <img src={url} alt="" />
                </PhotoView>
              </PhotoProvider>
                <div className='px-2'>
                    <h3 className='mt-4 text-lg font-semibold'>{title}</h3>
                    <p className='mt-2 text-lg font-normal'>{shortDescription.slice(0, 120)}....<span className='font-bold text-base'><Link to={`/details/${_id}`}>More Details</Link></span></p>
                    <h4 className='mt-2 text-lg font-normal'><span className='font-semibold'>Category</span> : {category}</h4>
                </div>
            </div>
            <div className='mt-4 px-2  flex  items-center gap-3'>
                <img className='w-10 h-10 rounded-full' src={UserPhoto} alt="" />
                <h1 className='font-bold text-lg'>{currentTime.slice(0, 10)}</h1>
                <h1 className='flex w-1/2  justify-end cursor-pointer    hover:'><MdBookmarkAdd className='text-3xl'></MdBookmarkAdd></h1>
            </div>
        </div>
    );
};
AllBlogInfo.propTypes = {
    allBLogsInfo: PropTypes.object.isRequired
}
export default AllBlogInfo;