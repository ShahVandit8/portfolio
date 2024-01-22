import React from 'react'

import logo from '../assets/images/logo.png'

import { NavHashLink } from 'react-router-hash-link';

import {
    useLocation
} from "react-router-dom";


function Navbar() {

    let location = useLocation();

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg" style={{ background: '#1D1D23', padding: '17px' }} data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand p-0" href="#">
                        <img
                            src={logo}
                            alt="Bootstrap"
                            className='me-2 nav-logo'
                        />
                        <span>V</span>andit&nbsp;<span>S</span>hah
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
                            <NavHashLink className={`${location.pathname}${location.hash}` ===   `/#top` ? "active1 nav-link mx-2" : `${location.pathname}${location.hash}` ===   `/` ? "active1 nav-link mx-2" : "nav-link mx-2"} to="#top">
                                Home
                            </NavHashLink>
                            <NavHashLink className={`${location.pathname}${location.hash}` ===   `/#about` ? "active1 nav-link mx-2" : "nav-link mx-2"} to="#about">
                                About
                            </NavHashLink>
                            <NavHashLink className={`${location.pathname}${location.hash}` ===   `/#skills` ? "active1 nav-link mx-2" : "nav-link mx-2"} to="#skills">
                                Skills
                            </NavHashLink>
                            <NavHashLink className={`${location.pathname}${location.hash}` ===   `/#education` ? "active1 nav-link mx-2" : "nav-link mx-2"} to="#education">
                                Experience
                            </NavHashLink>
                            <NavHashLink className={`${location.pathname}${location.hash}` ===   `/#projects` ? "active1 nav-link mx-2" : "nav-link mx-2"} to="#projects">
                                Projects
                            </NavHashLink>
                            <NavHashLink className={`${location.pathname}${location.hash}` ===   `/#contact` ? "active1 nav-link mx-2" : "nav-link mx-2"} to="#contact">
                                Contact
                            </NavHashLink>
                            <button class="btn hire-btn mx-2" style={{ borderRadius: '5%' }} type="submit"> <a className="hire-a" href={`mailto:shahvandit8@gmail.com`}>Hire Me</a> </button>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
