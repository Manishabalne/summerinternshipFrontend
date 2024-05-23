import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div >
        <div className='img-fluid float-start bg-dark'>
        <img src="https://images.shiksha.com/mediadata/images/1687888767php162Hce.jpeg" alt="this image is not available" style={{height:"40px",width:"40px"}} className='rounded-circle m-3 '/>
        </div>
        <div className="nav bg-dark justify-content-end mb-5 p-3">
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link" to="">About us</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="Signin">Sign in</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="Signup">Sign up</Link>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar