import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-bg"></div>
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Transform Your <span>Body</span> Transform Your <span>Life</span>
                    </h1>
                    <p className="hero-subtitle">
                        Join the fittest community and achieve your fitness goals with our state-of-the-art facilities and expert trainers.
                    </p>
                    <div className="hero-buttons">
                        <a href="#contact" className="btn">Start Your Journey</a>
                        <a href="#about" className="btn btn-outline">Learn More</a>
                    </div>
                    <div className="hero-stats">
                        <div className="stat">
                            <h3>500+</h3>
                            <p>Happy Members</p>
                        </div>
                        <div className="stat">
                            <h3>10+</h3>
                            <p>Expert Trainers</p>
                        </div>
                        <div className="stat">
                            <h3>5</h3>
                            <p>Years Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero