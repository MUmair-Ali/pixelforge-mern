import { NavLink } from "react-router-dom";
import './Navigator.css';
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";

const Navigator = ({isSideBarOpen, toggleSidebar}) => {


    return (
        <>
        <div className="mobile-nav-toggle">
                <button onClick={toggleSidebar}>
                    {isSideBarOpen ? <RxCross1 /> : <RxHamburgerMenu />}
                </button>
        </div>

        <aside className={`admin-sidebar ${isSideBarOpen ? 'is-open' : ''}`}>
            <div className="admin-logo">
                 <img className="logo-image" src="./script.png" alt="Logo" />
                <span className="logo-name">Admin Panel</span>
            </div>
            <ul className="admin-nav-links" onClick={toggleSidebar}>
                <li>
                <NavLink to="/admin" end>
                    <span><MdDashboard /> Dashboard</span>
                </NavLink>
                </li>
                <li>
                <NavLink to="/admin/users">
                    <span><FaUser /> Users</span>             
                </NavLink>
                </li>
                <li>
                <NavLink to="/admin/services">
                    <span><FaCode /> Services</span>                
                </NavLink>
                </li>
                <li>
                <NavLink to="/admin/contacts">
                    <span><BiSolidContact /> Contacts</span>                
                </NavLink>
                </li>
            </ul>
        </aside>
        </>
    )
}

export default Navigator;