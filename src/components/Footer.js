import React from 'react'

import data from '../data/data.json'

const Footer = () => {

    const { socialLinks } = data.data

    return (
        <div className="footer-section px-2">
            <hr />
            <div className="container mb-3">
                <p className="text-center">
                    &copy; {new Date().getFullYear()} - Beautifully Crafted By <a style={{textDecoration: 'none'}} href="https://vandit-shah.vercel.app/">Vandit Shah</a> 😊
                </p>
                <div class="footer-social">
                    <ul class="social-icons">
                        <li><a target='_blank' href={socialLinks.linkedin}><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a target='_blank' href={socialLinks.github}><i class="fab fa-github"></i></a></li>
                        <li><a target='_blank' href={socialLinks.instagram}><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
