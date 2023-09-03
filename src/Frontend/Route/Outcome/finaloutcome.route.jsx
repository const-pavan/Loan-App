import Outcome from '../../Components/Outcome/Outcome'
import { Outlet } from 'react-router-dom'
const FinalOutCome = () => {
  return (
    <div className='authentication-container'>
      <Outcome />
      <Outlet />
    </div>
  )
}

export default FinalOutCome
