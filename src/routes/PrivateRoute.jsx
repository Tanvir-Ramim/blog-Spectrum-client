import { useContext } from "react";
import { AuthContext } from "../authentication/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(AuthContext)
    if(loader)
    {
        return <div className="w-10 m-auto"><span className="loading loading-spinner loading-lg "></span></div>
    }
    if(user){
        return children
  }
  return <Navigate  to={'/logIn'}></Navigate>
};

export default PrivateRoute;