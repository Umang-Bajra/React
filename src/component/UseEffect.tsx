import {useEffect} from "react"
import { useState } from "react"
// step1 specify the format or type of json that will be fiven by the api
interface User{
    userId:number,
    id:number,
    title:string,
    completed:boolean
}


function UseEffect(){
    //step 2 make use state to control all the possiable states of our ui
//for handling pending state
const [loading, setLoading]= useState(true);
//handling success
const [users,setUsers]=useState<User>();
//handling error state
const [error,setError]=useState<any>();

//step 3 call api using the use effect hook(keep dependency array)
useEffect(()=>{
    const fetchUser=async()=>{
    
    try{
        const response = await fetch("");
        if(!response.ok){
            throw new Error("failed  to fetch user")
        }
        const data:User = await response.json();
        setUsers(data);
        setLoading(false)
    }
    catch(error){
        setError("something is wrong")
        setLoading(false)
    }
}
fetchUser()
},[])
if(loading){
    return(
        <p>loading</p>
    )
}
if(error){
    <p> {error}</p>
}
    return(
        <>
        <div>Learning use effect</div>

        <div>user id:{users?users.id:""}</div>
        <div>user title:{users?users.title:""}</div>
        <div>user completed:{users?users.completed:""}</div>
        </>
    )
}
export default UseEffect