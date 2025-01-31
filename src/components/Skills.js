import React from 'react'

import data from '../data/data.json'

function Skills() {

    const { skills } = data.data
    const iconpath = "/images/icons/"

    return (
        <section className="px-2" id="skills">
            <div className="container skill-div">
                <div className="title">
                    <p>Skills</p>
                </div>
                <div className="skill-content">
                    <div className="experience-details-container">
                        <div className="about-containers">
                            {
                                skills.map((item) => (
                                    <div className="details-container">
                                        <h2 className="experience-sub-title">{item.title}</h2>
                                        <div className="article-container">
                                            {
                                                item.skillname.map((skillnames) => (
                                                    <button type="button" className="btn btn-lg skill-btn" disabled>
                                                        <img src={iconpath + skillnames.image + ".png"} className="skill-icon mx-2" alt='Vandit Shah Skills - icons' />
                                                        {skillnames.name}
                                                    </button>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
