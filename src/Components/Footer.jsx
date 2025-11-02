import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="overlay"></div>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section brand">
                        <h3 className="footer-logo">Power<span>Gym</span></h3>
                        <p className="footer-desc">
                            Transforming lives through strength, sweat, and dedication.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-icon">📘</a>
                            <a href="#" className="social-icon">📷</a>
                            <a href="#" className="social-icon">🐦</a>
                            <a href="#" className="social-icon">💼</a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                        <a href="#trainers">Trainers</a>
                    </div>
                    <div className="footer-section">
                        <h4>Our Services</h4>
                        <a href="#">Personal Training</a>
                        <a href="#">Group Classes</a>
                        <a href="#">Nutrition Plans</a>
                        <a href="#">Corporate Wellness</a>
                    </div>
                    <div className="footer-section contact">
                        <h4>Contact Info</h4>
                        <p>📍 123 Fitness Avenue, Hyderabad</p>
                        <p>📞 +91 9346516305</p>
                        <p>✉️ Prathigna@powergym.in</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        © 2025 <strong>PowerGym</strong>. All Rights Reserved. 💥 Designed
                        by <span>Ambati Prathigna</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
