import { useState } from "react"
import { useAddUserData } from "../hooks/useUsersData";

const AddUserUsingMutationPage = () => {
    const [username, setUsername] = useState("");
    const { mutate, isLoading, isError, error } = useAddUserData();
    const handleClick = () => {
        const user = {
            "id": 11,
            "name": "Leanne Graham",
            "username": username,
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        }
        mutate(user);
    }
    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error}</h2>
    }
    return (
        <div>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button onClick={handleClick}>Insert User</button>
        </div>
    )
}

export default AddUserUsingMutationPage
