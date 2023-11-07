import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";

import useSecureAxios from "../../hooks/useSecureAxios";
import { useContext } from "react";
import { AuthContext } from "../../authentication/AuthProvider";
import SingleWish from "./SingleWish";


const Wishlist = () => {
       const axiosSecure=useSecureAxios()
       const {user}=useContext(AuthContext)
     const wishListFun=async()=>{
        const res=await  axiosSecure.get(`/wishList?email=${user?.email}`)
          return res
     }
     
     const {data:wishData,error ,isError,isLoading,refetch}=useQuery({
        queryKey:['wishlist'],
        queryFn: wishListFun
  }, )
      
     if(isLoading){
        return <Skeleton count={15} />
     }
   
    
     if(isError){
      return console.log(error)
     }
    return (
        <div >
            <div className="min-h-[60vh] mb-5">
                <h1 className="text-3xl font-semibold text-center md:mt-10 mt-5 mb-1 ">Your WishList ({wishData.data.length})</h1>
                <hr />
                <div className="max-w-[1500px] m-auto">
                    {
                        wishData?.data?.map(wish=><SingleWish key={wish._id} refetch={refetch} wish={wish}></SingleWish>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Wishlist;