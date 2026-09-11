function TopNavBar(){
    return(
        <>
        <div className='flex flex-row justify-between'>
            <div>ChatGPT</div>
            <div className='flex flex-row justify-center gap-4'>
                <div className='border rounded-2xl p-1 bg-black text-white'><button>Login</button></div>
                <div className='border rounded-2xl p-1'><button>Sign up for free</button></div>
            </div>
        </div>
        </>
    )
}
export default TopNavBar