import './App.css'
import Home from './components/Home/home'
import Navbar from './components/Navbar/navBar'
import RightSidebar from './components/RightSideBar/RightSidebar'
import SideBar from './components/Sidebar/sideBar'

function App() {
  
  return (
<div className='App'>
  <Navbar/>
    <div className='dashboard flex flex-1 '>
      <SideBar/>
      <Home/>
      <RightSidebar/>
    </div>

</div>
  )
}

export default App
