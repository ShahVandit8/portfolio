import React from 'react'

import data from '../data/data.json'

const About = () => {

    const { aboutDescription, aboutImage } = data.data

    const imagepath = "/images/about/"

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
                                src={imagepath + aboutImage}
                                className="about-img img-fluid"
                                width={880}
                                height={880}
                                alt={"Vandit Shah's headshot"} />
                        </div>
                        <div className="col-12 col-md-8 about-text">
                            {
                                aboutDescription.map((sentence) =>
                                    <p className="text-lg">
                                        {sentence}
                                    </p>
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
