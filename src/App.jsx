import { Outlet } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function App(){
  return(
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}