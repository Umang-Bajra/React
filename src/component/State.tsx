import {useState} from "react"

function State(){
    const [open,setOpen]=useState(false);
    console.log(open)
    return(
    <div className='w-full h-screen flex justify-center items-center bg-red-200'>
       
       {open ?( <div className=" absolute top-1 left-1 h-screen w-20 bg-blue-200">sidebar opened</div>):(
        <div className=" absolute top-1 left-1 h-screen w-20 bg-amber-200">sidebar opened</div>)}

        <button className="bg-amber-200 p-2 rounded-4xl" onClick={()=>{setOpen(!open)}}>click me </button>
        
    </div>

    )
}
export default State