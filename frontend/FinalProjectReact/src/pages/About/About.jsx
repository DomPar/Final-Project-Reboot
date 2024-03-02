import { Link } from "react-router-dom"

const About = () => {
  return (
    <>
    <h1 className="no-margin">About</h1>
    <Link to='/'>
        <button>Ir a Home</button>
    </Link>
    <Link to='/app/shelter/1'>
    <button>pet profile</button>
    </Link>
    </>
  )
}

export default About