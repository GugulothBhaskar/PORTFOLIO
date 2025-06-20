import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home()
{
    const navigate = useNavigate();

    return(
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(120deg, #f7f7f7 0%, #e3e3e3 100%)',
            position: 'relative',
            fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif"
        }}>
            <style>{`
                .fade-in-up {
                    opacity: 0;
                    transform: translateY(40px);
                    animation: fadeInUp 0.8s cubic-bezier(.4,0,.2,1) forwards;
                }
                .fade-in-up.delay-1 { animation-delay: 0.2s; }
                .fade-in-up.delay-2 { animation-delay: 0.4s; }
                .fade-in-up.delay-3 { animation-delay: 0.6s; }
                .fade-in-up.delay-4 { animation-delay: 0.8s; }
                @keyframes fadeInUp { to { opacity: 1; transform: none; } }
                .container-home {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  min-height: 100vh;
                  padding: 3rem 2rem;
                  gap: 3.5rem;
                }
                .flex-fill {
                  min-width: 320px;
                  max-width: 600px;
                  text-align: left;
                  margin-bottom: 0;
                }
                .home-img {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin-top: 0;
                  margin-bottom: 0;
                }
                .home-img img {
                  max-width: 350px;
                  width: 100%;
                  height: auto;
                  border: 4px solid #222;
                  background: #fff;
                }
                @media (max-width: 991px) {
                  .container-home {
                    flex-direction: column;
                    min-height: auto !important;
                    height: auto !important;
                    padding: 2rem 0.5rem 1.5rem 0.5rem !important;
                    gap: 1.5rem;
                  }
                  .flex-fill {
                    width: 100%;
                    text-align: center;
                    margin-bottom: 0.5rem !important;
                  }
                  .home-img {
                    margin-top: 0.5rem !important;
                    display: flex;
                    justify-content: center;
                  }
                  .home-img img {
                    max-width: 160px;
                    width: 60vw;
                    height: auto;
                    border-width: 3px !important;
                  }
                  .fade-in-up, .lead, h1, p, button {
                    text-align: center !important;
                  }
                  h1 {
                    font-size: 2.5rem !important;
                  }
                  .lead {
                    font-size: 1rem !important;
                  }
                  button.btn-lg {
                    font-size: 1rem !important;
                    padding: 0.6rem 1.2rem !important;
                  }
                  .home-content-spacer {
                    margin-bottom: 1.2rem;
                  }
                }
                @media (max-width: 480px) {
                  .container-home {
                    padding: 1rem 0.1rem;
                  }
                  .home-img img {
                    max-width: 100px;
                  }
                  h1 {
                    font-size: 1.1rem !important;
                  }
                  .lead {
                    font-size: 0.92rem !important;
                  }
                }
            `}</style>
            <div className="container-home">
                <div className="flex-fill">
                    <h1 className="fade-in-up delay-1 home-content-spacer" style={{color: '#d90429', fontWeight: 'bold', fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif"}}>Hi, I'm Sidharth</h1>
                    <p className="lead fade-in-up delay-2 home-content-spacer" style={{color: '#18191a', fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif"}}>
                        <span style={{
                            fontWeight: 700,
                            color: '#18191a',
                            background: '#f3f3f3',
                            borderLeft: '4px solid #d90429',
                            padding: '4px 14px',
                            borderRadius: '4px',
                            fontSize: '1.25rem',
                            display: 'inline-block',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                        }}>
                            I am a Full Stack Developer
                        </span><br />
                        <span style={{fontWeight: 400}}>
                            with a passion for building responsive web applications and seamless user experiences. I specialize in JavaScript, React, and Node.js, and enjoy turning complex problems into elegant solutions. Let's create something amazing together!
                        </span>
                    </p>
                    <p className="fade-in-up delay-3 home-content-spacer" style={{color: '#18191a', fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif", fontWeight: 500, fontSize: '1.1rem'}}>Check out my projects and skills.</p>
                    <button
                      className="btn btn-primary btn-lg fade-in-up delay-4 home-content-spacer"
                      style={{fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif"}}
                      onClick={() => navigate('/about')}
                    >
                      Know more
                    </button>
                </div>
                <div className="fade-in-up delay-4 home-img">
                    <img src="profile.webp" alt="Profile" className="rounded-circle shadow" />  
                </div>
            </div>
        </div>
    )
}

export default Home;
