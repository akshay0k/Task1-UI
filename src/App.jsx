import './App.css'
import Home from './components/Home/home'
import Navbar from './components/Navbar/navBar'
import SideBar from './components/Sidebar/sideBar'

function App() {
  
  return (
<div className='App'>
  <Navbar/>
    <div className='flex flex-1'>
      <SideBar/>
      <Home/>
    </div>

</div>
  )
}

export default App
