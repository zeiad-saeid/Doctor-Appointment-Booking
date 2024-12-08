import { NavLink, useNavigate } from "react-router-dom"
import {assets} from "../assets/assets_frontend/assets.js"
import { useState } from "react"
const Navbar = () => {

const navigate = useNavigate()
const [showMenu, setShowMenu] = useState(false)
const [token, setToken] = useState(true)
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
        <img className="w-44 cursor-pointer" src={assets.logo} alt="logo" />

        <ul className="hidden md:flex items-start gap-5 font-medium">
            <NavLink to="/">
                <li className="py-1">HOME</li>
                <hr className="hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto"/>
            </NavLink>
            <NavLink  to="/doctors">
                <li className="py-1">ALL DOCTORS</li>
                <hr className="hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto"/>
            </NavLink>
            <NavLink   to="/about">
                <li className="py-1">ABOUT</li>
                <hr className="hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto"/>
            </NavLink>
            <NavLink  to="/contact">
                <li className="py-1">CONTACT</li>
                <hr className="hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto"/>
            </NavLink>
        </ul>
        <div className="flex items-center gap-4">
            {
                token?<div className="flex items-center cursor-pointer gap-2 group relative">
                    <img className="w-8 rounded-full" src={assets.profile_pic} alt="user_profile_pic" />
                    <img className="w-2.5 " src={assets.dropdown_icon} alt="dropdown_icon" />
                    <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                         <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                            <p onClick={()=>navigate('/my-profile')} className="hover:text-black cursor-pointer">My Profile</p >
                            <p onClick={()=>navigate('/my-appointment')} className="hover:text-black cursor-pointer">My Appointments</p >
                            <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer">Logout</p >
                         </div>
                    </div>
                </div>
                : 
                <button onClick={()=>navigate('/login')} className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block">Create account</button>
            }
            
        </div>
    </div>
  )
}

export default Navbar