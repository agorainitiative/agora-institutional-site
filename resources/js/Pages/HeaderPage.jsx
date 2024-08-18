import React from 'react';
import Navbar from './NavBar';


const HeaderPage = ({ title, description }) => {
    return (
        <header className="bg-gray-300" style={{height: "70vh", display: "flex", flexDirection: "column" }}>
            <Navbar />
            <div style={{padding:"70px 200px"}} >
                <h1 style={{fontWeight:"800"}} className="text-6xl pb-5">{title}</h1>
                <p className="text-2xl">{description}</p>
            </div>
        </header>
    );
};

export default HeaderPage;