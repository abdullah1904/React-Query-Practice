import { useParams } from "react-router-dom";
import { useUserData } from "../hooks/useUserData"

const RQUserPage = () => {
    const {userId} = useParams();
    const {isLoading, data, isError, error} = useUserData(userId);
    if (isLoading) {
        return <h2>Loading...</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }
    return (
        <div>
            {data?.data.name} - {data?.data.username}
        </div>
    )
}

export default RQUserPage
