import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'
import Sidebar from './componentes/Sidebar/Sidebar'

function App() {

  return (
    <>
      <Header/>
      <div id="main-container">
        <Sidebar/>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
