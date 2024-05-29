import axios from "axios"
import { useMutation, useQuery } from "react-query"

const fetchUsers = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users');
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
    return useMutation(addUser);
}
