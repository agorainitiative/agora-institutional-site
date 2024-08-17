import { Link } from '@inertiajs/react';
import Sidebar from './Sidebar';
import { Link as ScrollLink } from 'react-scroll';

import React, { useState } from 'react'; // Aggiungi questa linea

const Navbar = () => {

    const [isActivitiesOpen, setActivitiesOpen] = useState(false); // Stato per la tenda

    const toggleActivities = () => setActivitiesOpen(!isActivitiesOpen); // Funzione per la tenda

    
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
                <Link href={route('media-center')} smooth={true} duration={700} style={{marginRight: "60px", cursor:"pointer"}}>
                    News
                </Link>
                <Link href={route('take-action')} smooth={true} duration={700} style={{marginRight: "0px", cursor:"pointer"}}>
                    Take action
                </Link>
            </div>
        </nav>
    );
};


export default Navbar;