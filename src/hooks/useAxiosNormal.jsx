import axios from 'axios';

const axiosNormal=axios.create({
      baseURL:'https://blog-spectrum-server-6enytn5ke-tanvir-ramim-831d6510.vercel.app'
})

const useAxiosNormal = () => {
    return  axiosNormal
};

export default useAxiosNormal;