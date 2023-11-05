import { useQuery } from "@tanstack/react-query";

import useAxiosNormal from "../../hooks/useAxiosNormal";
import { useState } from "react";


const RecentAdd = () => {
    
       const axiosNormal=useAxiosNormal()


      const reactAdd = async()=>{
      const res= await axiosNormal.get('/recentBlog')
        return res
      }

    const {data:recentBlog,error ,isError,isLoading}=useQuery({
          queryKey:['recent'],
          queryFn: reactAdd
    })
   
    console.log(recentBlog)

    return (
        <div>
            
        </div>
    );
};

export default RecentAdd;