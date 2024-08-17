import { Link, Head } from '@inertiajs/react';
import { Link as ScrollLink } from 'react-scroll';
import '../../css/app.css';
import Footer from './Footer';
import Navbar from './NavBar';
import './Welcome.css';

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

                    <section id="blog" style={{ marginBottom: "130px"}}>
                        <h2 className="heading ">Trending topic</h2>

                        <div className="flex">
                        {articles && articles.map((article, index) => (
                            <div key={index} className="article-item mb-8 pr-4 py-4 bg-whiteå">
                                <h3 className="text-xl font-bold">{article.title}</h3>
                                <hr className="my-4" />
                            </div>
                        ))}
                        </div>
                        
                    </section>
                </header>
                <div id="how"></div>
                <main className="mt-6">
                    <section className="home-section">
                        <h2 className="heading">How we work</h2>
                        <div>
                            <p className="description-section">We use an approuch based on prevention to promote an online environment where facts, dialogue, and well-being prevail over falsehoods, hate, polarization, and harmful behaviors. We adopt integrated actions that combine data analytics and communication campaigns aimed at raising public awareness about malicious organized online situation.</p>
                        </div>
                    </section>
                    <div id="what"></div>
                    <section className="home-section">
                        <h2 className="heading">What we do</h2>
                        <div>
                            <p className="description-section">
                                We protect users and especially vulnerable communities from organized disinformation and hate speech campaigns and we promote responsible social media use.
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
                                    <p>We support vulnerable communities by enhancing social resilience, building supportive solidarity networks to improve well-being and be less exposed to organized malicious campaign always targets that exacerbates inequalities, creating a feedback loop that compromises community resilience.</p>
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