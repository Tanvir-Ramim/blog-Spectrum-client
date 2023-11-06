import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../authentication/AuthProvider";
import toast from "react-hot-toast";


const AddBlog = () => {
    const {user}=useContext(AuthContext)
    const handleAddBlog=(e)=>{
          e.preventDefault()
          const form= e.target 
          const title=form.title.value 
          const category=form.category.value 
          const shortDescription=form.shortDescription.value 
          const url=form.photo.value 
          const longDescription=form.longDescription.value 
          const email=user.email
          const UserPhoto=user.photoURL
          const userName=user.displayName
          const postInfo={
            title,category,url,longDescription,shortDescription,email,UserPhoto,userName
          }
          
      
          axios.post('http://localhost:5000/addBlog',postInfo)
          .then(res=>{
               if(res.data.acknowledged){
                 toast.success('Successfully Post')
                 form.reset()
               }
          
          })
          .catch(error=>{
             console.log(error)
          })

    }
    return (
        <div className="bg-[#11192BA8] py-20  p-1 md:p-24  max-w-[1800px] m-auto rounded-xl">
        <h2 className="text-3xl font-extrabold text-center md:mb-16 mb-8 mt-5 md:mt-10">Add Blog</h2>
        <form  onSubmit={handleAddBlog} >
            <div className="md:flex md:mb-5">
                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text text-xl text-white">Title</span>
                    </label>
                    <label className="input-group  ">
                        <input type="text" name="title" placeholder="Title" className="input w-[400px] h-16  input-bordered  text-lg " />
                    </label>
                </div>
                
                <div className="form-control  md:w-full md:ml-4">
                <label className="label">
                        <span className="label-text text-xl text-white">Select Category</span>
                    </label>
                <select defaultValue='Phone' name="category" className="select text-lg select-bordered join-item w-[400px] h-16 ">
                    <option value="Travel Adventures">Travel Adventures</option>
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
                        <input type="text" name="shortDescription" placeholder="text...." className="input input-bordered  w-[400px] h-16 text-lg  " />
                    </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                        <span className="label-text text-xl text-white">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-[400px] h-16 text-lg" />
                    </label>
                </div>
            </div>
            <div className=" mb-8">
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text  text-xl text-white">Long Description</span>
                    </label>
                    <label className="input-group">
                        <textarea className="w-full text-lg" name="longDescription" id="" cols="" rows="7"></textarea>
                    </label>
                </div>
            </div>
            <input type="submit" value="Post Blog" className="btn btn-neutral w-full " />
        </form>
    </div>
    );
};

export default AddBlog;