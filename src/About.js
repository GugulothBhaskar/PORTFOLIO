import React from 'react';
function About() {
    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(120deg, #f7f7f7 0%, #e3e3e3 100%)',
            position: 'relative',
            paddingBottom: '40px',
            fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif"
        }}>
            <div className="container d-flex flex-column align-items-center justify-content-center px-3" style={{ position: 'relative', zIndex: 2, minHeight: '100vh' }}>
                <div className="text-center mb-4" style={{maxWidth: 700, color: '#18191a', width: '100%'}}>
                    <img src="profile.webp" alt="Sidharth" className="rounded-circle shadow mb-3" style={{width: 140, height: 140, objectFit: 'cover', border: '4px solid #222', background: '#fff', marginTop: '32px', maxWidth: '90vw'}} />
                    <h1 className="fw-bold mb-1" style={{color: '#d90429', fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif"}}>Sidhartha Munimadugula</h1>
                    <div style={{fontWeight: 500, fontSize: '1.1rem'}}>Full Stack Developer</div>
                    <div style={{fontSize: '1rem', marginBottom: 6}}>📞 +91-6302742549 | ✉️ siddarthsiddu053@gmail.com</div>
                    <div style={{marginBottom: 10}}>
                        <a href="https://github.com/Siddarth0533" target="_blank" rel="noopener noreferrer" style={{color: '#d90429', fontWeight: 500}}>GitHub</a> |
                        <a href="https://www.linkedin.com/in/sidhartha-munimadugula/" target="_blank" rel="noopener noreferrer" style={{color: '#d90429', fontWeight: 500}}> LinkedIn</a>
                    </div>
                </div>
                <div className="rounded-4 shadow p-4 mb-4 section-bg w-100 fade-in-up" style={{maxWidth: 700}}>
                    <hr style={{borderTop: '2px solid #b0b3b8', opacity: 0.7, margin: '0 0 18px 0'}} />
                    <h5 className="fw-bold mb-2" style={{color: '#d90429'}}>Professional Summary</h5>
                    <ul style={{color: '#18191a', paddingLeft: 24}}>
                        <li>Passionate Full Stack Developer with a strong foundation in computer science.</li>
                        <li>Experienced in building impactful web applications and thriving in collaborative environments.</li>
                        <li>Driven by curiosity, creativity, and a commitment to continuous learning.</li>
                    </ul>
                    <hr style={{borderTop: '2px solid #b0b3b8', opacity: 0.7, margin: '18px 0'}} />
                    <h5 className="fw-bold mb-2" style={{color: '#d90429'}}>Education</h5>
                    <ul className="list-unstyled mb-3" style={{color: '#18191a'}}>
                        <li><strong>Bachelor of Technology in Computer Science and Engineering</strong></li>
                        <li>Kakatiya Institute of Technology and Science, Warangal</li>
                        <li>CGPA: 8.91</li>
                        <li>June 2025 – Present 2026</li>
                    </ul>
                    <hr style={{borderTop: '2px solid #b0b3b8', opacity: 0.7, margin: '18px 0'}} />
                    <h5 className="fw-bold mb-2" style={{color: '#d90429'}}>Professional Experience</h5>
                    <ul style={{color: '#18191a', paddingLeft: 24}}>
                        <li><strong>Health Tracker Application</strong> (Feb 2024 – June 2025)</li>
                        <li>Developed a web platform to track and manage personal health metrics, workouts, and nutrition.</li>
                        <li>Implemented JWT-based authentication with Spring Security for secure user management.</li>
                        <li>Built modules for daily health metrics, water intake, nutrition, and workout routines with real-time dashboards.</li>
                        <li>Optimized backend performance using JPA queries and MySQL.</li>
                        <li>Designed a responsive UI with React and React-Bootstrap.</li>
                        <li>Integrated custom error handling and logging.</li>
                        <li><strong>Tech Stack:</strong> React, React-Bootstrap, Spring Boot, MySQL, JWT, Spring Security.</li>
                    </ul>
                    <hr style={{borderTop: '2px solid #b0b3b8', opacity: 0.7, margin: '18px 0'}} />
                    <h5 className="fw-bold mb-2" style={{color: '#d90429'}}>Personal Values & Activities</h5>
                    <ul style={{color: '#18191a', paddingLeft: 24}}>
                        <li>Continuous learning and self-improvement</li>
                        <li>Teamwork, open communication, and knowledge sharing</li>
                        <li>Active in coding competitions, hackathons, and tech community events</li>
                        <li>Volunteer for peer mentoring</li>
                    </ul>
                    <hr style={{borderTop: '2px solid #b0b3b8', opacity: 0.7, margin: '18px 0'}} />
                    <h5 className="fw-bold mb-2" style={{color: '#d90429'}}>Certifications</h5>
                    <ul style={{color: '#18191a', paddingLeft: 24}}>
                        <li><b>🏅</b> Introduction to Networks (CISCO)</li>
                        <li><b>🏅</b> Introduction to Cyber Security (CISCO)</li>
                    </ul>
                    <hr style={{borderTop: '2px solid #b0b3b8', opacity: 0.7, margin: '18px 0'}} />
                    <h5 className="fw-bold mb-2" style={{color: '#d90429'}}>Achievements</h5>
                    <ul style={{color: '#18191a', paddingLeft: 24}}>
                        <li><b>🏆</b> Solved 200+ problems on LeetCode to strengthen problem-solving and coding skills.</li>
                    </ul>
                    <div className="text-center mt-3" style={{fontWeight: 500, color: '#d90429', fontSize: '1.1rem'}}>
                        Let’s connect and build something great together!
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;