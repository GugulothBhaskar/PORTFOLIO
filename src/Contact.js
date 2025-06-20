import React, { useState } from "react";
import emailjs from 'emailjs-com';

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [sendError, setSendError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
        setSendError(''); // clear send error on change
    };

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = 'Name is required.';
        if (!form.email.trim()) newErrors.email = 'Email is required.';
        else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = 'Enter a valid email.';
        if (!form.message.trim()) newErrors.message = 'Message is required.';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        emailjs.send(
            'service_inve529',
            'template_6qt6oz6',
            form,
            '46QAYVbeijG4_Ufje'
        ).then(
            (result) => {
                setSubmitted(true);
                setSendError('');
            },
            (error) => {
                setSendError('Failed to send message. Please try again.');
            }
        );
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(120deg, #f7f7f7 0%, #e3e3e3 100%)',
            position: 'relative',
            paddingBottom: '40px',
            fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif"
        }}>
            <div className="container d-flex flex-column align-items-center justify-content-center px-3" style={{ position: 'relative', zIndex: 2, minHeight: '100vh' }}>
                <div className="rounded-4 shadow p-4 mb-4 section-bg w-100" style={{ maxWidth: 500, marginTop: 40, width: '100%' }}>
                    <div className="text-center mb-4">
                        <img src="profile.webp" alt="Sidharth" className="rounded-circle shadow mb-2" style={{width: 90, height: 90, objectFit: 'cover', border: '3px solid #222', background: '#fff'}} />
                        <h1 className="fw-bold mb-2" style={{color: '#d90429', fontSize: '2rem'}}>Contact Me</h1>
                        <p className="lead mb-3" style={{color: '#18191a', fontSize: '1.1rem'}}>Feel free to reach out for collaboration, project inquiries, or just to say hello!</p>
                    </div>
                    <hr style={{borderTop: '2px solid #b0b3b8', opacity: 0.7, margin: '0 0 18px 0'}} />
                    {submitted ? (
                        <div className="alert alert-success text-center">Thank you for reaching out! I'll get back to you soon.</div>
                    ) : (
                        <form onSubmit={handleSubmit} noValidate>
                            {sendError && <div className="alert alert-danger text-center mb-3">{sendError}</div>}
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className={`form-control${errors.name ? ' is-invalid' : ''}`} name="name" value={form.name} onChange={handleChange} required />
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className={`form-control${errors.email ? ' is-invalid' : ''}`} name="email" value={form.email} onChange={handleChange} required />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea className={`form-control${errors.message ? ' is-invalid' : ''}`} name="message" rows="4" value={form.message} onChange={handleChange} required></textarea>
                                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                            </div>
                            <button type="submit" className="btn btn-primary w-100" style={{fontWeight: 600, fontSize: '1.1rem'}}>
                                <span role="img" aria-label="Send" style={{marginRight: 6}}>✉️</span>Send Message
                            </button>
                        </form>
                    )}
                    <hr style={{borderTop: '2px solid #b0b3b8', opacity: 0.7, margin: '18px 0'}} />
                    <div className="mb-3 text-center" style={{color: '#18191a'}}>
                        <div><span role="img" aria-label="Email">📧</span> <strong>Email:</strong> <a href="mailto:siddarthsiddu053@gmail.com" className="text-primary">siddarthsiddu053@gmail.com</a></div>
                        <div><span role="img" aria-label="Location">📍</span> <strong>Location:</strong> Mancherial, Telangana, India</div>
                    </div>
                    <div className="d-flex gap-3 justify-content-center">
                        <a href="https://www.linkedin.com/in/sidhartha-munimadugula-6355b8313/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm" style={{fontWeight: 500}}><span role="img" aria-label="LinkedIn" style={{marginRight: 4}}>🔗</span>LinkedIn</a>
                        <a href="https://github.com/Siddarth0533" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm" style={{fontWeight: 500}}><span role="img" aria-label="GitHub" style={{marginRight: 4}}>💻</span>GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;