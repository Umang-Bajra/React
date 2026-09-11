function SearchBar(){
    return(
        <>
        <div className='flex justify-center m-20 border border-gray-500 rounded-xl '>
            <div>+</div>
            <div className='border border-gray-500 h-6 w-100 rounded-xl m-1'> <input type="text" placeholder="ask ChatGPT"/></div>
            <div className='flex gap-4 justify-end'>
            <div><img src="mic.png" alt="logo" className='h-8 w-8'></img></div>
            <div><img src="uparrow.png" alt="logo" className='h-8 w-8'></img></div>
            </div>
        </div>
        </>
    )
}
export default SearchBar