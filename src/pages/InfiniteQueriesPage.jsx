import axios from "axios"
import { Fragment } from "react";
import { useInfiniteQuery } from "react-query"

const getComments = ({pageParam = 1})=>{
    return axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=4&_page=${pageParam}`);
}
const InfiniteQueriesPage = () => {
    const {data,isLoading, isError, error, hasNextPage,fetchNextPage} = useInfiniteQuery(['comments'],getComments,{
        getNextPageParam:(_lastPage, pages)=>{
            if(pages.length < 100){
                return pages.length + 1;
            }
            else{
                return undefined;
            }
        }
    });
    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error}</h2>
    }
    return (
        <div>
            {data?.pages.map((group,index)=>(
                <Fragment key={index}>
                    {
                        group.data.map(comment=>(
                            <p key={comment.id}>{comment.id} {comment.body}</p>
                        ))
                    }
                </Fragment>
            ))}
            <button disabled={!hasNextPage} onClick={fetchNextPage}>Load More</button>
        </div>
    )
}

export default InfiniteQueriesPage
