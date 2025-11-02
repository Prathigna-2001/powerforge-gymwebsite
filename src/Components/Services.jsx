import React, { useState } from "react";
import "./Services.css";

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            icon: "🏋️‍♂️",
            title: "Personal Training",
            description:
                "Customized one-on-one training programs designed to push your limits and achieve your dream body.",
            detailedDescription: "Our certified personal trainers create tailored workout routines based on your fitness level, goals, and preferences. Includes progress tracking, form correction, and motivational support.",
            price: "₹2999/month",
            features: ["1-on-1 Sessions", "Custom Workout Plans", "Progress Tracking", "Flexible Timing"],
            duration: "60 mins/session",
            popular: true
        },
        {
            icon: "🤸‍♀️",
            title: "Group Classes",
            description:
                "Join energetic yoga, Zumba, HIIT, and cycling sessions with our vibrant community of fitness lovers.",
            detailedDescription: "Experience the power of group motivation with our diverse class offerings. From high-intensity workouts to relaxing yoga sessions, there's something for everyone.",
            price: "₹1999/month",
            features: ["Yoga & Pilates", "Zumba Dance", "HIIT Workouts", "Cycling Sessions", "Unlimited Classes"],
            duration: "45-60 mins/class",
            popular: false
        },
        {
            icon: "💼",
            title: "Corporate Membership",
            description:
                "Give your employees a healthy lifestyle boost with our exclusive corporate wellness programs.",
            detailedDescription: "Boost productivity and employee satisfaction with our comprehensive corporate wellness packages. Includes team building activities and health workshops.",
            price: "Custom Plans",
            features: ["Team Building", "Health Workshops", "Flexible Packages", "On-site Sessions"],
            duration: "Tailored Programs",
            popular: false
        },
        {
            icon: "🥗",
            title: "Nutrition & Diet Plans",
            description:
                "Get personalized nutrition guidance and meal plans that perfectly align with your fitness goals.",
            detailedDescription: "Our certified nutritionists create science-backed meal plans tailored to your body type, goals, and dietary preferences. Regular follow-ups included.",
            price: "₹1499/month",
            features: ["Custom Meal Plans", "Weekly Check-ins", "Supplement Guidance", "Recipe Database"],
            duration: "Ongoing Support",
            popular: true
        },
        {
            icon: "🧘‍♂️",
            title: "Mind & Meditation",
            description:
                "Relax and recharge with guided meditation, breathing sessions, and mental wellness programs.",
            detailedDescription: "Find your inner peace with our mindfulness programs. Reduce stress, improve focus, and enhance overall well-being through proven techniques.",
            price: "₹999/month",
            features: ["Guided Meditation", "Breathing Exercises", "Stress Management", "Mindfulness Training"],
            duration: "30-45 mins/session",
            popular: false
        },
        {
            icon: "👨‍👩‍👧‍👦",
            title: "Family Packages",
            description:
                "Special discounted packages for families looking to embark on their fitness journey together.",
            detailedDescription: "Get fit together as a family! Our family packages make fitness affordable and fun for everyone in your household.",
            price: "₹4999/month",
            features: ["Up to 4 Members", "Mixed Activities", "Family Challenges", "Progress Tracking"],
            duration: "Flexible Scheduling",
            popular: true
        }
    ];

    const openModal = (service) => {
        setSelectedService(service);
    };

    const closeModal = () => {
        setSelectedService(null);
    };

    return (
        <>
            <section id="services" className="services section">
                <div className="container">
                    <div className="services-header">
                        <h2 className="section-title">
                            Our <span>Services</span>
                        </h2>
                        <p className="services-subtitle">
                            Discover our comprehensive range of fitness services designed to help you achieve your goals
                        </p>
                    </div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`service-card ${service.popular ? 'popular' : ''}`}
                            >
                                {service.popular && <div className="popular-badge">Most Popular</div>}
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <div className="service-features">
                                    {service.features.slice(0, 2).map((feature, idx) => (
                                        <span key={idx} className="feature-tag">✓ {feature}</span>
                                    ))}
                                </div>
                                <div className="service-footer">
                                    <div className="service-price">{service.price}</div>
                                    <div className="service-duration">{service.duration}</div>
                                </div>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => openModal(service)}
                                >
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="services-cta">
                        <h3>Ready to Start Your Fitness Journey?</h3>
                        <p>Book a free consultation session with our experts</p>
                        <button className="btn btn-secondary">Book Free Session</button>
                    </div>
                </div>
            </section>

            {/* Service Detail Modal */}
            {selectedService && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>×</button>

                        <div className="modal-header">
                            <div className="service-icon-large">{selectedService.icon}</div>
                            <h2>{selectedService.title}</h2>
                            <div className="modal-price">{selectedService.price}</div>
                        </div>

                        <div className="modal-body">
                            <div className="modal-description">
                                <h4>Overview</h4>
                                <p>{selectedService.detailedDescription}</p>
                            </div>

                            <div className="modal-features">
                                <h4>What's Included</h4>
                                <div className="features-grid">
                                    {selectedService.features.map((feature, index) => (
                                        <div key={index} className="feature-item">
                                            <span className="feature-icon">✓</span>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="modal-info">
                                <div className="info-item">
                                    <strong>Duration:</strong> {selectedService.duration}
                                </div>
                                {selectedService.popular && (
                                    <div className="popular-tag">🔥 Most Popular Choice</div>
                                )}
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-outline" onClick={closeModal}>
                                Close
                            </button>
                            <button className="btn btn-primary">
                                Book This Service
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Services;