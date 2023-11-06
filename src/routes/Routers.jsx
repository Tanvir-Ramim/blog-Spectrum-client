import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layouts/MainLayOut";
import Home from "../pages/home/Home";
import AddBlog from "../pages/addBlogs/AddBlog";
import AllBlogs from "../pages/allBlogs/AllBlogs";
import FeaturedBlogs from "../pages/featuredBlogs/FeaturedBlogs";
import Wishlist from "../pages/wishlist/Wishlist";
import Register from "../authentication/Register";
import LogIn from "../authentication/LogIn";
import MainDetails from "../pages/details/MainDetails";
import ErrorPage from "../componemts/ErrorPage";
import UpdateBlog from "../pages/UpdateBlog";


const Routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement:<ErrorPage></ErrorPage>,
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
        {
          path:'register',
          element: <Register></Register>
        },
        {
          path:'logIn',
          element: <LogIn></LogIn>
        },
        {
          path:'details/:id',
          element:<MainDetails></MainDetails>
        },
        {
           path:'update/:id',
           element:<UpdateBlog></UpdateBlog>
        }
      ]
    },
  ]);

export default Routers;