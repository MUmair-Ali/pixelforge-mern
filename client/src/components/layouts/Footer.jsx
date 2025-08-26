import { NavLink } from 'react-router-dom';
import './styles/Footer.css'
import { memo } from 'react';

const Footer = memo(() => {
    return (
         <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-left">
                    <p className="footer-text">© {new Date().getFullYear()} <NavLink to='https://github.com/MUmair-Ali' className='footer-link'>Umair Ali</NavLink> . All rights reserved.</p>
                </div>
                <div className="footer-right">
                     <NavLink className='nav-links' to="/">Home</NavLink>
                    <NavLink className='nav-links' to="/about">About</NavLink>
                    <NavLink className='nav-links' to="/services">Services</NavLink>
                    <NavLink className='nav-links' to="/contact">Contact</NavLink>
                    <NavLink className='nav-links' to="/register">Register</NavLink>
                    <NavLink className='nav-links' to="/login">Login</NavLink>
                </div>
            </div>
        </footer>
    )
})

export default Footer;
