import SideBarItem from "./SideBarItem"
function SideBar(){
    return(
        <>
        <div className='flex flex-col h-2/3 gap-2 '>
        <SideBarItem title="New Chat"/>
        <SideBarItem title='Search Chat'/>
        <SideBarItem title=' Images'/>
        <SideBarItem title='Plugins'/>
        <SideBarItem title=' Deep Research'/>
        <SideBarItem title='See plans '/>
        <SideBarItem title=' Settings'/>

       
        </div>
        
        </>
    )
}
export default SideBar