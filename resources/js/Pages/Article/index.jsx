import DOMPurify from 'dompurify';
import { Link, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Index({ articles, auth }) {
	return (
		<AuthenticatedLayout
            user={auth}
        >
			<Head title="Articles" />
			
			<div className="max-w-7xl mx-auto px-4">
				<header className="my-8 flex justify-between align-center ">
					<h1 className="text-2xl font-bold">Articles</h1>
					<Link href={route('articles.create')} className="text-blue-500">Create New Article</Link>
				</header>
				<main>
					{articles.length > 0 ? (
						<table className="min-w-full table-auto border-separate border-spacing-5 bg-white">
							<thead>
								<tr>
									<th>Title</th>
									<th>Abstract</th>
									<th>Author</th>
									<th>On Trending</th> 
									<th>Published On</th>
								</tr>
							</thead>
							<tbody>
								{articles.map((article, index) => (
									<tr key={index} className="border-b">
										<td className="">{article.title}</td>
										<td className="">{article.abstract}</td>
										<td className="">{article.author}</td>
										<td className="">{new Date(article.published_at).toLocaleDateString()}</td>
										<td className="">{article.on_trending ? 'Yes' : 'No'}</td> {/* Nuova cella "On Trending" */}
										<td>
                                            <Link href={route('articles.edit', article.id)} className="text-blue-500">Edit</Link> {/* Pulsante di modifica */}
                                        </td>
									</tr>
								))}
							</tbody>
						</table>
					) : (
						<p>No articles available.</p>
					)}
				</main>
			</div>
        </AuthenticatedLayout>
	);
}