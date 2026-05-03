import { NavLink } from "react-router-dom";
import './navbar.css'
import { CalculatorIcon, ClockIcon, HomeIcon , MapPinIcon } from '@heroicons/react/24/solid'
import { NumberedListIcon } from "@heroicons/react/16/solid";

const Navbar = () => {
    return ( <>
        <nav className="bg-gray-800">
            <ul className="flex list-none p-0 m-0 h-16 pl-10 ">
                <li>
                    <NavLink  to="/" className='navLink'><HomeIcon className="h-6 w-6 text-gray-300" />Home</NavLink>
                </li>
                <li>
                    <NavLink to="/calculator" className='navLink'><CalculatorIcon className="h-6 w-6 text-gray-300"/>Calculator</NavLink>
                </li>
                <li> 
                    <NavLink to="/clock" className='navLink'><ClockIcon className="h-6 w-6 text-gray-300"/>Clock</NavLink>
                </li>
                <li>
                    <NavLink to="/todo" className='navLink'><NumberedListIcon className="h-6 w-6 text-gray-300"/>Todo</NavLink>
                </li>
                <li>
                    <NavLink to="/weather" className='navLink'><MapPinIcon className="h-6 w-6 text-gray-300" />Weather</NavLink>
                </li>
            </ul>
        </nav>
    </> );
}
 
export default Navbar;