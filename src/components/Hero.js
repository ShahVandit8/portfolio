import React from 'react'

import { Typewriter } from 'react-simple-typewriter'

import data from '../data/data.json'

const Hero = () => {

    const {fullName, titleArray, subTitle, resumeLink} = data.data

    return (
        <section>
            <div className="container hero">
                <div className="content">
                    <h4>Hello! 👋 My name is </h4>
                    <h1>{fullName}</h1>
                    <span>
                        <Typewriter
                            words={titleArray}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={40}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                    <p>{subTitle}</p>
                    <button className="btn work-btn btn-lg"><a href={resumeLink} target='_blank' rel="noreferrer">See Resume</a></button>
                </div>

            </div>
        </section>
    )
}

export default Hero
