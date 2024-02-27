import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './componentes/Header/Header'
import Footer from './componentes/Footer/Footer'

function App() {

  return (
    <>
      <Header/>
      <div id="main-container">
      <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
