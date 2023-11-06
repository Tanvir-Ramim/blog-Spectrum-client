import axios from "axios";
import useAxiosNormal from "../../hooks/useAxiosNormal";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import AllBlogInfo from "./AllBlogInfo";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";


const AllBlogs = () => {
    const axiosNormal=useAxiosNormal()
    const categoryRef=useRef(null)
    const searchRef=useRef(null)
    const [allBlogs,setAllBlogs]=useState([])


    const allBlog = async(info)=>{
      
    const res= await axiosNormal.get(`/allBlog`,)
    setAllBlogs(res)
    
      return res
    }
//
  const {data,error ,isError,isLoading,refetch,isSuccess}=useQuery({
        queryKey:['allBLog'],
        queryFn: allBlog
  }, )
     if(isLoading){
        return <Skeleton count={15} />
     }
     if(isError){
      return console.log(error)
     }
    

         const handleFilter=()=>{
          const info=categoryRef.current.value
            axiosNormal.get(`/allBlog?value=${info}`,)
           .then(res=>{
             setAllBlogs(res)
           })
         }
       const handleSearch=()=>{
           const info=searchRef.current.value 
           axiosNormal.get(`/search?value=${info}`,)
           .then(res=>{
            if(res.data.length==0){
               toast.error('data not found')
               return
            }
             setAllBlogs(res)
           })
       }
     return (
        
        <div className="md:mt-16 mt-8 max-w-[1600px] m-auto ">
            <div>
            <h1 className="text-3xl text-center font-semibold">All BLog Collection</h1>
        <hr className="mt-2"/>
            </div>
            <div className="flex md:flex-row flex-col  mt-4">
                <div className="flex-1 md:mb-0 mb-4 ">
                     <h1 className="text-xl font-semibold mb-1">Filter By:</h1>
                     <select onChange={handleFilter}  ref={categoryRef} name="category" className="select text-lg select-bordered join-item w-[400px] md:w-[225px] h-10 ">
                        <option  className="hidden"></option>
                    <option >Travel Adventures</option>
                    <option >Health and Wellness</option>
                    <option >Lifestyle and Fashion</option>
                    <option >Cooking and Recipes</option>
                </select>
                </div>
                <div className="flex-1 flex justify-end">
                     <div>
                     <h1 className="text-xl font-semibold md:text-right mb-1">Search Here</h1>
                    <div className="flex">
                    <input placeholder="search by title"  ref={searchRef} className="border rounded-l-md border-r-0 w-[350px] md:w-5/6 h-12 border-gray-400 " type="text" />
                     <button onClick={handleSearch} className="bg-slate-600 text-white rounded-r-md p-2">Search</button>
                    </div>
                     </div>
                </div>
            </div>
           <div className="flex justify-center" >
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-28 gap-x-5 lg:gap-y-12 md:gap-y-8 gap-y-4 lg:mt-8 mt-6">
           {  
                allBlogs?.data?.map(allBLogsInfo=>
                      <AllBlogInfo key={allBLogsInfo._id} allBLogsInfo={allBLogsInfo}></AllBlogInfo>
                )
            }
           </div>
           </div>

        </div>
    );
};

export default AllBlogs;