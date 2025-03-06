import React from 'react'
import data from '../data/data.json'

const Projects = () => {

    const { projects } = data.data
    const iconpath = "/images/icons/"
    const imgpath = "/images/projects/"

    // Importing icons for Project
    const open = '/images/icons/open.png'
    const githubgrey = '/images/icons/github-grey.png'

    return (
        <section className="px-2" id="projects">
            <div className="container project-div">
                <div className="title">
                    <p>Projects</p>
                </div>
                <div className="project">

                    {
                        projects.map((project, index) => (
                            <div className="card">
                                <div className={index % 2 === 0 ? "row g-0 card-row" : "row g-0 card-row flex-row-reverse"}>
                                    <div className="col-lg-5">
                                        {
                                            project.projectImage.length > 1 ?
                                                <div
                                                    id={"project" + index}
                                                    className="carousel slide"
                                                    data-bs-ride="carousel"
                                                >
                                                    <div className="carousel-inner">
                                                        {
                                                            project.projectImage.map((image, id) => (
                                                                <div className={id === 0 ? "carousel-item active" : "carousel-item"}>
                                                                    <img src={imgpath + image} className="d-block w-100 rounded-start rounded-end" alt={`${project.projectName} - Project Demo`} />
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                    <button
                                                        className="carousel-control-prev"
                                                        type="button"
                                                        data-bs-target={"#project" + index}
                                                        data-bs-slide="prev"
                                                    >
                                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                                        <span className="visually-hidden">Previous</span>
                                                    </button>
                                                    <button
                                                        className="carousel-control-next"
                                                        type="button"
                                                        data-bs-target={"#project" + index}
                                                        data-bs-slide="next"
                                                    >
                                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                                        <span className="visually-hidden">Next</span>
                                                    </button>
                                                </div>
                                                :
                                                <img src={imgpath + project.projectImage[0]} className="img-fluid rounded-start rounded-end" alt={`${project.projectName} - Project Demo`} />

                                        }

                                    </div>
                                    <div className="col-lg-7">
                                        <div className="card-body">
                                            <h5 className="card-title">{project.projectType}</h5>
                                            <h3 className="card-main-title">{project.projectName}</h3>
                                            <div className="tech">
                                                {
                                                    project.techStack.map((item) => (
                                                        <span className="tech-item">
                                                        <img src={iconpath + item.image + ".png"} className="skill-icon me-2" alt={`${item.name} - Project Skill Icon`}></img>
                                                        <span className="tooltip">{item.name}</span>
                                                        </span>
                                                    ))
                                                }
                                            </div>
                                            <p className="card-text">
                                                {project.description}
                                            </p>
                                            {
                                                project.githubLink.length > 1 ?
                                                    <a href={project.githubLink} target="_blank" rel="noreferrer" type="button" className="btn btn-lg skill-btn me-2">
                                                        <img src={githubgrey} className="skill-icon mx-2" alt='Github Icon'></img> <span className="me-2">Source</span>
                                                    </a>
                                                    :
                                                    <></>
                                            }
                                            {
                                                project.liveLink.length > 1 ?
                                                    <a href={project.liveLink} target="_blank" rel="noreferrer" type="button" className="btn btn-lg skill-btn">
                                                        <img src={open} className="skill-icon mx-2" alt='Project Live Icon'></img> <span className="me-2">Live</span>
                                                    </a>
                                                    :
                                                    <></>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects
