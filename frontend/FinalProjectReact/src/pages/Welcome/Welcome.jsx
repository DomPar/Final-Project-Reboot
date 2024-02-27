import { Link } from "react-router-dom"
import LoginCard from "../../componentes/LoginForm/LoginForm"
import './Welcome.css'


const Welcome = () => {
  return (
    <div id="welcome-container">
    <LoginCard/>
    <Link to='/app/about'>
        <button>Ir a About</button>
    </Link>
    </div>
  )
}

export default Welcome