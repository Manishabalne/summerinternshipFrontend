import { createBrowserRouter,RouterProvider,Navigate } from 'react-router-dom';
import Rootlayout from './Rootlayout';
import Aboutus from './Aboutus';
import Signin from './Signin';
import Signup from './Signup';

function Home() {
  let browserRouter=createBrowserRouter([{
    path:'',
    element:<Rootlayout/>,
    children:[
      {
        path:'',
        element:<Aboutus/>
      },
      {
        path:'Signin',
        element:<Signin/>,
      },
      {
        path:'Signup',
        element:<Signup/>
      }
    ]
  }])
  return (
    <div className="App">
          <RouterProvider router={browserRouter}/>
    </div>
  );
}

export default Home;
