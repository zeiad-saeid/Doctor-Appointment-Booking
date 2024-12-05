import { NavLink } from "react-router-dom"
import {assets} from "../assets/assets_frontend/assets.js"
const Navbar = () => {
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
        <img src={assets.logo} alt="logo" />

        <ul>
            <NavLink>
                <li>HOME</li>
                <hr />
            </NavLink>
            <NavLink>
                <li>ALL DOCTORS</li>
                <hr />
            </NavLink>
            <NavLink>
                <li>ABOUT</li>
                <hr />
            </NavLink>
            <NavLink>
                <li>Contact</li>
                <hr />
            </NavLink>
        </ul>
        <div className="">
             <button>Create account</button>
        </div>
    </div>
  )
}

export default Navbar