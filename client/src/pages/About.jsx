import { NavLink } from 'react-router-dom';
import './styles/About.css';
import { useAuth } from '../api/AuthContext';
import { memo } from 'react';

const About = memo(() => {

  const {user} = useAuth();


  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-container">
          {
            user && (<span className='hero-subtitle'>Hello <span className='brand-name'>{user.firstname}</span>!</span>)
          }
          <h1 className="hero-title">
            We Are <span className="brand-name">PixelForge</span>
          </h1>
          <p className='hero-description'>
            We are a passionate team of developers and designers committed to building seamless, innovative digital experiences. Our goal is to turn ideas into reality by combining creativity, technology, and user-centered design.
            From web development to interactive applications, we focus on delivering high-quality solutions that empower businesses and engage users. Every project we take on is a step towards shaping the future of technology and design.
            Collaboration, innovation, and excellence drive everything we do. We believe that technology should be intuitive, accessible, and impactful, and we strive to make that a reality in every product we build.
          </p>
        </div>
      </section>

      <section className="about-intro about-container">
        <div className="about-intro-image">   
          <img 
            src="/images/about.png" 
            alt="A passionate team collaborating at PixelForge" 
          />
        </div>
        <div className="about-intro-text">
          <h2>Forged in Passion</h2>
          <p>
            <strong>PixelForge</strong> is more than just a name—it's a community of passionate developers, visionary designers, and relentless creators. We are united by a single belief: to build digital solutions that are not only beautiful and efficient but also inspiring and innovative.
          </p>
          <p>
            Our core mission is to empower developers worldwide by providing top-tier tools, insightful tutorials, and challenging projects that sharpen skills and ignite creativity.
          </p>
        </div>
      </section>

      <section className="about-values about-container">
        <h2 className="about-section-title">Our Core Values</h2>
        <div className="about-values-grid">
          <div className="about-value-card">
            <h3>🚀 Innovation</h3>
            <p>We constantly push the boundaries of technology to create new and exciting possibilities in web development.</p>
          </div>
          <div className="about-value-card">
            <h3>🤝 Community</h3>
            <p>We foster a supportive and inclusive environment where developers can connect, collaborate, and grow together.</p>
          </div>
          <div className="about-value-card">
            <h3>🧠 Education</h3>
            <p>We are dedicated to sharing knowledge through comprehensive guides, projects, and resources to help you level up.</p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2 className="about-cta-title">Ready to Forge Your Future?</h2>
        <p>Join our journey and become part of a thriving community of builders and innovators.</p>
        <NavLink to='/register'><button className="btn btn-primary btn-pixelated">
          <span>Join Our Community</span>
        </button></NavLink>
      </section>
    </main>
  );
});

export default About;