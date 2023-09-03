import SignUpForm from '../../Components/SignUpForm/sign-up-form.component'
import SignInForm from '../../Components/SignInForm/sign-in-form.component'

import './authentication.styles.scss'

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication
