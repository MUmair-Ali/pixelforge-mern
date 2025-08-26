import { NavLink } from "react-router-dom";
import './styles/Header.css'
import { useAuth } from "../../api/AuthContext";
import { memo, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Header = memo(({showMenu, handleToggleMenu}) => {

    const {token} = useAuth();

    useEffect(() => {
        if (showMenu) {
            document.body.classList.add('sidebar-open');
        } else {
            document.body.classList.remove('sidebar-open');
        }

        // Cleanup on component unmount
        return () => {
            document.body.classList.remove('sidebar-open');
        };
    }, [showMenu]);


    return (
       <>
        <header>
            <div className="header-container">
                <div className="logo-container">
                   <NavLink to="/" className="logo">
                       <img className="logo-img" src="script.png" alt="Logo" />
                       <span className="logo-text">PixelForge</span>
                   </NavLink>
                </div>
                <nav className="nav-container">
                    <NavLink className={({isActive}) => `nav-links ${isActive ? 'active' : ''}`} to="/"><span>Home</span></NavLink>
                    <NavLink className={({isActive}) => `nav-links ${isActive ? 'active' : ''}`} to="/about"><span>About</span></NavLink>
                    <NavLink className={({isActive}) => `nav-links ${isActive ? 'active' : ''}`} to="/services"><span>Services</span></NavLink>
                    <NavLink className={({isActive}) => `nav-links ${isActive ? 'active' : ''}`} to="/contact"><span>Contact</span></NavLink>
                    {
                        token 
                        ? (<NavLink className={({isActive}) => `nav-links ${isActive ? 'active' : ''}`} to="/logout"><span>Logout</span></NavLink>)
                        : (
                            <>
                            <NavLink className={({isActive}) => `nav-links ${isActive ? 'active' : ''}`} to="/register"><span>Register</span></NavLink>
                                <NavLink className={({isActive}) => `nav-links ${isActive ? 'active' : ''}`} to="/login"><span>Login</span></NavLink>
                            </>)
                    
                    }
                </nav>
                <div className="ham-menu-container">
                    <button className="btn ham-menu-btn" onClick={handleToggleMenu}>
                        {showMenu ? <RxCross1 /> : <GiHamburgerMenu />}
                    </button>
                </div>
                <aside className={`sidebar-menu ${showMenu ? "show" : ""}`}>
                    <ul className="sidebar-navlinks"onClick={handleToggleMenu}>
                        <li>
                            <NavLink className={({isActive}) => `navlinks ${isActive ? 'active' : ''}`} to="/"><span>Home</span></NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => `navlinks ${isActive ? 'active' : ''}`} to="/about"><span>About</span></NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => `navlinks ${isActive ? 'active' : ''}`} to="/services"><span>Services</span></NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => `navlinks ${isActive ? 'active' : ''}`} to="/contact"><span>Contact</span></NavLink>
                        </li>
                        {
                            token 
                            ? (
                                <li>
                                    <NavLink className={({isActive}) => `navlinks ${isActive ? 'active' : ''}`} to="/logout"><span>Logout</span></NavLink>
                                </li>
                            )
                            : (
                                <>
                                    <li>
                                        <NavLink className={({isActive}) => `navlinks ${isActive ? 'active' : ''}`} to="/register"><span>Register</span></NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={({isActive}) => `navlinks ${isActive ? 'active' : ''}`} to="/login"><span>Login</span></NavLink>
                                    </li>
                                </>
                            )
                        }

                    </ul>
                </aside> 
            </div>
        </header>
       </>
    )
})

export default Header;