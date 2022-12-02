import { NavLink } from 'react-router-dom'

import './nav-list.styles.scss'

const NavList = () => {
  return (
    <div className='component__nav-list'>
      <NavLink className='nav-link' to='/'>
        Home
      </NavLink>
      <NavLink className='nav-link' to='/quiz'>
        Quiz
      </NavLink>
      <NavLink className='nav-link' to='/result'>
        Result
      </NavLink>
      <NavLink className='nav-link' to='/scores'>
        Scores
      </NavLink>
    </div>
  )
}

export default NavList
