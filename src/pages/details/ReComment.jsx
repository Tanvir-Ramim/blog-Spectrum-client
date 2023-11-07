import { useContext, useRef } from "react";
import { AuthContext } from "../../authentication/AuthProvider";
import 'react-loading-skeleton/dist/skeleton.css'
import toast from "react-hot-toast";
import useAxiosNormal from "../../hooks/useAxiosNormal";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import CommentCard from "./CommentCard";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";

const ReComment = ({blogDetails,isExits}) => {
    const {user}=useContext(AuthContext)
  
    const axiosNormal=useAxiosNormal()
    const commentRef=useRef()

    const { _id, title, category, url, shortDescription, currentTime,longDescription
    }=blogDetails||{}
console.log(blogDetails)

const getComment=async()=>{
     const res=await axiosNormal.get(`/comment?oldId=${_id}`)
        return res
}

const{data,isLoading ,isError,refetch}=useQuery({
 queryKey:['comment'],
  queryFn: getComment
})
 if(isError){
    return <ErrorPage></ErrorPage>
}
if(isLoading){
    return <Skeleton count={10} />
}
  

const handleComment=()=>{
     const comment=commentRef.current.value 
      const logUserPhoto=user.photoURL
      const logUser=user.displayName
     const oldId=_id
     const commentInfo={
        comment,
        oldId,logUserPhoto,logUser
     }
     axiosNormal.post('/comment',commentInfo)
     .then(res=>{
        if(res?.data.empty==3){
          return  toast.error("Text Something In Comment Box")
        }
        if(res.data.acknowledged){
             refetch()
             commentRef.current.value=""
             toast.success('Comment Success')
        }
     })
}

    
    return (
        <div>
        <div className="flex lg:flex-row flex-col gap-5 lg:p-0 p-5">
             <div className=" ">
                 <img className="md:w-[640px] md:h-[427px]" src={url} alt="" />
             </div>
             <div className="flex-1 ">
               <div>
                  <div className="flex items-center  mb-2 gap-5">
                  <h1 className="text-xl font-medium">{title}</h1>
                  <p className="">{currentTime?.slice(0,10)}</p>
                  </div>
                  <p className="text-lg mb-2">{shortDescription}</p>
                  <p className="text-lg font-semibold mb-3">Category: {category}</p>
                  <p className="text">{longDescription?.slice(0,750)}</p>
                  </div>
                  <div>
                     <div className="mt-5 w-11/12">
                     <h1 className="text-lg font-semibold mb-2">Comment Here:</h1>
                     {
                         isExits ? <div>
                             <h1 className="text-2xl text-red-700">You can not comment Here</h1>
                           <button className="rounded-lg text-blue-400  p-2 mt-4 border "><Link to={`/update/${_id}`}>Update Blog</Link> </button>
                         </div> :  <div className="flex">
                         <input ref={commentRef} className="w-4/5 md:h-20 h-12 border  border-r-0  border-black" type="text" />
                         <button onClick={handleComment} className="bg-[#11192BA8] text-white md:h-[80px] p-3  ">Submit</button>
                         </div>
                     }
                     </div>
                  </div>
             </div>
         </div>
         <div className="lg:mt-12 mt-5">
             <hr />
             <h1 className="text-2xl font-semibold mt-3 mb-6 md:mt-5">See All Comment Here:</h1>
             <div>
             <div className="">
                 {
                    data?.data?.map(item=><CommentCard key={item._id} item={item}></CommentCard>)
                 }
            </div>
             </div>
         </div>
        </div>
    );
};

ReComment.propTypes={
    isExits:PropTypes.bool,
    blogDetails:PropTypes.object
}

export default ReComment;