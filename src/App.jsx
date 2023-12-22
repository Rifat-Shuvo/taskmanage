import { Outlet } from "react-router-dom"
import Navbar from "./Componenets/Navbar"
import Footer from "./Componenets/Footer"





function App() {


  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
     
    </>
  )
}

export default App
