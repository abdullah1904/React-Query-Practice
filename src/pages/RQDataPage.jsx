import axios from "axios";
import { useQuery } from "react-query"

const fetchUsers = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users');
}


const RQDataPage = () => {
    const onSuccess = (data)=>{
        console.log('Perform side effect after data fetching',data);
    }
    const onError = (error)=>{
        console.log('Perform side effect after countering error',error);
    }
    const { isLoading, data, isError, error, isFetching , refetch} = useQuery('Users', fetchUsers,{onSuccess,onError});
    console.log(isLoading, isFetching);
    if (isLoading || isFetching) {
        return <h2>Loading...</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }
    return (
        <>
            <h2>RQ User Data Page</h2>
            <button onClick={refetch}>Fetch Users</button>
            <ul >
                {data?.data.map(user => {
                    return <li key={user.id}>{user.name}</li>
                })}
            </ul>
        </>
    )
}

export default RQDataPage