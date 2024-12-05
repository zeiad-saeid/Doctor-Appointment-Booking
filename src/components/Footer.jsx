import { NavLink } from "react-router-dom"
import {assets} from "../assets/assets_frontend/assets.js"

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            dolores placeat ratione ex sapiente expedita, voluptatem soluta
            voluptate quos, itaque fugiat asperiores at cum! Repellat error quo
            reiciendis unde exercitationem.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <NavLink
                to="/"
                className="hover:text-black"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-black"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-black"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/privacy-policy"
                className="hover:text-black"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+20-(01062152634)</li>
            <li>email@contact.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024</p>
      </div>
    </div>
  );
};

export default Footer;
