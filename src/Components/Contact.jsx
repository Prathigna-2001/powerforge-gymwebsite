import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        alert('Thank you for your message! We will get back to you soon.')
        setFormData({ name: '', email: '', phone: '', message: '' })
    }

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <h2 className="section-title">Get In <span>Touch</span></h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Visit Our Gym</h3>
                        <div className="info-item">
                            <strong>📍 Address:</strong>
                            <p>123 Fitness Street, Health City, HC 12345</p>
                        </div>
                        <div className="info-item">
                            <strong>📞 Phone:</strong>
                            <p>(+91):9346516305</p>
                        </div>
                        <div className="info-item">
                            <strong>✉️ Email:</strong>
                            <p>Ambtiprathigna@powergym.com</p>
                        </div>
                        <div className="info-item">
                            <strong>⏰ Hours:</strong>
                            <p>Monday - Friday: 5:00 AM - 11:00 PM</p>
                            <p>Weekends: 6:00 AM - 10:00 PM</p>
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Your Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact