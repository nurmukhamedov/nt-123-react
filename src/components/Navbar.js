import { Link, NavLink } from "react-router-dom";
import './Navbar.scss';

function Navbar() {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About us</NavLink>
            <NavLink to="/contact">Contact us</NavLink>
        </div>
    );
}
export default Navbar;
