import React from 'react'
import { NavHashLink } from 'react-router-hash-link';
import { useLocation } from "react-router-dom";
import data from '../data/data.json'

function Navbar() {

    let location = useLocation();

    const { fullName, logo, email, socialLinks } = data.data

    const imagepath = "/images/logo/"

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg" style={{ background: '#1D1D23', padding: '17px' }} data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand p-0" href="#">
                        <img
                            src={imagepath + logo}
                            alt="Vandit Shah - logo"
                            className='me-2 nav-logo'
                        />
                        {fullName}
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup" style={{ fontSize: '17px', marginTop: '10px' }}>
                        <div className="navbar-nav">
                            <NavHashLink className={`${location.pathname}${location.hash}` === `/#top` ? "active1 nav-link mx-2" : `${location.pathname}${location.hash}` === `/` ? "active1 nav-link mx-2" : "nav-link mx-2"} to="#top">
                                Home
                            </NavHashLink>
                            <NavHashLink className={`${location.pathname}${location.hash}` === `/#about` ? "active1 nav-link mx-2" : "nav-link mx-2"} to="#about">
                                About
                            </NavHashLink>
                            <NavHashLink className={`${location.pathname}${location.hash}` === `/#skills` ? "active1 nav-link mx-2" : "nav-link mx-2"} to="#skills">
                                Skills
                            </NavHashLink>
                            <NavHashLink className={`${location.pathname}${location.hash}` === `/#projects` ? "active1 nav-link mx-2" : "nav-link mx-2"} to="#projects">
                                Projects
                            </NavHashLink>
                            <NavHashLink className={`${location.pathname}${location.hash}` === `/#contact` ? "active1 nav-link mx-2" : "nav-link mx-2"} to="#contact">
                                Contact
                            </NavHashLink>
                            <button class="btn hire-btn mx-2" style={{ borderRadius: '5%' }} type="submit"> <a className="hire-a" href={`mailto:` + email}>Hire Me</a> </button>
                        </div>
                    </div>
                </div>
            </nav>
            <div id="contact-left">
                {/* <div id="contact-line" /> */}
                <div id="contact-left-links">
                    <a target='_blank' href={socialLinks.github}>
                        <i className="fab fa-github" />
                    </a>
                    <a target='_blank' href={socialLinks.linkedin}>
                        <i className="fab fa-linkedin-in" />
                    </a>
                    <a target='_blank' href={`mailto:` + email}>
                        <i className="fas fa-envelope" />
                    </a>
                    <a target='_blank' href={socialLinks.instagram}>
                        <i className="fab fa-instagram" />
                    </a>
                </div>
                <div id="contact-line" />
            </div>
        </div>
    )
}

export default Navbar
