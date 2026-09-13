type TitleProps={
    title:string;

}
function SideBarItem({title}:TitleProps){
    return(
        <div className='hover:bg-gray-100'>{title}</div>
    )
}
export default SideBarItem