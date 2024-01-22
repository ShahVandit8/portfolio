import React from 'react'

const Footer = () => {
    return (
        <div className="footer-section px-2">
            <hr />
            <div className="container mb-3">
                <p className="text-center">
                    &copy; {new Date().getFullYear()} - Beautifully Crafted By Vandit Shah 😊
                </p>
                <div class="footer-social">
                    <ul class="social-icons">
                        <li><a target='_blank' href="https://www.linkedin.com/in/shah-vandit/"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a target='_blank' href="https://github.com/ShahVandit8"><i class="fab fa-github"></i></a></li>
                        <li><a target='_blank' href="https://www.instagram.com/shahvandit8/"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
