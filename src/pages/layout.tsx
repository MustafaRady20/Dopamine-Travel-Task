import { Outlet } from "react-router-dom"
import Sidebar from "../components/sideBar"

function Layout() {
  return (
    <div className="h-[100vh] flex gap-2 justify-between ">
      <div className="sidebar border-r-2 ">
       <Sidebar/>
      </div>
     <div className="mainView p-5 flex-1">
     <Outlet/>
     </div>
    </div>
  )
}

export default Layout
