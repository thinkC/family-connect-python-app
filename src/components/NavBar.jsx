import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.png'

function NavBar() {
  return (
<nav className='navbar navbar-expand-sm bg-secondary navbar-dark px-sm-5'>
      {/* https://www.iconfinder.com/search?q=library%20icon&price=free */}
      
     <Link to={"/"}>
      <img src={logo} alt="logo" width={50} />
     </Link>
     <ul className='navbar-nav align-items-center'>
      <li className='nav-item ml-5'>
        <Link to={"/spacelist"}>
        study spaces
        </Link>
      </li>
     </ul>
    <Link to={"/login"} className='ml-auto'>
    <button>
      <i className="fa-solid fa-right-to-bracket"></i>
    </button>
    </Link>
      </nav>
  )
}

export default NavBar