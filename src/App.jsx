
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './SharedComponent/Navbar'
import Footer from './Footer/Footer'

function App() {
  

  return (
   <div>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
   </div>
  )
}

export default App
