import React, { useState } from 'react';
import { Link, Head } from '@inertiajs/react';
 
import Navbar from '../NavBar';
import './Home.css';

export default function Home({ auth, onEvidenceActivities }) {
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
            <div style={{ position: "relative" }}>
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
            <div>
                {onEvidenceActivities.map(activity => (
                    <div key={activity.id} style={{ width: "100vw", height: "100vh", position: "relative" }}>
                        <h3>{activity.name}</h3>
                        {activity.activitable_type === 'App\\Models\\Article' && activity.activitable && (
                            <Link href={`/articles/${activity.activitable.id}`} style={{ position: "absolute", bottom: "150px", left: "150px", textDecoration: "none", color: "inherit" }}>
                                <h1 style={{ fontSize: "38px", textTransform: "uppercase" }}>{activity.activitable.title}</h1>
                                <p style={{ fontSize: "22px" }}>{activity.activitable.abstract}</p>
                            </Link>
                        )}
                        {activity.activitable_type === 'App\\Models\\Project' && activity.activitable && (
                            <div style={{ position: "absolute", bottom: "150px", left: "150px" }}>
                                <h1 style={{ fontSize: "38px", textTransform: "uppercase" }}>{activity.activitable.name}</h1>
                                <p>{activity.activitable.description}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}