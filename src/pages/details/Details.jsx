import { useParams } from "react-router-dom";
import useAxiosNormal from "../../hooks/useAxiosNormal";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authentication/AuthProvider";


const Details = () => {
    const [isExits,setIsExits]=useState(false)
    const {user}=useContext(AuthContext)
    const {id}=useParams()
    const axiosNormal=useAxiosNormal()
   
    const details=async()=>{
          const res= await axiosNormal.get(`/details/${id}`)
          setIsExits(false)
          return res
    }

    const {data,isLoading}=useQuery({
         queryKey:['details'],
         queryFn: details 
    }) 
    useEffect(()=>{
        
         if(data?.data?.email===user?.email){
            setIsExits(true)
         }     
    },[data?.data?.email,user?.email])
    if(isLoading){
          return <h2>ppppppppppppppp</h2>
    }
        
       



    return (
        <div>
            {
                isExits && <h1>ais ra</h1>
            }
        </div>
    );
};

export default Details;