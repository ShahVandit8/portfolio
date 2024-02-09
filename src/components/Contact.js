import React from 'react'

import data from '../data/data.json'

const Contact = () => {

    const { contactParagraph, email } = data.data

    return (
        <div className="contact-sec px-2" id="contact">
            <div className="container contact-div">
                <div className="title">
                    <p>Contact</p>
                </div>
                <div className="contect-content">
                    <p>{contactParagraph}</p>
                    <p className="text-lg">
                        Email me at{" "}
                        <a
                            href={"mailto:"+email}
                            className="underline-link"
                        >
                            {email}
                        </a>{" "}
                        and let&apos;s connect!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact
