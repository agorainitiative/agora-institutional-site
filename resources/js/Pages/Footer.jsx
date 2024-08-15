// components/Footer.js
import React from 'react';
import { Link } from '@inertiajs/react';

const Footer = () => {
    return (
        <footer className="bg-black text-white text-center text-xs p-5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div>
                    <p style={{ fontSize: "28px", }}><span >agorà</span> <span style={{color:" rgb(159, 159, 159)"}}>initiative</span></p>

                    </div>
                    <div>
                        <p className="text-xl">We are a nonprofit fighting misinformation, extremist, hate speech and harmful online behaviors.</p>
                        <div className="mt-4 flex">
                            <Link style={{ textDecoration:"underline"}}href="#" className="text-white text-sm text-decoration-underline">Privacy & Cookies Notice</Link>
                            <p className="text-white text-sm mb-2 ml-5">© 2024 Agorà Initiative. All rights reserved.</p>
                        </div>
                    </div>
                    
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
               
                

            </div>
        </footer>
    );
}

export default Footer;