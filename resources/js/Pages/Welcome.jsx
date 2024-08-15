import { Link, Head } from '@inertiajs/react';
import { Link as ScrollLink } from 'react-scroll';
import '../../css/app.css';
import Footer from './Footer';
import Navbar from './NavBar';

export default function Welcome({ auth, articles }) {

    return (
        <>
            <Head title="Agorà Initiative" />
            <Navbar />

            <div style={{ padding: "0 200px" }} className="text-black">
                <header style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
                    <div className="association-description-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        
                        <p className="association-description">
                        Agorà Initiative works to create a safe, positive, and democratic online environment that advocates for peace and justice in society.
                        </p>
                    </div>
                    <h2 className="heading">Trending topic</h2>

                    <section id="blog" className="flex" style={{ marginBottom: "50px"}}>
                        {articles && articles.map((article, index) => (
                            <div key={index} className="article-item mb-8 p-4 bg-whiteå">
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
                            <p className="description-section">We use a proactive apprauch to promote and defend an online environment where facts, dialogue, and well-being prevail over falsehoods, hate, polarization, and harmful behaviors. This is achieved through integrated actions that combine data analytics, OSINT (Open Source Intelligence), and communication campaigns aimed at raising awareness.</p>
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
                                    <Link href={route('page.expression')}>
                                        <h4 className="activity-title">Expression ></h4>
                                    </Link>
                                </div>
                                <div className="bg-gray-200 p-4">
                                    <Link href={route('page.mentalHealth')}>
                                        <h4 className="activity-title">Mental health ></h4>
                                    </Link>
                                </div>
                                <div className="bg-gray-200 p-4">
                                    <Link href={route('page.equity')}>
                                        <h4 className="activity-title">Equity ></h4>
                                    </Link>
                                </div>
                                <div className="bg-gray-200 p-4">
                                    <Link href={route('page.regulation')}>
                                        <h4 className="activity-title">Regulation ></h4>
                                    </Link>
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