import axios from "axios"
import { useQuery, useQueryClient } from "react-query"

const fetchUser = ({queryKey}) => {
    const id = queryKey[1];
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
}

export const useUserData = (userId)=>{
    const queryClient = useQueryClient();
    return useQuery(['User',userId],fetchUser,{
        initialData: ()=>{
            const user = queryClient.getQueryData('Users')?.data?.find(user=>user.id === parseInt(userId));
            if(user){
                return { data: user }
            }
            else{
                return undefined;
            }
        }
    });
}