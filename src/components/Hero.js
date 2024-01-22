import React from 'react'

import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
    return (
        <section>
            <div className="container hero">
                <div className="content">
                    <h4>Hello! 👋 My name is </h4>
                    <h1>Vandit Shah</h1>
                    <span>
                        <Typewriter
                            words={['Full-Stack Web Developer', 'Software Developer', 'Cyber Security Enthusiast', 'Computer Addict!']}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={40}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                    <p>I weave code to create seamless and visually appealing online experiences. Basically i develop Websites 😅</p>
                    <button className="btn work-btn btn-lg"><a href="https://drive.google.com/file/d/1WKPBoZH-Bnq7LDjEXi67aUhUWbqce533/view?usp=sharing" target='_blank' >See Resume</a></button>
                </div>

            </div>
        </section>
    )
}

export default Hero
