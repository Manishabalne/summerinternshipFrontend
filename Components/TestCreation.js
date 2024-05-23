import { createBrowserRouter,RouterProvider,Navigate } from 'react-router-dom';
import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar2 from './Navbar2'
import Create from './Create';
function TestCreation() {
  let browserRouter=createBrowserRouter([{
    path:'',
    element:<Create/>
  }])
  return (
    <div className="App">
    <RouterProvider router={browserRouter}/>
</div>
  )
}

export default TestCreation