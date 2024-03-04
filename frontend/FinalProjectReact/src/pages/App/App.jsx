import './App.css'
import { Outlet } from 'react-router-dom'
import Header from '../../componentes/Header/Header'
import Footer from '../../componentes/Footer/Footer'
import Sidebar from '../../componentes/Sidebar/Sidebar'
import { useState } from 'react'

function App() {
  const [sidebarDisplay, setSidebarDisplay] = useState('hidden')

  return (
    <>
      <Header setter={setSidebarDisplay}/>
      <div id="main-container">
        <div id="sidebar-grid">
          <Sidebar sidebarDisplay={sidebarDisplay}/>
        </div>
        <div id="outlet-grid">
          <Outlet/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
