import { useContext } from "react";
import { AuthContext } from "../authentication/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(AuthContext)
     const location=useLocation()
    if(loader)
    {
        return <div className="w-10 m-auto"><span className="loading loading-spinner loading-lg "></span></div>
    }
    if(user){
        return children
  }
  return <Navigate state={location.pathname} to={'/logIn'}></Navigate>
};

export default PrivateRoute;