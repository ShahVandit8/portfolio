import React from 'react'

const Contact = () => {
    return (
        <div className="contact-sec px-2" id="contact">
            <div className="container contact-div">
                <div className="title">
                    <p>Contact</p>
                </div>
                <div className="contect-content">
                    <p>I&apos;m currently open to work and get involved in new projects,
                        so get in touch if you&apos;d like to Hire me or work together.</p>
                    <p className="text-lg">
                        Email me at{" "}
                        <a
                            href="mailto:shahvandit8@gmail.com"
                            className="underline-link"
                        >
                            shahvandit8@gmail.com
                        </a>{" "}
                        and let&apos;s connect!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact
