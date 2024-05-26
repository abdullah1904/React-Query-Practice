import axios from "axios";
import { useQuery } from "react-query"

const fetchUsers = ()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users');
}


const RQDataPage = () => {
    const {isLoading, data} = useQuery('Users',fetchUsers);
    if (isLoading) {
        return <h2>Loading...</h2>
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