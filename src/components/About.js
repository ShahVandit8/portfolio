import React from 'react'

// Imported my profile picture for about section 
import pp from '../assets/images/pp.jpg'

const About = () => {
    return (
        <section className="px-2" id="about">
            <div className="container aboutdiv">
                <div className="title">
                    <p>About</p>
                </div>
                <div className="content">
                    <div className="row flex-md-row-reverse">
                        <div className="col-12 col-md-4">
                            <img
                                src={pp}
                                className="about-img img-fluid"
                                width={880}
                                height={880}
                                alt={"Vandit Shah's headshot"} />
                        </div>
                        <div className="col-12 col-md-8 about-text">
                            <p className="text-lg">
                                Hello! I&apos;m Vandit, a budding full-stack web developer based in Toronto, Canada
                            </p>
                            <p className="text-lg">
                                Since my first coding venture in 8th grade, I&apos;ve been captivated by the world of technology. Armed with a Bachelor in Computer Applications, I&apos;ve honed my skills in the MERN stack, Python, and Java.
                            </p>
                            <p className="text-lg">
                                Currently, I&apos;m expanding my expertise with a focus on Cyber Security at York University. Beyond coding, I find joy in the synergy of design and development.
                            </p>
                            <p className="text-lg">
                                In recent years, I&apos;ve dived into programming, crafting a robust front-end stack, and creating projects that address real-world challenges.
                            </p>
                            <p className="text-lg">
                                Juggling design, development, and education, I am trying to dive deep into coding and make a real difference.
                            </p>
                            <p className="text-lg">
                                If you&apos;re intrigued by what I&apos;m working on, explore my portfolio below, and let&apos;s connect for potential collaborations!
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
