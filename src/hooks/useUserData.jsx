import axios from "axios"
import { useQuery } from "react-query"

const fetchUser = ({queryKey}) => {
    const id = queryKey[1];
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
}

export const useUserData = (userId)=>{
    console.log(userId);
    return useQuery(['User',userId],fetchUser);
}