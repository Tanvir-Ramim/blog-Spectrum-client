import { useQuery } from "@tanstack/react-query";

import useAxiosNormal from "../../hooks/useAxiosNormal";
import BlogCards from "./BlogCards";


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
       if(isLoading){
          return <h1>sdfds</h1>
       }
       if(isError){
        return console.log(error)
       }
    return (
        <div className="md:mt-16 mt-8 max-w-[1600px] m-auto ">
            <div>
                <h1 className="text-center text-5xl font-semibold">Recent Blog Here</h1>
            </div>
           <div className="flex justify-center" >
           <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-x-28 gap-x-5 lg:gap-y-12 md:gap-y-8 gap-y-4 lg:mt-8 mt-6">
           {
                 recentBlog?.data.map(blogInfo=>
                     <BlogCards key={blogInfo._id} blogInfo={blogInfo}> </BlogCards>
                 )       
            }
           </div>
           </div>

        </div>
    );
};

export default RecentAdd;