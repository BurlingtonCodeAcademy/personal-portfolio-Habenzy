import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
  return(
    <div>
      <Link to={'/'}>
        <button>Home</button>
      </Link>
      <Link to={'/about'}>
        <button>Button</button>
      </Link>
      <Link to={'/portfolio'}>
        <button>Portfolio</button>
      </Link>
      <a href='https://jsonplaceholder.typicode.com'>
        <button>External</button>
      </a>
    </div>
  )
}

export default Header
