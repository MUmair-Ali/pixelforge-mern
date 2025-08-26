import './styles/Home.css'
import Lottie from 'lottie-react';
import animationData from '../assets/banner.json';
import { NavLink } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import { memo } from 'react';

const Home = memo(() => {
    return (
        <>
         <main className='hero-section'>
            <div className='container grid grid-two-cols'>
                <div className='hero-content'>
                    <span className='hero-subtitle'>Craft Your Future, One Line of Code at a Time.</span>
                    <h1 className='hero-title'>Welcome to&nbsp;
                        <span className='brand-name'>
                            <TypeAnimation
                            sequence={['PixelForge', 3000]}
                            speed={10}
                            repeat={Infinity}
                            />
                            </span></h1>
                    <p className='hero-description'>Your one-stop solution for all things creative. Explore our wide range of services, from graphic design to web development. Learn, build, and bring your ideas to life with us.</p>
                    <div className='hero-buttons'>
                        <NavLink to="/services"><button className='btn btn-primary btn-pixelated'><span>Forge Ahead</span></button></NavLink>
                        <NavLink to="/about"><button className='btn btn-secondary'><span>About Pixels</span></button></NavLink>
                    </div>
                </div>
                <div className='hero-image'>
                     <Lottie 
                        animationData={animationData}
                        loop
                        autoplay
                        className="banner-image lottie-animation"
                    />
                </div>
            </div>
         </main>

         <section className='analytics-section'>
            <div className='container grid grid-four-cols'>
                <div className='analytics-card'>
                    <p className='card-value'>1,234</p>
                    <h3 className='card-title'>User Signups</h3>
                </div>
                <div className='analytics-card'>
                    <p className='card-value'>567,890</p>
                    <h3 className='card-title'>Active Users</h3>
                    
                </div>
                <div className='analytics-card'>
                    <p className='card-value'>$12,345</p>
                    <h3 className='card-title'>Revenue</h3>
                    
                </div>
                <div className='analytics-card'>
                    <p className='card-value'>4.5/5</p>
                    <h3 className='card-title'>Feedback Score</h3>
                    
                </div>
            </div>
         </section>

         <section className='gs-section'>
            <div className='container grid grid-two-cols'>
                <div className='gs-image'>
                    <img src="/images/contact.png" alt="Get Started" />
                </div>
                <div className='hero-content'>
                    <h2 className='hero-title'>Start Pixelating</h2>
                    <p className='hero-description'>Join our community of creators and innovators. Whether you're a beginner or an expert, we have something for everyone. Sign up today and start your journey with us!</p>
                    <NavLink to="/register"><button className='btn btn-primary btn-pixelated'><span>Get Started</span></button></NavLink>
                </div>
            </div>
         </section>
        </>
    )
})

export default Home;