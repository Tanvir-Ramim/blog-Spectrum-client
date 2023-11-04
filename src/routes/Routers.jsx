import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../pages/home/Home";
import AddBlog from "../pages/addBlogs/AddBlog";
import AllBlogs from "../pages/allBlogs/AllBlogs";
import FeaturedBlogs from "../pages/featuredBlogs/FeaturedBlogs";
import Wishlist from "../pages/wishlist/Wishlist";


const Routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
        {
              index: true,
             element:<Home></Home>
        },
        {
            path: 'allBlog',
            element:<AllBlogs></AllBlogs>
        },
        {
            path: 'featuredBlogs',
            element:<FeaturedBlogs></FeaturedBlogs>
        },
        {
            path: 'wishList',
            element:<Wishlist></Wishlist>
        },
        {
             path: 'addBlog',
             element:<AddBlog></AddBlog>
        },
      ]
    },
  ]);

export default Routers;