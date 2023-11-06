import { Link, useParams } from "react-router-dom";
import useAxiosNormal from "../../hooks/useAxiosNormal";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../authentication/AuthProvider";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ErrorPage from "../../componemts/ErrorPage";

const MainDetails = () => {
    const [isExits,setIsExits]=useState(false)
    const {user}=useContext(AuthContext)
    const {id}=useParams()
    const axiosNormal=useAxiosNormal()
   
    const details=async()=>{
          const res= await axiosNormal.get(`/details/${id}`)
          if(res.data?.email===user?.email){
            setIsExits(true)
         } 
          return res
    }

    const {data:blogDetails,isLoading,isError}=useQuery({
         queryKey:['details',id],
         queryFn: details 
    }) 
     
    if(isError){
        return <ErrorPage></ErrorPage>
    }
    if(isLoading){
        return <Skeleton count={10} />
  }
   if(blogDetails.data.error){
     return <ErrorPage></ErrorPage>
   }

        
       
    const { _id, title, category, url, shortDescription, currentTime,longDescription}=blogDetails.data ||{}

    return (
        <div className="max-w-[1600px] mx-auto">
            <h1 className="text-3xl font-black text-center mt-6 ">BLog Details </h1>
            <h1 className="border mb-16 mt-1"></h1>
             
            <div className="flex lg:flex-row flex-col gap-5 lg:p-0 p-5">
                <div className=" ">
                    <img className="md:w-[640px] md:h-[427px]" src={url} alt="" />
                </div>
                <div className="flex-1 ">
                     <div>
                     <div className="flex items-center  mb-2 gap-5">
                     <h1 className="text-xl font-medium">{title}</h1>
                     <p className="">{currentTime.slice(0,10)}</p>
                     </div>
                     <p className="text-lg mb-2">{shortDescription}</p>
                     <p className="text-lg font-semibold mb-3">Category: {category}</p>
                     <p className="text">{longDescription.slice(0,750)}</p>
                     </div>
                     <div>
                        <div className="mt-5 w-11/12">
                        <h1 className="text-lg font-semibold mb-2">Comment Here:</h1>
                        {
                            isExits ? <div>
                                <h1 className="text-2xl text-red-700">You can not comment Here</h1>
                              <button className="rounded-lg text-blue-400  p-2 mt-4 border "><Link to={`/update/${_id}`}>Update Blog</Link> </button>
                            </div> :  <div className="flex">
                            <input className="w-4/5 md:h-20 h-12 border  border-r-0  border-black" type="text" />
                            <button className="bg-[#11192BA8] text-white md:h-[80px] p-3  ">Submit</button>
                            </div>
                        }
                        </div>
                     </div>
                </div>
            </div>

        </div>
    );
};

export default MainDetails;