function SearchBar(){
    return(
        <>
        <div className='relative flex justify-center items-center mx-auto h-8  w-[70%] border border-gray-500 rounded-xl gap-2 '>
            <div className=' absolute left-1'>+</div>
            <div className='absolute left-3 border border-gray-500 h-6 w-[80%] rounded-xl m-1'> <input type="text" placeholder="ask ChatGPT"/></div>
            <div className='absolute right-1 flex gap-2 justify-end'>
                <div><img src="mic.png" alt="logo" className=' h-8 w-8'></img></div>
                <div><img src="uparrow.png" alt="logo" className=' h-8 w-8'></img></div>
            </div>
        </div>
        </>
    )
}
export default SearchBar