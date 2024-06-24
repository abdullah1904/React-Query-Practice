import { useQuery } from "react-query"
import axios from "axios"

const fetchPost = (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
}

const fetchUser = (id)=>{
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
}

const DependentQueriesPage = ({ id }) => {
    const { data:postData} = useQuery(['Post',id], ()=>fetchPost(id));
    const userId = postData?.data.userId;
    const {data:userData} = useQuery(['User',userId],()=>fetchUser(userId),{
        enabled: !!userId
    });
    return (
        <div>
            {postData?.data.title}
            <br/>
            {postData?.data.body}
            <br/>
            Author: {userData?.data.name}
        </div>
    )
}

export default DependentQueriesPage
