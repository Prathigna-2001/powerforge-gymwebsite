import React from 'react'
import './About.css'

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <h2 className="section-title">Why Choose <span>PowerGym</span></h2>
                <div className="about-content">
                    <div className="about-text">
                        <div className="about-features">
                            <div className="feature">
                                <div className="feature-icon">💪</div>
                                <div className="feature-content">
                                    <h3>Modern Equipment</h3>
                                    <p>State-of-the-art fitness equipment from leading brands</p>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">🏆</div>
                                <div className="feature-content">
                                    <h3>Expert Trainers</h3>
                                    <p>Certified professionals with years of experience</p>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">🤝</div>
                                <div className="feature-content">
                                    <h3>Supportive Community</h3>
                                    <p>Join a motivating and friendly fitness community</p>
                                </div>
                            </div>
                            <div className="feature">
                                <div className="feature-icon">⏰</div>
                                <div className="feature-content">
                                    <h3>Flexible Hours</h3>
                                    <p>Open 24/7 to fit your busy schedule</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Gym Interior" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About