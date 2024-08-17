import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from './NavBar';
import Footer from './Footer';
import './TakeAction.css';  // Assicurati che il percorso del file CSS sia corretto
import './Welcome.css';  // Assicurati che il percorso del file CSS sia corretto

export default function TakeAction() {
    return (
        <>
            <Head title="Take Action" />
            <Navbar />

            <div className="engage take-action-container">
                <div className="left-column">
                    <form>
                        <label>First Name *</label>
                        <input type="text" name="firstName" required />

                        <label>Last Name *</label>
                        <input type="text" name="lastName" required />

                        <label>Email *</label>
                        <input type="email" name="email" required />

                        <label>Zip *</label>
                        <input type="text" name="zip" required />

                        <label>Mobile Number *</label>
                        <input type="tel" name="mobile" required />
                        <div className="checkbox-container">
                            <label><input type="checkbox" name="shareMessages" />Attend an event</label>
                            <label><input type="checkbox" name="shareMessages" />Host an event</label>
                            <label><input type="checkbox" name="shareMessages" />Share key messaging on social media</label>
                        </div>
                        <button type="submit" className="submit-btn">Put me in</button>
                    </form>
                </div>
                <div className="right-column">
                    <h1 className="text-5xl title">Join us to share positive content on internet </h1>
                    <p className="text-2xl description">Join us to combat online misinformation and hate speech anda harmful social media usage through proactive community engagement and educational campaigns. Your support can protect vulnerable groups, promote mental well-being, enhance equity and make a difference in the world.</p>
                </div>
            </div>

            <Footer />
        </>
    );
}