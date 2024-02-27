import { Link } from "react-router-dom"

const About = () => {
  return (
    <>
    <h1 className="no-margin">About</h1>
    <Link to='/'>
        <button>Ir a Home</button>
    </Link>
    </>
  )
}

export default About