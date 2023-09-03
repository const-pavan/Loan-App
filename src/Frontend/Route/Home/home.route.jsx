import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Button from '../../Components/Button/button.component'
const Home = () => {
  return (
    <div className='authentication-container'>
      <div>
        <h3>
          Need help applying a loan for your business? Click the button below to
          start the process with us.
        </h3>
        <Link to='/form'>
          <Button>Start Application</Button>
        </Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Home
