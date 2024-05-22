import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar';;
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import UserRecord from './Components/UserRecord';


let name ="Ali";
const router1 = createBrowserRouter([
  {
    path: "/",
    element: <Home a={name} />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "Contact",
    element: <Contact/>   
  }

])

function App() {
  return (
<div>
   <Navbar />
    
    {/* <a href={'/'}>Home</a>&emsp;
    <a href={'about'}>About</a>&emsp;
    <a href={'contact'}>Contact</a> */}
    {/* <p>hgfygf</p>
    <p>hgfygf</p>
    <p>hgfygf</p>
    <p>hgfygf</p> */}


    <RouterProvider router={router1} />
  </div>

  )
}

export default App
