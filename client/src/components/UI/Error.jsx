
import { NavLink } from 'react-router-dom'
import './styles/Error.css'

const Error = () => {

    return (
        <>
            <section className='error-section'>
                <div className='error-container'>
                    <div className='error-content'>
                        <h1 className='error-heading'>404</h1>
                        <h4 className='error-sub-head'>Sorry! Page not Found</h4>
                        <p>Oops! The page you are looking for doesn’t exist or has been moved.</p>
                        <div className='error-buttons'>
                            <NavLink to="/"><button className='btn btn-primary btn-pixelated'><span>Go Back to Home</span></button></NavLink>
                            <NavLink to="/contact"><button className='btn btn-secondary'><span>Report Problem</span></button></NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Error