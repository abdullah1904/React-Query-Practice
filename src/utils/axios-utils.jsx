import axios from "axios";

const client = axios.create({baseURL:'https://jsonplaceholder.typicode.com'});

export const request = ({...options})=>{
    client.defaults.headers.common.Authorization = `Bearer Token`;
    const onSuccess = (res)=>res;
    const onError = (err)=> err;
    return client(options).then(onSuccess).catch(onError);
}