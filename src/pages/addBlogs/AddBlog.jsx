

const AddBlog = () => {
    return (
        <div className="bg-[#11192BA8] py-20  p-1 md:p-24  max-w-[1800px] m-auto rounded-xl">
        <h2 className="text-3xl font-extrabold text-center md:mb-16 mb-8 mt-5 md:mt-10">Add Blog</h2>
        <form  >
            <div className="md:flex md:mb-5">
                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text text-xl text-white">Title</span>
                    </label>
                    <label className="input-group  ">
                        <input type="text" name="deviceName" placeholder="Title" className="input w-[400px] h-16  input-bordered  text-lg " />
                    </label>
                </div>
                
                <div className="form-control  md:w-full md:ml-4">
                <label className="label">
                        <span className="label-text text-xl text-white">Select Category</span>
                    </label>
                <select defaultValue='Phone' name="category" className="select text-lg select-bordered join-item w-[400px] h-16 ">
                    <option value="Phone">Phone</option>
                    <option >Watch</option>
                    <option >Headphone</option>
                    <option >Laptop</option>
                    <option >Smart TV</option>
                </select>
                </div>
            </div>


            <div className="md:flex md:mb-8">
               
                <div className="form-control md:w-1/2 ">
                    <label className="label">
                        <span className="label-text text-xl text-white ">Short Description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" placeholder="text...." className="input input-bordered  w-[400px] h-16 text-lg  " />
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
                        <textarea className="w-full text-lg" name="" id="" cols="" rows="7"></textarea>
                    </label>
                </div>
               
            </div>
            <input type="submit" value="Add Product" className="btn btn-neutral w-full " />
        </form>

    </div>

    );
};

export default AddBlog;