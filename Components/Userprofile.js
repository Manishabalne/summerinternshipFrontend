import { createBrowserRouter,RouterProvider,Navigate } from 'react-router-dom';
import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar2 from './Navbar2'
function Userprofile() {
  let browserRouter=createBrowserRouter([{
    path:'',
    element:<Navbar2/>
  }])
  return (
    <div className="App">
    <RouterProvider router={browserRouter}/>
</div>
  )
}

export default Userprofile