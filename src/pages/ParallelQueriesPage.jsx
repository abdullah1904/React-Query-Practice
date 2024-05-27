import { useQuery } from "react-query"
import axios from "axios"

const fetchUsers = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users');
}

const fetchPosts = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts');
}

const ParallelQueriesPage = () => {
    const {data:users} = useQuery('users',fetchUsers);
    const {data:posts} = useQuery('posts',fetchPosts);
    console.log(users,posts);
    return (
        <div>
            <h2>Posts</h2>
            <h2>Users</h2>
        </div>
    )
}

export default ParallelQueriesPage