import React, { useState } from 'react';
import { Link, Head } from '@inertiajs/react';
import '../../css/app.css';
import Navbar from './NavBar';
import './Welcome.css';

export default function Welcome({ auth, articles }) {
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

                {articles && articles.map((article, index) => (
                    <div key={index} style={{ height: '100px', width: '100px' }}>
                        <Link href={route('articles.show', article.id)}>
                            <h3 className="text-xl font-bold">{article.title}</h3>
                        </Link>
                    </div>
                ))}

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
                {/* <main className="mt-6">
                    <section className="home-section">
                        <h2 className="heading">How we work</h2>
                        <div>
                            <p className="description-section">We use an approach based on prevention to promote an online environment where facts, dialogue, and well-being prevail over falsehoods, hate, polarization, and harmful behaviors. We adopt integrated actions that combine data analytics, communication campaigns and development programs for vulnerable communities.</p>
                        </div>
                    </section>
                    <div id="what"></div>
                    <section className="home-section">
                        <h2 className="heading">What we do</h2>
                        <div>
                            <p className="description-section">
                                We protect users expecially vulnerable ones, from organized misinformation disinformation, hate speech campaigns and harmful online behaviors.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                <div className="p-4">
                                    <Link href={route('page.expression')}>
                                        <div className="div-box expression"></div>
                                        <h4 className="activity-title">Expression </h4>
                                        <p>We support the web and social media’s potential to connect people by defending user from organized disinformation hate speech campaign. We aims to identify and counter maliciouse narratives by launching positive campaigns and exposing the sources to maintain a trustworthy and informed digital environment.</p>
                                    </Link>
                                </div>
                                <div className="p-4">
                                    <Link href={route('page.mentalHealth')}>
                                        <div className="div-box online-well-being"></div>
                                        <h4 className="activity-title">Online well being</h4>
                                        <p>We advocate for online well-being by addressing the negative effects of social media on mental health and highlighting how it skews perceptions of success and happiness empowering individuals to cultivating a healthier online environment and enhancing overall mental wellness.</p>
                                    </Link>
                                </div>
                                <div  className="p-4">
                                    <Link href={route('page.equity')}>
                                        <div className="div-box equity"></div>
                                        <h4 className="activity-title">Equity</h4>
                                        <p>We empower vulnerable communities, the most target group by maliscoiuse organized online campaign. We build educational, informatives and developing programs that enhance their social resilience.</p>
                                    </Link>
                                </div>
                            </div>   
                        </div>
                    </section>
                    
                </main> */}
            
        </>
    );
}