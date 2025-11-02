import React from "react";
import "./Trainers.css";

const Trainers = () => {
    const trainers = [
        {
            name: "Mike Johnson",
            specialty: "Strength Training",
            image:
                "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            experience: "8 years",
        },
        {
            name: "Sarah Miller",
            specialty: "Yoga & Pilates",
            image:
                "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            experience: "6 years",
        },
        {
            name: "Chris Davis",
            specialty: "CrossFit",
            image:
                "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            experience: "10 years",
        },
        {
            name: "Emily Wilson",
            specialty: "Nutrition & Wellness",
            image:
                "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            experience: "7 years",
        },
        {
            name: "David Parker",
            specialty: "Bodybuilding Coach",
            image:
                "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            experience: "9 years",
        },
        {
            name: "Sophia Lee",
            specialty: "Zumba & Dance Fitness",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRClV8o1gP0ogncOH3vLBBuSIputVilv_aktQ&s",
            experience: "5 years",
        },
        {
            name: "Ryan Taylor",
            specialty: "Personal Trainer",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQSJaJWx_JMEo1MHOpY9HL_Zs6v0EslY-ddA&s",
            experience: "12 years",
        },
        {
            name: "Olivia Brown",
            specialty: "Cardio & Endurance",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAJll63Vil86-kmB4ZKiCBib5vuivzoxpv0g&s",
            experience: "6 years",
        },
    ];

    return (
        <section id="trainers" className="trainers section">
            <div className="container">
                <h2 className="section-title">
                    Meet Our <span>Trainers</span>
                </h2>
                <p className="section-subtitle">
                    Professional, Certified & Passionate About Your Fitness Goals
                </p>

                <div className="trainers-grid">
                    {trainers.map((trainer, index) => (
                        <div key={index} className="trainer-card fade-in">
                            <div className="trainer-image">
                                <img src={trainer.image} alt={trainer.name} />
                                <div className="trainer-overlay">
                                    <div className="social-links">
                                        <a href="#" className="social-icon">📘</a>
                                        <a href="#" className="social-icon">📷</a>
                                        <a href="#" className="social-icon">🐦</a>
                                    </div>
                                </div>
                            </div>
                            <div className="trainer-info">
                                <h3>{trainer.name}</h3>
                                <p className="specialty">{trainer.specialty}</p>
                                <p className="experience">Experience: {trainer.experience}</p>
                                <button className="trainer-btn">View Profile</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trainers;
