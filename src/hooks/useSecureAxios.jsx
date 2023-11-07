
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import{AuthContext} from '../authentication/AuthProvider'
import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: 'https://car-doctor-server-topaz-one.vercel.app',
    withCredentials: true
});
const useSecureAxios = () => {
       const navigate=useNavigate()
       const {user}= useContext(AuthContext)
       console.log(user)
       useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res
       },error=>{
          console.log(error.response.status)
            if(error.response?.status===401 || error.response.status===403)

            {
                console.log('logout')
              logOut()
              .then(() =>{
               navigate('/login')
              })
              .catch( error => console.log(error))
            }
       })
       },[])




    return axiosSecure

};

export default useSecureAxios;