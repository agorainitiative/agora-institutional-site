import { Link } from '@inertiajs/react';
import React, { useState } from 'react';

const Navbar = ({ closeNav }) => {
    const [isActivitiesOpen, setActivitiesOpen] = useState(false);

    const toggleActivities = () => setActivitiesOpen(!isActivitiesOpen);

    return (
        <nav style={{ padding: "0 200px", position: "relative" }} className="flex justify-center align-center">

            <div style={{ fontSize: "18px"}}>
                <ul>
                    <li>
                        <Link href={route('media-center')} smooth={true} duration={700} style={{marginRight: "60px", cursor:"pointer"}}>
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link href={route('media-center')} smooth={true} duration={700} style={{marginRight: "60px", cursor:"pointer"}}>
                        Manifesto
                        </Link>
                    </li>
                    <li>
                        <Link href={route('take-action')} smooth={true} duration={700} style={{marginRight: "0px", cursor:"pointer"}}>
                        Team
                        </Link>
                    </li>
                    <li>
                        <Link href={route('take-action')} smooth={true} duration={700} style={{marginRight: "0px", cursor:"pointer"}}>
                        Blueprint of a Positive Internet
                        </Link>
                    </li>
                </ul>
                
            </div>
            <button onClick={closeNav} style={{
                position: "fixed", 
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                zIndex: 10,
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <div style={{
                    position: "relative",
                    width: "24px",
                    height: "24px"
                }}>
                    <div style={{
                        position: "absolute",
                        width: "24px",
                        height: "3px",
                        backgroundColor: "black",
                        transform: "rotate(45deg)"
                    }}></div>
                    <div style={{
                        position: "absolute",
                        width: "24px",
                        height: "3px",
                        backgroundColor: "black",
                        transform: "rotate(-45deg)"
                    }}></div>
                </div>
            </button>
        </nav>
    );
};

export default Navbar;