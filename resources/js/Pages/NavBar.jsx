import React from 'react';
import { Link } from '@inertiajs/react';

import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    return (
        <nav style={{ padding: "0 200px" }}  className="flex justify-between align-center my-5">
            <div>
                <Link href={route('home')}>
                    <p className="text-3xl">
                        <span>agorà</span> 
                        <span style={{color:" rgb(159, 159, 159)"}}>initiative</span>
                    </p>
                </Link>
            </div>
            <div style={{ fontSize: "18px"}}>
                <ScrollLink to="how" smooth={true} duration={700} style={{marginRight: "25px", cursor:"pointer"}}>
                    Our work
                </ScrollLink>
                <ScrollLink to="how" smooth={true} duration={700} style={{marginRight: "25px", cursor:"pointer"}}>
                    Blog
                </ScrollLink>
                <ScrollLink to="contact" smooth={true} duration={500} style={{marginRight: "25px", cursor:"pointer"}} >
                    Contatti
                </ScrollLink>
            </div>
        </nav>
    );
};

export default Navbar;