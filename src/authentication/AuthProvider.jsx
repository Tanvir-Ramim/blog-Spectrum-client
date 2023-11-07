
import PropTypes from 'prop-types';
import { createContext } from "react";
import { useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "./firebase.config";
import { useEffect } from "react";
import useAxiosNormal from '../hooks/useAxiosNormal';





const googleProvider=new GoogleAuthProvider()
export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    //  const axiosSecure=useSecureAxios()
      const axiosNormal=useAxiosNormal()
     const [user,setUser]= useState(null)
     const [loader,setLoader]=useState(true)

     
     const createUser=(email,password)=>{
        setLoader(true)
         return createUserWithEmailAndPassword(auth,email,password)
     }
     const userLogIn=(email,password)=>{
        setLoader(true)
         return signInWithEmailAndPassword(auth,email,password)
     }

    const userLogOut=()=>{
        setLoader(true)
         return signOut(auth)
    }

    const googleLogIn=()=>{
        setLoader(true)
          return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
        const unSubscriber= onAuthStateChanged(auth,currentUser=>{
            const userEmail=currentUser?.email||user?.email
            const loggedUser={email:userEmail}
            setUser(currentUser)
            console.log(currentUser)
            
            setLoader(false)

            if(currentUser){
               axiosNormal.post('/jwt',loggedUser,{withCredentials:true})
               .then(res=>{
               })
            }
            else{
                axiosNormal.post('/jwtRemove',loggedUser,{
                    withCredentials:true
                })
                // .then(res=>{
                //       console.log(res.data)
                // })
            }
      })
      return()=>{
         return unSubscriber ()
      }
    },[])

     const info={
          user,
          loader,
          userLogIn,
          createUser,
          userLogOut,
          googleLogIn,setUser
     }
        
        
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes={
    children:PropTypes.node
}
export default AuthProvider;