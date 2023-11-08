import { useNavigate, useParams } from "react-router-dom";
import useAxiosNormal from "../hooks/useAxiosNormal";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import toast from "react-hot-toast";


const UpdateBlog =  () => {
    const {id}=useParams()
    const axiosN=useAxiosNormal()
    const navigate=useNavigate()
    const updateFun= async()=>{
       const res = await axiosN.get(`/details/${id}`)
          return res
    }
     const {data:OldInfo, isError, isLoading,refetch}=useQuery({
         queryKey: ['update',id],
         queryFn: updateFun
     })
     if(isError){
        return <ErrorPage></ErrorPage>
    }
    if(isLoading){
        return <Skeleton count={5} />
  }
   if(OldInfo.data.error){
     return <ErrorPage></ErrorPage>
   }
     const {  title, category, url, shortDescription,longDescription}=OldInfo.data ||{}
     
      const handleUpdate=(e)=>{
        e.preventDefault()
        const form= e.target 
        const titleNew=form.title.value 
        const categoryNew=form.category.value 
        const shortDescriptionNew=form.shortDescription.value 
        const urlNew=form.photo.value 
        const longDescriptionNew=form.longDescription.value 
        const UpdateInfo={titleNew,categoryNew,shortDescriptionNew,urlNew,longDescriptionNew,id}
        axiosN.put('/updateInfo',UpdateInfo)
        .then(res=>{
            if(res.data.matchedCount){
                refetch()
                toast.success('SuccessFully Updated')
                navigate(-1)
            }
        })
        
      }
     
    return (
        <div className="max-w-[1000px] mb-5 m-auto">
              <div className="bg-[#11192BA8] py-20  p-1 md:p-24  max-w-[1800px] m-auto rounded-xl">
        <h2 className="text-3xl font-extrabold text-center md:mb-16 mb-8 mt-5 md:mt-10">Update Your Blog</h2>
        <form  onSubmit={handleUpdate}  >
            <div className="md:flex md:mb-5">
                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text text-xl text-white">Title</span>
                    </label>
                    <label className="input-group  ">
                        <input defaultValue={title} type="text" name="title" placeholder="Title" className="input w-[400px] h-16  input-bordered  text-lg " />
                    </label>
                </div>
                
                <div className="form-control  md:w-full md:ml-4">
                <label className="label">
                        <span className="label-text text-xl text-white">Select Category</span>
                    </label>
                <select defaultValue={category} name="category" className="select text-lg select-bordered join-item w-[400px] h-16 ">
                    <option >Travel Adventures</option>
                    <option >Health and Wellness</option>
                    <option >Lifestyle and Fashion</option>
                    <option >Cooking and Recipes</option>
                </select>
                </div>
            </div>
            <div className="md:flex md:mb-8">
               
                <div className="form-control md:w-1/2 ">
                    <label className="label">
                        <span className="label-text text-xl text-white ">Short Description</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={shortDescription} type="text" name="shortDescription" placeholder="text...." className="input input-bordered  w-[400px] h-16 text-lg  " />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                        <span className="label-text text-xl text-white">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={url} type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-[400px] h-16 text-lg" />
                    </label>
                </div>
            </div>
            <div className=" mb-8">
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text  text-xl text-white">Long Description</span>
                    </label>
                    <label className="input-group">
                        <textarea defaultValue={longDescription} className="w-full text-lg" name="longDescription" id="" cols="" rows="7"></textarea>
                    </label>
                </div>
            </div>
            <input type="submit" value="Update Blog" className="btn btn-neutral w-full " />
        </form>
    </div>
        </div>
    );
};

export default UpdateBlog;