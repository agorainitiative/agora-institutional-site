import React, { useState } from 'react';
import './Sidebar.css';  // Assicurati che il percorso sia corretto

export default function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button onClick={toggleSidebar}>Close</button>
            <h2>Take Action to Elect Someone</h2>
            {/* Altri contenuti */}
        </div>
    );
}