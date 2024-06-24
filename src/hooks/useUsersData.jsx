import axios from "axios"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { request } from "../utils/axios-utils"

const fetchUsers = () => {
    return request({url:'/users'})
    // return axios.get('https://jsonplaceholder.typicode.com/users')
}

export const useUsersData = (onSuccess, onError) => {
    return useQuery('Users', fetchUsers,{
        onSuccess,
        onError,
        // select:(data)=>{
        //     const users = data.data.map(user=> user.name);
        //     return users;
        // }
    });
}

const addUser = (user)=>{
    return axios.post('https://jsonplaceholder.typicode.com/users',user);
}

export const useAddUserData = ()=>{
    const queryClient = useQueryClient();
    return useMutation(addUser,{
        onSuccess: (data)=>{
            alert("Success");
            queryClient.setQueryData('Users',(oldQueryData)=>{
                return {...oldQueryData, data:[...oldQueryData.data,data.data]};
            })
        },
        onError: ()=>alert("Error")
    });
}
