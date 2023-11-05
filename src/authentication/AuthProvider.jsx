
import PropTypes from 'prop-types';
import { createContext } from "react";
import { useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import auth from "./firebase.config";
import { useEffect } from "react";



const googleProvider=new GoogleAuthProvider()
const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
     const [user,setUser]= useState(null)
     const [loader,setLoader]=useState(true)

     
     const createUser=(email,password)=>{
        setLoader(true)
         return createUserWithEmailAndPassword(auth,email,password)
     }
     const userLogIn=(email,password)=>{
        setLoader(true)
         return createUserWithEmailAndPassword(auth,email,password)
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
            setUser(currentUser)
            setLoader(false)
      })
      return()=>{
         unSubscriber
      }
    },[])

     const info={
          user,
          loader,
          userLogIn,
          createUser,
          userLogOut,
          googleLogIn
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