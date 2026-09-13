function Position(){

    return(
        <>
        <div className='w-full h-300 bg-amber-100 flex justify-center items-center'>
            <div>learing position</div>
            <div className='static'> this is static</div>
            <div className='absolute top-4 right-4'>  this is absolute</div>
            <div className='fixed bottom-4 right-2'> this is fixed </div>
            <div className='sticky top-4'> this is sticky </div>
        </div>
        </>

    )
}
export default Position