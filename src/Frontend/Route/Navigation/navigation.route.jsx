import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg'

import './navigation.styles.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/home'>
            HOME
          </Link>

          <Link className='nav-link' to='/auth'>
            Log In
          </Link>

          <Link className='nav-link' to='/service'>
            Services
          </Link>
          <Link className='nav-link' to='/About-us'>
            About us
          </Link>
        </div>
        {/* {isCartOpen && <CartDropdown />} */}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
