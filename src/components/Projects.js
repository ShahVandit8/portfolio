import React from 'react'

// Importing Images of Project 1 
import LMS1 from '../assets/images/projects/LMS/1. Landing Page.png'
import LMS2 from '../assets/images/projects/LMS/2. Course Enrollment Page.png'
import LMS3 from '../assets/images/projects/LMS/3. Student Login Page.png'
import LMS4 from '../assets/images/projects/LMS/4. Student Profile Page.png'
import LMS5 from '../assets/images/projects/LMS/5. My Courses Page.png'
import LMS6 from '../assets/images/projects/LMS/6. Enrolled Courses Page.png'
import LMS7 from '../assets/images/projects/LMS/7. Admin Dashboard.png'
import LMS8 from '../assets/images/projects/LMS/8. Course Management.png'
import LMS9 from '../assets/images/projects/LMS/9. Manage Course Content.png'
import LMS10 from '../assets/images/projects/LMS/10. Manage Course Resources.png'
import LMS11 from '../assets/images/projects/LMS/11. Manage Attendance.png'
import LMS12 from '../assets/images/projects/LMS/12. Enrollment Management.png'
import LMS13 from '../assets/images/projects/LMS/13. Instructor Management.png'
import LMS14 from '../assets/images/projects/LMS/14. Student Management.png'
import LMS15 from '../assets/images/projects/LMS/15. Contact Me Form Messages.png'
import LMS16 from '../assets/images/projects/LMS/16. Instructor Dashboard.png'

// Importing Images of Project 2
import CMS1 from '../assets/images/projects/CMS/1.png'
import CMS2 from '../assets/images/projects/CMS/2.png'
import CMS3 from '../assets/images/projects/CMS/3.png'
import CMS4 from '../assets/images/projects/CMS/4.png'
import CMS5 from '../assets/images/projects/CMS/5.png'
import CMS6 from '../assets/images/projects/CMS/6.png'
import CMS7 from '../assets/images/projects/CMS/7.png'
import CMS8 from '../assets/images/projects/CMS/8.png'
import CMS9 from '../assets/images/projects/CMS/9.png'
import CMS10 from '../assets/images/projects/CMS/10.png'
import CMS11 from '../assets/images/projects/CMS/11.png'

// Importing Images of Project 3
import IMS from '../assets/images/projects/IMS/IMS.jpg'

// Importing Images of Project 4
import Billing from '../assets/images/projects/BillingSystem/Billing.jpg'

// Importing icons for Project
import html from '../assets/images/icons/html.png'
import css from '../assets/images/icons/css.png'
import react from '../assets/images/icons/react.png'
import node from '../assets/images/icons/node.png'
import mdb from '../assets/images/icons/mdb.png'
import open from '../assets/images/icons/open.png'
import mysql from '../assets/images/icons/mysql.png'
import java from '../assets/images/icons/java.png'
import py from '../assets/images/icons/py.png'
import githubgrey from '../assets/images/icons/github-grey.png'

const Projects = () => {
    return (
        <section className="px-2" id="projects">
            <div className="container project-div">
                <div className="title">
                    <p>Projects</p>
                </div>
                <div className="project">

                    {/* Project 1 - LMS */}
                    <div className="card">
                        <div className="row g-0 card-row">
                            <div className="col-lg-5">
                                <div
                                    id="carouselExampleControls"
                                    className="carousel slide"
                                    data-bs-ride="carousel"
                                >
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={LMS1} className="d-block w-100 rounded-start rounded-end" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={LMS2} className="d-block w-100 rounded-start rounded-end" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={LMS3} className="d-block w-100 rounded-start rounded-end" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={LMS4} className="d-block w-100 rounded-start rounded-end" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={LMS5} className="d-block w-100 rounded-start rounded-end" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={LMS6} className="d-block w-100 rounded-start rounded-end" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={LMS7} className="d-block w-100 rounded-start rounded-end" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={LMS8} className="d-block w-100 rounded-start rounded-end" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={LMS9} className="d-block w-100 rounded-start rounded-end" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={LMS10} className="d-block w-100 rounded-start rounded-end" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={LMS11} className="d-block w-100 rounded-start rounded-end" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={LMS12} className="d-block w-100 rounded-start rounded-end" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={LMS13} className="d-block w-100 rounded-start rounded-end" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={LMS14} className="d-block w-100 rounded-start rounded-end" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={LMS15} className="d-block w-100 rounded-start rounded-end" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={LMS16} className="d-block w-100 rounded-start rounded-end" alt="..." />
                                        </div>
                                    </div>
                                    <button
                                        className="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#carouselExampleControls"
                                        data-bs-slide="prev"
                                    >
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button
                                        className="carousel-control-next"
                                        type="button"
                                        data-bs-target="#carouselExampleControls"
                                        data-bs-slide="next"
                                    >
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>

                            </div>
                            <div className="col-lg-7">
                                <div className="card-body">
                                    <h5 className="card-title">THE DIGITAL WORKSTATION</h5>
                                    <h3 className="card-main-title">Learning Management System</h3>
                                    <div className="tech">
                                        <img src={html} className="skill-icon me-2"></img>
                                        <img src={css} className="skill-icon mx-2"></img>
                                        <img src={react} className="skill-icon mx-2"></img>
                                        <img src={node} className="skill-icon mx-2"></img>
                                        <img src={mdb} className="skill-icon mx-2"></img>
                                    </div>
                                    <p className="card-text">
                                        LMS for an offline learning institute, facilitating student enrollment, progress tracking, and instructor interaction.
                                    </p>
                                    <a href="https://thedigitalworkstation.netlify.app/" target="_blank" type="button" className="btn btn-lg skill-btn">
                                        <img src={open} className="skill-icon mx-2"></img> <span className="me-2">Live</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 - CMS */}
                    <div className="card">
                        <div className="row g-0 card-row flex-row-reverse">
                            <div className="col-lg-5">
                                <div
                                    id="carouselExampleControls1"
                                    className="carousel slide"
                                    data-bs-ride="carousel"
                                >
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={CMS1} className="d-block w-100 rounded-start rounded-end" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={CMS2} className="d-block w-100 rounded-start rounded-end" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={CMS3} className="d-block w-100 rounded-start rounded-end" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={CMS4} className="d-block w-100 rounded-start rounded-end" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={CMS5} className="d-block w-100 rounded-start rounded-end" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={CMS6} className="d-block w-100 rounded-start rounded-end" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={CMS7} className="d-block w-100 rounded-start rounded-end" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={CMS8} className="d-block w-100 rounded-start rounded-end" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={CMS9} className="d-block w-100 rounded-start rounded-end" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={CMS10} className="d-block w-100 rounded-start rounded-end" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={CMS11} className="d-block w-100 rounded-start rounded-end" alt="..." />
                                        </div>
                                    </div>
                                    <button
                                        className="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#carouselExampleControls1"
                                        data-bs-slide="prev"
                                    >
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button
                                        className="carousel-control-next"
                                        type="button"
                                        data-bs-target="#carouselExampleControls1"
                                        data-bs-slide="next"
                                    >
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>

                            </div>
                            <div className="col-lg-7">
                                <div className="card-body">
                                    <h5 className="card-title">78° DEGREE CAFE</h5>
                                    <h3 className="card-main-title">Cafe Management System</h3>
                                    <div className="tech">
                                        <img src={html} className="skill-icon me-2"></img>
                                        <img src={css} className="skill-icon mx-2"></img>
                                        <img src={react} className="skill-icon mx-2"></img>
                                        <img src={node} className="skill-icon mx-2"></img>
                                        <img src={mdb} className="skill-icon mx-2"></img>
                                    </div>
                                    <p className="card-text">
                                        CMS for local cafe to streamline its online ordering system by integrated QR codes for Tables, Managing Orders, Kitchen Tickets and Customer Management.
                                    </p>
                                    <a href="https://78degreescafe.netlify.app/" target="_blank" type="button" className="btn btn-lg skill-btn">
                                        <img src={open} className="skill-icon mx-2"></img> <span className="me-2">Live</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 - Inventory Management */}
                    <div className="card">
                        <div className="row g-0 card-row">
                            <div className="col-lg-5">
                                <img src={IMS} className="img-fluid rounded-start rounded-end" alt="..." />

                            </div>
                            <div className="col-lg-7">
                                <div className="card-body">
                                    <h5 className="card-title">DESKTOP APPLICATION</h5>
                                    <h3 className="card-main-title">Inventory Management System</h3>
                                    <div className="tech">
                                        <img src={java} className="skill-icon me-2"></img>
                                        <img src={mysql} className="skill-icon mx-2"></img>
                                    </div>
                                    <p className="card-text">
                                        Created a comprehensive inventory management system using Java, Swing, and JDBC.
                                    </p>
                                    <a href="https://github.com/ShahVandit8/Inventory_Management_System" target="_blank" type="button" className="btn btn-lg skill-btn">
                                        <img src={githubgrey} className="skill-icon mx-2"></img> <span className="me-2">Source</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 4 - Billing System */}
                    <div className="card">
                        <div className="row g-0 card-row flex-row-reverse">
                            <div className="col-lg-5">
                                <img src={Billing} className="img-fluid rounded-start rounded-end" alt="..." />
                            </div>
                            <div className="col-lg-7">
                                <div className="card-body">
                                    <h5 className="card-title">DESKTOP APPLICATION</h5>
                                    <h3 className="card-main-title">Billing System</h3>
                                    <div className="tech">
                                        <img src={py} className="skill-icon me-2"></img>
                                    </div>
                                    <p className="card-text">
                                    Developed a billing system in Python for small businesses, emphasizing ease of use and efficiency..
                                    </p>
                                    <a href="https://github.com/ShahVandit8/Billing_System_Project" target="_blank" type="button" className="btn btn-lg skill-btn">
                                        <img src={githubgrey} className="skill-icon mx-2"></img> <span className="me-2">Source</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
