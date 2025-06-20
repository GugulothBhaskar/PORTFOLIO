import React, { useState } from 'react';

function Skills() {
    const [open, setOpen] = useState(null);
    const skills = [
        {
            title: 'Programming Languages',
            details: 'C, Java, Python, JavaScript, HTML+CSS',
            icon: '💻',
        },
        {
            title: 'Libraries',
            details: 'ReactJs',
            icon: '📚',
        },
        {
            title: 'Frameworks',
            details: 'Spring Boot, Bootstrap',
            icon: '🧩',
        },
        {
            title: 'Cloud/Databases',
            details: 'MySQL',
            icon: '☁️',
        },
        {
            title: 'Relevant Coursework',
            details: 'Data Structures & Algorithms, Operating Systems, Object-Oriented Programming Languages (OOPS), Database Management System, Software Engineering, Machine Learning',
            icon: '📖',
        },
        {
            title: 'Areas of Interest',
            details: 'Web Design and Development, Competitive Programming',
            icon: '🎨',
        },
        {
            title: 'Soft Skills',
            details: 'Problem Solving, Self-learning, Presentation, Adaptability, Leadership, Team Work',
            icon: '🤝',
        },
        {
            title: 'Hobbies',
            details: 'Listening Songs, Coding, Photography',
            icon: '🎵',
        },
    ];
    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(120deg, #f7f7f7 0%, #e3e3e3 100%)',
            position: 'relative',
            paddingBottom: '40px',
        }}>
            <div className="container d-flex flex-column align-items-center justify-content-center" style={{ position: 'relative', zIndex: 2, minHeight: '100vh' }}>
                <h1 className="fw-bold mb-3" style={{color: '#d90429'}}>My Skills</h1>
                <p className="lead text-center mb-4" style={{ maxWidth: 700, color: '#18191a' }}>
                    Click on each skill category to view more details.
                </p>
                <div className="list-group w-100" style={{maxWidth: 600, width: '100%'}}>
                    {skills.map((skill, idx) => (
                        <div key={idx} className="mb-2">
                            <button
                                className="list-group-item list-group-item-action bg-light text-dark d-flex justify-content-between align-items-center"
                                style={{ cursor: 'pointer', border: 'none', borderRadius: '8px', fontWeight: '500', fontSize: '1.1rem', boxShadow: open === idx ? '0 2px 8px rgba(0,0,0,0.08)' : 'none', transition: 'box-shadow 0.2s' }}
                                onClick={() => setOpen(open === idx ? null : idx)}
                                aria-expanded={open === idx}
                            >
                                <span><span style={{fontSize: '1.3rem', marginRight: 8}}>{skill.icon}</span>{skill.title}</span>
                                <span style={{fontSize: '1.2rem'}}>{open === idx ? '▲' : '▼'}</span>
                            </button>
                            {open === idx && (
                                <div className="bg-white p-3 border-bottom rounded-bottom" style={{color: '#18191a', border: '1px solid #e3e3e3', borderTop: 'none', fontSize: '1rem'}}>
                                    {skill.details}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;