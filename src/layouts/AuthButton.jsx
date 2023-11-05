import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authentication/AuthProvider";
import auth from "../authentication/firebase.config";


const AuthButton = () => {
     const {user,userLogOut}=useContext(AuthContext)
    
     const handleLogOut=()=>{
        userLogOut(auth)
     }
         return (
        <div className=" cursor-pointer md:ml-8 md:mt-0 mt-4 bg-[#11192BA8] text-white text-xl rounded-3xl hover:bg-black ">
             {
                user? <div className="flex gap-3 items-center py-2 px-6 relative group">
                    
                    <img className="w-12 h-12 rounded-full " src={user.photoURL} alt="" />
                     <h1>{user.displayName}</h1>
                     <button onClick={handleLogOut} className="bg-[#11192BA8] text-white py-2 px-4 rounded absolute top-16 right-24 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                    LogOut
                 </button>
                </div> 
                :<Link to='/logIn'><button className="md:px-20 px-16 md:py-5 py-3"> Create An Account</button></Link>
             }
        </div>
    );
};

export default AuthButton;