import React from 'react'
import Navbar from './Navbar'
import {Outlet} from 'react-router-dom'
import './Rootlayout.css'

function Rootlayout() {
  return (
    <div>
        <Navbar/>
        <div style={{minHeight:"100vh"}} className='rootlayout'><Outlet/></div>
    </div>
  )
}

export default Rootlayout
