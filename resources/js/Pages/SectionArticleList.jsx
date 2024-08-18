import React from 'react';
import { Link } from '@inertiajs/react';

const SectionArticleList = ({ articles }) => {

    return (
        <div className="article-list">
            <hr />
            <h2 className="text-4xl font-bold py-5" >Read more</h2>
            {articles.length > 0 ? (
                articles.map(article => (

                    <div key={article.id} className="pt-3 flex justify-between">
                        <Link href={route('articles.show', article.id)}>

                            <h3 className="text-2xl font-bold pr-1">{article.title}</h3>
                        </ Link>

                        <p className="">{article.abstract}</p>
                        <div style={{ width: '150px', height: '150px', backgroundColor: 'gray', marginLeft: '10px' }}></div>

                    </div>
                ))
            ) : (
                <p>No articles found with the keyword '{filterKeyword}'.</p>
            )}
        </div>
    );
}

export default SectionArticleList;