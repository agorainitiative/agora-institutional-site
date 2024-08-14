import { Link, Head } from '@inertiajs/react';
import { Link as ScrollLink } from 'react-scroll';
import '../../css/app.css';
import Footer from './Footer';

export default function Welcome({ auth, articles }) {

    return (
        <>
            <Head title="Agorà Initiative" />
            <div style={{ padding: "0 200px" }} className="text-black">
                <header style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
                    <nav className="flex justify-between align-center my-5">
                        <div>
                            <p className="text-3xl"><span >agorà</span> <span style={{color:" rgb(159, 159, 159)"}}>initiative</span></p>
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
                    <div className="association-description-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <p className="association-description">
                        Agorà Initiative works to create a safe, positive, and democratic online environment that advocates for peace and justice in society.
                        </p>
                    </div>
                    <h2 className="heading">Trending topic</h2>

                    <section id="blog" className="flex">

                        {articles && articles.map((article, index) => (
                            <div key={index} className="article-item mb-8 p-4 bg-white 
                            ">
                                <h3 className="text-xl font-bold">{article.title}</h3>
                                <p className="text-gray-800">{article.abstract}</p>
                                <hr className="my-4" />
                            </div>
                        ))}
                    </section>
                </header>
                <div id="how"></div>
                <main className="mt-6">
                    <section className="home-section">
                        <h2 className="heading">How we work</h2>
                        <div>
                            <p className="description-section">We focus on preventive action to promote an online space where facts, dialogue, and well-being prevail over falsehoods, hate, polarization, and harmful online behaviors.</p>
                        </div>
                    </section>
                    <section className="home-section">
                        <h2 className="heading">What we do</h2>
                        <div>
                            <p className="description-section">
                                We aim to protect users and especially vulnerable communities from organized disinformation and hate speech campaigns. We promote responsible social media use and advocate for stronger and more effective regulations for online platforms.
                            </p>
                            
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gray-200 p-4">
                                    <h4 className="activity-title">Expression > </h4>
                                </div>
                                <div className="bg-gray-200 p-4">
                                    <h4 className="activity-title">Mental health > </h4>
                                </div>
                                <div className="bg-gray-200 p-4">
                                    <h4 className="activity-title">Equity ></h4>
                                </div>
                                <div className="bg-gray-200 p-4">
                                    <h4 className="activity-title">Regulation ></h4>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    
                </main>

                
            </div>
            <div style={{marginTop:"150px"}}>
                <Footer />
            </div>
            
        </>
    );
}