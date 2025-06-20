// Navbar.js - Navigation bar for the portfolio
import React from 'react';
import { NavLink } from 'react-router-dom';

// Navbar component for site navigation and resume download
function Navbar()
{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-body pe-5 sticky-top" style={{background: 'linear-gradient(90deg, #232526 0%, #414345 100%)', boxShadow: '0 2px 8px rgba(0,0,0,0.2)', zIndex: 1050}}>
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">
                    <span style={{color: 'red', fontWeight: 'bold'}}>SID'S</span> PORTFOLIO
                </span>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style={{border: '2px solid #fff', background: '#d90429', marginRight: 8}}>
                    <span className="navbar-toggler-icon" style={{filter: 'invert(1)'}}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <NavLink className={({ isActive }) => isActive ? "nav-link active border-bottom border-2 border-danger me-3" : "nav-link me-3"} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "nav-link active border-bottom border-2 border-danger me-3" : "nav-link me-3"} to="/about">About</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "nav-link active border-bottom border-2 border-danger me-3" : "nav-link me-3"} to="/projects">Projects</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "nav-link active border-bottom border-2 border-danger me-3" : "nav-link me-3"} to="/skills">Skills</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "nav-link active border-bottom border-2 border-danger me-3" : "nav-link me-3"} to="/contact">Contact</NavLink>
                    </div>
                        <a href="/resume.pdf" download className="btn btn-outline-light">Download Resume</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;