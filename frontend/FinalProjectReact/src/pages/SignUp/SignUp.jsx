import { Link } from "react-router-dom"
import './SignUp.css'
import SignUpCard from "../../componentes/SignUpForm/SignUpForm"


const SignUp = () => {

  return (
    <div id="signup-container">
    <SignUpCard/>
    <Link to='/'>
        <button>Ir</button>
    </Link>
    </div>
  )
}

export default SignUp