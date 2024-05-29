import { useQueries } from "react-query"
import axios from "axios"

const fetchUser = (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
}

const DynamicParallelQueriesPage = ({userIds}) => {
    // console.log(userIds);
    const queryResults = useQueries(
        userIds.map(id=>{
            return{
                queryKey: ['user',id],
                queryFn: ()=>fetchUser(id),
            }
        })
    )
    console.log({queryResults});
    return (
        <div>DynamicParallelQueriesPage</div>
    )
}

export default DynamicParallelQueriesPage