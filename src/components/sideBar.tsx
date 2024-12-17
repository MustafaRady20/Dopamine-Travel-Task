import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="flex flex-col gap-3 p-4 ">
       <Link className="hover:scale-110 hover:text-gray-700 text-gray-500" to="/">Home</Link>
       <Link className="hover:scale-110 hover:text-gray-700 text-gray-500" to="/users">Users</Link>
    </div>
  )
}

export default Sidebar
