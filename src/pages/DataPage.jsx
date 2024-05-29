import { useState, useEffect } from 'react'
import axios from 'axios'

const DataPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            setData(res.data);
            setIsLoading(false);
        })
        .catch(error=>{
            setError(error.message);
            setIsLoading(false);
        })
    }, []);
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if(error){
        return <h2>{error}</h2>
    }
    return (
        <>
            <h2>User Data Page</h2>
            <ul >
                {data.map(user => {
                    return <li key={user.id}>{user.name}</li>
                })}
            </ul>
        </>
    )

}

export default DataPage
