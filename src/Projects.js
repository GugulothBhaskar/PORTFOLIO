import React, { useState } from 'react';

// Helper for tech badges
const TechBadge = ({ tech }) => (
    <span style={{
        display: 'inline-block',
        background: '#e3e3e3',
        color: '#222',
        borderRadius: '12px',
        padding: '2px 10px',
        fontSize: '0.95rem',
        marginRight: 6,
        marginBottom: 4,
        fontWeight: 500
    }}>{tech}</span>
);

function Projects() {
    const [open, setOpen] = useState(null);
    const projects = [
        {
            title: 'Health Tracker Application',
            summary: 'A full-stack web platform to track and manage personal health metrics, workouts, and nutrition with secure authentication and interactive dashboards.',
            role: 'Full Stack Developer',
            features: [
                'Implemented JWT-based authentication with Spring Security for secure user registration, login, and session management.',
                'Developed modules for logging daily health metrics, water intake, nutrition, and workout routines, with real-time dashboard updates.',
                'Optimized backend performance using efficient JPA queries and MySQL for reliable data storage and retrieval.',
                'Designed a responsive and user-friendly interface using React and React-Bootstrap.',
                'Integrated custom error handling and logging for improved debugging and user feedback.'
            ],
            tech: ['React', 'React-Bootstrap', 'Spring Boot', 'MySQL', 'JWT', 'Spring Security'],
            github: 'https://github.com/Siddarth0533/Health-Tracker-application.git'
        },
        {
            title: 'TodoList Application',
            summary: 'A full-stack Todo List application enabling users to manage daily tasks efficiently with a clean UI and robust backend, supporting CRUD operations and persistent storage.',
            role: 'Full Stack Developer',
            features: [
                'Developed a RESTful backend using Spring Boot for task management and data persistence.',
                'Designed a responsive frontend with React, providing intuitive task creation, editing, and deletion.',
                'Implemented seamless integration between frontend and backend using REST APIs.',
                'Enabled real-time updates and smooth user experience with state management in React.',
                'Configured deployment scripts and environment for easy local and cloud deployment.'
            ],
            tech: ['React', 'Spring Boot', 'Java', 'REST API', 'CSS', 'Maven'],
            github: 'https://github.com/Siddarth0533/todo-list-application.git',
            live: 'https://todo-list-manger.netlify.app/'
        },
        {
            title: 'Portfolio Website',
            summary: 'A modern, responsive personal portfolio website to showcase projects, skills, and contact information, with professional design and smooth navigation.',
            role: 'Full Stack Developer',
            features: [
                'Designed and developed a visually appealing, fully responsive portfolio using React and React-Bootstrap.',
                'Implemented animated transitions, mobile-first layouts, and accessible navigation.',
                'Integrated a contact form with EmailJS for direct communication.',
                'Deployed the site on Netlify with custom domain and HTTPS.',
                'Optimized for SEO and fast load times.'
            ],
            tech: ['React', 'React-Bootstrap', 'CSS', 'EmailJS', 'Netlify'],
            github: 'https://github.com/Siddarth0533/sid-portfolio.git',
            live: 'https://sidharthm-portfolio.netlify.app/'
        },
        {
            title: 'Simple Calculator',
            summary: 'A web-based calculator for basic arithmetic operations, designed with a clean and intuitive interface.',
            role: 'Frontend Developer',
            features: [
                'Supports addition, subtraction, multiplication, and division with real-time display updates.',
                'Features clear (AC), delete (DEL), and equals (=) buttons for easy operation.',
                'Responsive and visually appealing UI using custom CSS and fieldset layout.',
                'Handles multi-digit and decimal calculations, with error handling for invalid expressions.'
            ],
            tech: ['HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/Siddarth0533/simple-calculator.git',
            live: 'https://sid-simple-calculator.netlify.app/'
        },
        {
            title: 'ATM Simulator',
            summary: 'A console-based Java application that simulates ATM banking operations with secure PIN authentication and transaction management.',
            role: 'Java Developer',
            features: [
                'Implements secure PIN verification with account lockout after multiple failed attempts.',
                'Supports account balance inquiry, cash withdrawal, cash deposit, PIN change, and transaction history.',
                'Maintains transaction history for all user actions, including deposits and withdrawals.',
                'Ensures only valid transactions (multiples of 100, sufficient balance) are processed.',
                'Provides clear user feedback and error handling for invalid operations.'
            ],
            tech: ['Java', 'Java Util', 'Java Time (LocalDate)', 'Console I/O'],
            github: 'https://github.com/Siddarth0533/ATMMACHINE.git'
        }
        
    ];
    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(120deg, #f7f7f7 0%, #e3e3e3 100%)',
            position: 'relative',
            paddingBottom: '40px',
        }}>
            <div className="container d-flex flex-column align-items-center justify-content-center" style={{ position: 'relative', zIndex: 2, minHeight: '100vh' }}>
                <h1 className="fw-bold mb-3" style={{color: '#d90429'}}>My Projects</h1>
                <p className="lead text-center mb-4" style={{ maxWidth: 700, color: '#18191a' }}>
                    Here are some of the projects I've worked on. Click on the project name to view more details.
                </p>
                <div className="list-group w-100" style={{maxWidth: 600, width: '100%'}}>
                    {projects.map((project, idx) => (
                        <div key={idx} className="mb-2">
                            <button
                                className="list-group-item list-group-item-action bg-light text-dark d-flex justify-content-between align-items-center"
                                style={{ cursor: 'pointer', border: 'none', borderRadius: '8px', fontWeight: '500', fontSize: '1.1rem', boxShadow: open === idx ? '0 2px 8px rgba(0,0,0,0.08)' : 'none', transition: 'box-shadow 0.2s' }}
                                onClick={() => setOpen(open === idx ? null : idx)}
                                aria-expanded={open === idx}
                            >
                                <span>{project.title}</span>
                                <span style={{fontSize: '1.2rem'}}>{open === idx ? '▲' : '▼'}</span>
                            </button>
                            {open === idx && (
                                <div className="bg-white p-4 border-bottom rounded-bottom" style={{color: '#18191a', border: '1px solid #e3e3e3', borderTop: 'none', fontSize: '1rem'}}>
                                    <div style={{marginBottom: 8}}><strong>Summary:</strong> {project.summary}</div>
                                    <div style={{marginBottom: 8}}><strong>Role:</strong> {project.role}</div>
                                    <ul className="mb-2 ps-3 text-secondary" style={{fontSize: '1rem'}}>
                                        {project.features.map((f, i) => <li key={i}>{f}</li>)}
                                    </ul>
                                    <div style={{marginBottom: 8}}>
                                        <strong>Tech Stack:</strong> {project.tech.map((t, i) => <TechBadge key={i} tech={t} />)}
                                    </div>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm mt-2">View on GitHub</a>
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-live-view btn-sm mt-2 ms-2">Live View</a>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;