import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


import TopSidebar from './component/TopSidebar.tsx'
import SideBar from './component/SideBar.tsx'
import TopNavBar from './component/TopNavBar.tsx'
import SearchBar from './component/SearchBar.tsx'
import TempText from './component/TempText.tsx'
import BotText from './component/BotText.tsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <div className='flex w-full h-screen fex-row justify-between gap-8'>
      <div className='flex flex-col h-screen w-1/4 gap-2'>
          <TopSidebar/> 
          <SideBar/>
      </div> 
        <div className="flex flex-row justify-between h-screen w-full">
          <div className='flex flex-col justify-between w-full'>
            <TopNavBar/>
            <div className='flex flex-col items-centerd justify-center h-screen w-full '>
          <TempText/>
          <SearchBar/> 
          <BotText/>
          </div>
          </div>
        </div>
  </div>
    </>
  )
}

export default App
