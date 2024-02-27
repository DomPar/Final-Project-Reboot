import { Link } from "react-router-dom"


const Welcome = () => {
  return (
    <>
    <h1>Welcome to My Todos</h1>

    <Link to='/about'>
        <button>Ir a About</button>
    </Link>
    </>
  )
}

export default Welcome