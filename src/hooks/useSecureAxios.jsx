
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../authentication/AuthProvider';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
});
const useSecureAxios = () => {
       const {userLogOut}=useContext(AuthContext)
       const navigate=useNavigate()
       useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res
       },error=>{
          console.log(error.response.status)
            if(error.response?.status===401 || error.response.status===403)
            {
              userLogOut()
              .then(() =>{
               navigate('/logIn')
              })
              .catch( error => console.log(error))
            }
       })
       },[])




    return axiosSecure

};

export default useSecureAxios;