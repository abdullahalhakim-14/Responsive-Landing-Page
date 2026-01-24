import { Link, NavLink } from "react-router"
import { useState } from "react";
import "./NavBar.css"

const NavBar = ({ logo, items, icon, btn }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="NavBar">
            <nav>
                <button className="burger" onClick={() => setOpen(!open)}> {icon} </button>
                <div className="head">
                    <h1> {logo} </h1>
                    <ul className={open ? "active" : ""}>
                        {items?.map((item, index) => {
                            return (
                                <li key={index}> <NavLink to={item?.url} className={({ isActive }) => isActive ? "active" : ""}> {item?.content} </NavLink></li>)
                        })}
                    </ul>
                </div>
                <Link to="/signin" >
                    <button className="signin" >{btn}</button>
                </Link>
            </nav>
        </div>
    )
}

export default NavBar
