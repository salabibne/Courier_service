import axios from "axios";

const publicUrl = axios.create({
    baseURL:"http://localhost:5000"
})

const usePublicUrl = () => {

    return publicUrl
};

export default usePublicUrl;