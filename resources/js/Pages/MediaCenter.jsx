import { Link, Head } from '@inertiajs/react';
import { Link as ScrollLink } from 'react-scroll';
import '../../css/app.css';
import Footer from './Footer';
import Navbar from './NavBar';
import './MediaCenter.css';

export default function Welcome({articles }) {

    return (
        <>
            <Head title="Agorà Initiative" />
            <Navbar />
            <header className="regulation" style={{ height: "30vh"}} >
                <div className="title-container">
                    <h1 className="news-title">Topics</h1>
                </div>
            
            </header>
        <div style={{ padding: "0 200px" }} className="text-black">

            
            <main>
            <section>
                {articles && articles.map((article, index) => (
                <div key={index} className="article">
                    <div className="article-image">
                        <div className='image-box'></div>

                    {article.imageUrl ? (
                        <img src={article.imageUrl} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                        <p></p>
                    )}
                    </div>
                    <div>
                        <p>{article.published_at}</p>
                        <h3>{article.title}</h3>
                    </div>
                    <div className="social-logos">
                    {/* Icone dei social media (esempi) */}
                    <img src="path/to/facebook-icon.png" alt="Facebook" className="social-icon" />
                    <img src="path/to/instagram-icon.png" alt="Instagram" className="social-icon" />
                    </div>
                    <hr />
                </div>
                ))}
            </section>
            </main>
        
            
        </div>
        <div style={{marginTop:"150px"}}>
                <Footer />
            </div>
        </>
    );
}