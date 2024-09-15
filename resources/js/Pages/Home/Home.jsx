import React, { useState } from 'react';
import { Link, Head } from '@inertiajs/react';
 
import Navbar from '../NavBar';
import './Home.css';

export default function Home({ auth, articles }) {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    const closeNav = () => {
        setIsNavVisible(false);
    };

    return (
        <>
            <Head title="Agorà Initiative" />
            <div style={{ height: "100vh", width:"100vw", position: "relative" }}>
                <button onClick={toggleNav} style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    zIndex: 10
                }}>
                    <div style={{ width: "30px", height: "3px", backgroundColor: "black", margin: "6px 0" }}></div>
                    <div style={{ width: "30px", height: "3px", backgroundColor: "black", margin: "6px 0" }}></div>
                    <div style={{ width: "30px", height: "3px", backgroundColor: "black", margin: "6px 0" }}></div>
                </button>

                

                {isNavVisible && (
                    <div style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 20,
                        display: "flex",
                        backgroundColor: "white", 
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Navbar closeNav={closeNav} />
                    </div>
                )}
            </div>
            
        </>
    );
}