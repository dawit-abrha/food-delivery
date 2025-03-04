import React from 'react';

const Footer = () => {
    return (
        <footer className="footer international-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <p>
                            <strong>Food Delivery</strong> is a global food delivery service that connects
                            customers with their favorite restaurants worldwide.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h4>Our Locations</h4>
                        <ul>
                            <li>Netherlands, Amsterdam</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Follow Us</h4>
                        <ul className="social-media">
                            <li>
                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Twitter"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p className="copyright">
                            &copy; 2025 <strong>AGELGL Food Delivery</strong>. All rights reserved. Powered by
                            <a href="https://www.agelgl.com" target="_blank" rel="noopener noreferrer"> AGELGL Tech</a>.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
