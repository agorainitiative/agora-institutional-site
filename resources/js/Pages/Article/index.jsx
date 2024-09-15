import DOMPurify from 'dompurify';
import { Link, Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Index({ articles, auth }) {
	const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this article?')) {
            destroy(route('articles.destroy', id));
        }
    };

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
								<th className="text-left w-2/5">Title</th> {/* 35% */}
								<th className="text-left w-2/10">Author</th> {/* 10% */}
								<th className="text-left w-2/10">Published at</th> {/* 10% */}
								<th className="text-left w-2/10">Actions</th> {/* 10% */}
								</tr>
							</thead>
							<tbody>
								{articles.map((article, index) => (
									<tr key={index} className="border-b">
										<td className="">{article.title}</td>
										<td className="">{article.author}</td>
										<td className="">{new Date(article.published_at).toLocaleDateString()}</td>
										<td>
                                            <Link href={route('articles.edit', article.id)} className="text-blue-500 mr-3">Edit</Link> 
											<button
												onClick={() => handleDelete(article.id)}
												className="text-red-500"
											>
                                            	Delete
                                        	</button>
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