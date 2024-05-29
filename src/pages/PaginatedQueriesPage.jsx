import axios from "axios"
import { useState } from "react";
import { useQuery } from "react-query"

const getComments = (pageNo)=>{
    // https://jsonplaceholder.typicode.com/comments?_limit=2&_page=2
    return axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=5&_page=${pageNo}`);
}

const PaginatedQueriesPage = () => {
    const [pageNo, setPageNo] = useState(1);
    const {data,isLoading, isError, error} = useQuery(['comments',pageNo],()=>getComments(pageNo),{keepPreviousData: true});
    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error}</h2>
    }
    return (
        <div>
            {data.data.map(item=>(
                <p key={item.id}>{item.id} - {item.body}</p>
            ))}
            <button onClick={()=>setPageNo(pageNo-1)}>Previous</button>
            <button onClick={()=>setPageNo(pageNo+1)}>Next</button>
        </div>
    )
}

export default PaginatedQueriesPage
