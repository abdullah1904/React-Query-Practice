import axios from "axios";
import { useQuery } from "react-query"

const fetchUsers = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users');
}


const RQDataPage = () => {
    const { isLoading, data, isError, error, isFetching } = useQuery('Users', fetchUsers, { 
        staleTime: 30 * 1000
    });
    console.log(isLoading, isFetching);
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }
    return (
        <>
            <h2>RQ User Data Page</h2>
            <ul >
                {data?.data.map(user => {
                    return <li key={user.id}>{user.name}</li>
                })}
            </ul>
        </>
    )
}

export default RQDataPage