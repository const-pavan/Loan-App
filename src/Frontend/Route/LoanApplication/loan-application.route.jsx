import { Outlet } from 'react-router-dom'
import LoanForm from '../../Components/LoanForm/loan-form'
const LoanApplication = () => {
  return (
    <div className='authentication-container'>
      <LoanForm />
      <Outlet />
    </div>
  )
}

export default LoanApplication
