import React, { useEffect, useState } from "react";
import "./Testimonials.css";

const Testimonials = () => {
    const testimonials = [
        {
            name: "John Smith",
            role: "Member for 2 years",
            image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
            text: "PowerGym completely transformed my life! I lost 30kg and built unstoppable confidence.",
            rating: 5,
        },
        {
            name: "Lisa Rodriguez",
            role: "Member for 1 year",
            image:
                "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=200&q=80",
            text: "The trainers are motivating and the energy is unmatched. I’ve never felt better!",
            rating: 5,
        },
        {
            name: "David Chen",
            role: "Member for 3 years",
            image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
            text: "World-class equipment and trainers helped me achieve every goal I set!",
            rating: 4,
        },
        {
            name: "Priya Sharma",
            role: "Yoga & Wellness Member",
            image:
                "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=200&q=80",
            text: "I love the yoga sessions! The trainers make every class feel refreshing and peaceful.",
            rating: 5,
        },
        {
            name: "Michael Jordan",
            role: "CrossFit Member",
            image:
                "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=200&q=80",
            text: "Every workout is intense, motivating, and structured perfectly. Absolutely amazing gym!",
            rating: 5,
        },
        {
            name: "Samantha Green",
            role: "Zumba Enthusiast",
            image:
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
            text: "Zumba classes are my favorite! Fun, energetic, and full of positive vibes!",
            rating: 5,
        },
        {
            name: "Amit Patel",
            role: "Member for 4 years",
            image:
                "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80",
            text: "The staff is professional, the facilities are clean, and I love the 24/7 access.",
            rating: 4,
        },
        {
            name: "Emily Watson",
            role: "Member for 6 months",
            image:
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
            text: "I was new to fitness but the trainers made me feel comfortable and confident!",
            rating: 5,
        },
    ];

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="testimonials" className="testimonials section">
            <div className="container">

                {/* Section Heading */}
                <h2 className="section-title fade-in">
                    What Our <span>Members Say</span>
                </h2>

                <p className="section-subtitle fade-in">
                    Real Stories • Real Results • Real Motivation
                </p>

                {/* Testimonials Grid */}
                <div className={`testimonials-grid ${visible ? "visible" : ""}`}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="quote-mark">“</div>

                            <p className="testimonial-text">{testimonial.text}</p>

                            <div className="testimonial-author">
                                <img src={testimonial.image} alt={testimonial.name} />

                                <div className="author-info">
                                    <h4>{testimonial.name}</h4>
                                    <span>{testimonial.role}</span>

                                    <div className="stars">
                                        {"★".repeat(testimonial.rating)}
                                        {"☆".repeat(5 - testimonial.rating)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="testimonials-footer">
                    <p>
                        ⭐ Trusted by <strong>10,000+</strong> fitness lovers across India
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
