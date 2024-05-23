import React from 'react'
import Navbar from './Navbar'
import {Outlet} from 'react-router-dom'

function Rootlayout() {
  return (
    <div>
        <Navbar/>
        <div style={{minHeight:"100vh"}}><Outlet/></div>
    </div>
  )
}

export default Rootlayout