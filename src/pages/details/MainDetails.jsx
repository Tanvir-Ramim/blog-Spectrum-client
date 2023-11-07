import {  useParams } from "react-router-dom";
import useAxiosNormal from "../../hooks/useAxiosNormal";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../authentication/AuthProvider";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ErrorPage from "../../componemts/ErrorPage";
import ReComment from "./ReComment";

const MainDetails = () => {
    const [isExits,setIsExits]=useState(false)
    const {user}=useContext(AuthContext)
    const {id}=useParams()
    const axiosNormal=useAxiosNormal()

    const details=async()=>{
           
          const res= await axiosNormal.get(`/details/${id}`)
          if( res?.data?.email===user?.email){
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
       
    

    return (
        <div className="max-w-[1600px] mx-auto">
            <h1 className="text-3xl font-black text-center mt-6 ">BLog Details </h1>
            <h1 className="border mb-16 mt-1"></h1>
            <ReComment blogDetails={blogDetails.data} isExits={isExits}></ReComment>

        </div>
    );
};

export default MainDetails;