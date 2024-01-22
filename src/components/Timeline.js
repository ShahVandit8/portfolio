import React from 'react'
import education from '../assets/images/icons/edu.png'

const Timeline = () => {

    return (
        <section className="px-2" id="education">
            <div className="container edu-div">
                <div className="title">
                    <p>Education & Experience</p>
                </div>

                <div className="education py-5">
                    <div class="timeline-items">
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-date">September 2023 - Present</div>
                            <div class="timeline-content">
                                <h3>Student @ York Univeristy</h3>
                                <h4>Cyber Security Operations</h4>
                                <p>Currently learnig different aspects of Cyber Security. Be it Vulnerability Management, Digital Forensics, Penetration Testing, Ethical Hacking and much more.</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-date">May 2023 - August 2023</div>
                            <div class="timeline-content">
                                <h3>Full-Stack Web Developer</h3>
                                <h4>@ Creative Bird Studio</h4>
                                <p>Developed reusable UI components, adhered to coding standards, integrated APIs, managed version control, and researched new technologies.</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-date">January 2023 - April 2023</div>
                            <div class="timeline-content">
                                <h3>Web Developer Intern</h3>
                                <h4>@ Creative Bird Studio</h4>
                                <p>Worked on MERN Stack - Developed Learning Management System for Client- The Digital Workstation.  </p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-date">June 2020 - May 2023</div>
                            <div class="timeline-content">
                                <h3>Student @ MS University of Baroda</h3>
                                <h4>Bachelor of Computer Applications</h4>
                                <p>Learned different concepts of Computer Applications and Software Development. Major Learnings were Python, Java, MERN Stack, and Software Engineering. </p>
                                <p>Grade - 8.99/10</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-date">2019-2022</div>
                            <div class="timeline-content">
                                <h3>Student @ GSEB - Gujarat Board</h3>
                                <h4>12th Grade - HSC</h4>
                                <p>Did my 12th Grade from Gujarat Board GSEB.</p>
                                <p>Grade - 82.4%</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Timeline
