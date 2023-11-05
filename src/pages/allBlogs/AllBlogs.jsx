import axios from "axios";


const AllBlogs = () => {
    const handle=()=>{
         axios.get('http://localhost:5000/recentBlog')
         .then(res=>{
              console.log(res)
         })
    }
    return (
        <div>
            <button onClick={handle} >recent</button>
        </div>
    );
};

export default AllBlogs;