import React from 'react'

// Importing icons for Skills Section 
import html from '../assets/images/icons/html.png'
import css from '../assets/images/icons/css.png'
import js from '../assets/images/icons/javascript.png'
import react from '../assets/images/icons/react.png'
import bs from '../assets/images/icons/bs.png'
import tailwind from '../assets/images/icons/tailwind.png'
import next from '../assets/images/icons/next.png'
import node from '../assets/images/icons/node.png'
import express from '../assets/images/icons/express.png'
import npm from '../assets/images/icons/npm.png'
import mdb from '../assets/images/icons/mdb.png'
import mysql from '../assets/images/icons/mysql.png'
import py from '../assets/images/icons/py.png'
import java from '../assets/images/icons/java.png'
import git from '../assets/images/icons/git.png'
import github from '../assets/images/icons/github.png'
import netlify from '../assets/images/icons/netlify.png'
import ps from '../assets/images/icons/ps.png'
import ill from '../assets/images/icons/ill.png'

function Skills() {
    return (
        <section className="px-2" id="skills">
            <div className="container skill-div">
                <div className="title">
                    <p>Skills</p>
                </div>
                <div className="skill-content">
                    <div className="experience-details-container">
                        <div className="about-containers">
                            <div className="details-container">
                                <h2 className="experience-sub-title">Frontend</h2>
                                <div className="article-container">
                                        <button type="button" className="btn btn-lg skill-btn" disabled>
                                            <img src={react} className="skill-icon mx-2"></img> React
                                        </button>
                                        <button type="button" className="btn btn-lg skill-btn" disabled>
                                            <img src={html} className="skill-icon mx-2"></img> HTML
                                        </button>
                                        <button type="button" className="btn btn-lg skill-btn" disabled>
                                            <img src={css} className="skill-icon mx-2"></img> CSS
                                        </button>
                                        <button type="button" className="btn btn-lg skill-btn" disabled>
                                            <img src={js} className="skill-icon mx-2"></img> JavaScript
                                        </button>
                                        <button type="button" className="btn btn-lg skill-btn" disabled>
                                            <img src={bs} className="skill-icon mx-2"></img> Bootstrap
                                        </button>
                                        <button type="button" className="btn btn-lg skill-btn" disabled>
                                            <img src={tailwind} className="skill-icon mx-2"></img> Tailwind
                                        </button>
                                        <button type="button" className="btn btn-lg skill-btn" disabled>
                                            <img src={next} className="skill-icon mx-2"></img> Next Js
                                        </button>
                                </div>
                            </div>

                            <div className="details-container">
                                <h2 className="experience-sub-title">Backend</h2>
                                <div className="article-container">
                                        <button type="button" className="btn btn-lg skill-btn" disabled>
                                            <img src={node} className="skill-icon mx-2"></img> Node Js
                                        </button>
                                        <button type="button" className="btn btn-lg skill-btn" disabled>
                                            <img src={express} className="skill-icon mx-2"></img> Express Js
                                        </button>
                                        <button type="button" className="btn btn-lg skill-btn" disabled>
                                            <img src={npm} className="skill-icon mx-2"></img> NPM
                                        </button>
                                        <button type="button" className="btn btn-lg skill-btn" disabled>
                                            <img src={mdb} className="skill-icon mx-2"></img> MongoDB
                                        </button>
                                        <button type="button" className="btn btn-lg skill-btn" disabled>
                                            <img src={mysql} className="skill-icon mx-2"></img> MySQL
                                        </button>
                                </div>
                            </div>

                            <div className="details-container">
                                <h2 className="experience-sub-title">Others</h2>
                                <div className="article-container">
                                        <button type="button" className="btn btn-lg skill-btn" disabled>
                                            <img src={py} className="skill-icon mx-2"></img> Python
                                        </button>
                                        <button type="button" className="btn btn-lg skill-btn" disabled>
                                            <img src={java} className="skill-icon mx-2"></img> Java
                                        </button>
                                        <button type="button" className="btn btn-lg skill-btn" disabled>
                                            <img src={git} className="skill-icon mx-2"></img> Git
                                        </button>
                                        <button type="button" className="btn btn-lg skill-btn" disabled>
                                            <img src={github} className="skill-icon mx-2"></img> GitHub
                                        </button>
                                        <button type="button" className="btn btn-lg skill-btn" disabled>
                                            <img src={netlify} className="skill-icon mx-2"></img> Netlify
                                        </button>
                                        <button type="button" className="btn btn-lg skill-btn" disabled>
                                            <img src={ps} className="skill-icon mx-2"></img> Photoshop
                                        </button>
                                        <button type="button" className="btn btn-lg skill-btn" disabled>
                                            <img src={ill} className="skill-icon mx-2"></img> Illustrator
                                        </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
