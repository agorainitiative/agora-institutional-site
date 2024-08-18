// components/Footer.js
import React from 'react';
import { Link } from '@inertiajs/react';
import './Footer.css'

const Footer = () => {
    return (
        <>


        {/* <div className="donorContainer">
            <h5 className="text-3xl font-bold donorTitle">Can you help us do more?</h5>
            <div className="amountContainer">
                <span className="amount">5</span>
                <span className="amount">10</span>
                <span className="amount">20</span>
                <span className="amount">Another amount</span>
            </div>
            

        </div> */}
        <div className="whoContainer">
            <Link href={route("who")}>Who we are</Link>
            <Link href={route("who")}>Funding and indipendence</Link>
            <Link href={route("who")}>Our impartiality</Link>
        </div>
        <footer className="bg-black text-white text-center text-xs p-5">
            <div style={{ padding: "10px 200px" }}>
                
                <div className="flex justify-between">
                    <p style={{ fontSize: "28px", }}><span style={{color:"white)"}} >agorà</span> <span style={{color:" rgb(159, 159, 159)"}}>initiative</span></p>
                    <div>
                        <p style={{color:"white"}} className="text-xl">We are a nonprofit fighting misinformation, extremist, hate speech and harmful online behaviors.</p>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <Link style={{ textDecoration:"underline"}}href="#" className="text-white text-sm text-decoration-underline">Privacy & Cookies Notice</Link>
                                <Link href={route('login')} style={{ textDecoration:"underline"}} className="ml-5 text-white text-sm text-decoration-underline">Area riservata</Link>   
                            </div>
                               
                                <p style={{color:" rgb(159, 159, 159)"}} className="text-sm mb-2 ml-5">© 2024 Agorà Initiative. All rights reserved.</p>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
        
        </>
        
    );
}

export default Footer;