import axios from 'axios';

const axiosNormal=axios.create({
      baseURL:'https://blog-spectrum-server.vercel.app'
})

const useAxiosNormal = () => {
    return  axiosNormal
};

export default useAxiosNormal;