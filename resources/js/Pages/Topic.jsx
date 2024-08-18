import { Link, Head } from '@inertiajs/react';
import { Link as ScrollLink } from 'react-scroll';
import '../../css/app.css';
import Footer from './Footer';
import Navbar from './NavBar';
import './Topic.css';

export default function Topic({article }) {

    return (
        <>
            <Head title="Agorà Initiative" />
            <Navbar />
            <header className="regulation  text-black"  >
                <div className="title-container">
                    <h1 className="news-title">{article.title}</h1>
                    <p className="text-2xl abstract">{article.abstract}</p>
                </div>
            
            </header>
            <div style={{ padding: "0 200px" }} className="text-black">
                <main>
                <section>
                    <div className="article" dangerouslySetInnerHTML={{ __html: article.content }} />
                </section>  
                </main>
            </div>
            <div style={{marginTop:"150px"}}>
                <Footer />
            </div>
        </>
    );
}