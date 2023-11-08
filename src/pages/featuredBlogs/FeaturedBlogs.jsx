import { useQuery } from "@tanstack/react-query";
import useAxiosNormal from "../../hooks/useAxiosNormal";
import Skeleton from "react-loading-skeleton";


const FeaturedBlogs = () => {
    
    const axiosNormal=useAxiosNormal()
    const featuredBlogs = async()=>{
        const res= await axiosNormal.get('/topBlog')
          return res
        }
        const {data:topBlogs,error ,isError,isLoading}=useQuery({
            queryKey:['recent'],
            queryFn: featuredBlogs
      })
         if(isLoading){
            return <Skeleton count={5} />
         }
         if(isError){
          return console.log(error)
         }


    return (
    <div className=" min-h-[70vh] container mx-auto">
         <div>
         <div className="">
            <h1 className="text-3xl md:ml-0 ml-2 font-semibold  mt-5">Top 5 Featured Blog  </h1>
            <hr  className="mb-8  md:ml-0 ml-2  mt-1 w-64" />
          </div>
            <div className="overflow-x-auto ">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
                <th className="text-base">No</th>
              <th className="text-base">Name</th>
              <th className="text-base">Title</th>
              <th className="text-base">Category</th>
            </tr>
          </thead>
          <tbody>
              {
                topBlogs?.data?.map((item,indx)=>{
                   return  <tr key={indx}>
                    <td >{indx}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={item.UserPhoto} alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.userName}</div>
                          
                        </div>
                      </div>
                    </td>
                    <td>
                     {item.title}
                    </td>
                    <td>{item.category}</td>
                  </tr>
                })
              }
          </tbody>
        </table>
      </div>
         </div>
    </div>
    );
};

export default FeaturedBlogs;