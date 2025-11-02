import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="nav-wrapper">
                    <div className="logo">
                        <h2>Power<span>Gym</span></h2>
                    </div>

                    <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
                        <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                        <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                        <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
                        <a href="#trainers" onClick={() => setIsMobileMenuOpen(false)}>Trainers</a>
                        <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
                        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                    </nav>

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header