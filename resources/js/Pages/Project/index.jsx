import DOMPurify from 'dompurify';
import { Link, Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Index({ projects, auth }) {

	const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this project?')) {
            destroy(route('projects.destroy', id));
        }
    };
	
	return (
		<AuthenticatedLayout
            user={auth}
        >
			<Head title="Projects" />
			
			<div className="max-w-7xl mx-auto px-4">
				<header className="my-8 flex justify-between align-center ">
					<h1 className="text-2xl font-bold">Projects</h1>
					<Link href={route('projects.create')} className="text-blue-500">Create New Project</Link>
				</header>
				<main>
					{projects.length > 0 ? (
						<table className="min-w-full table-auto border-separate border-spacing-5 bg-white">
							<thead>
								<tr>
								<th className="text-left w-2/5">Title</th> 
								<th className="text-left w-2/5">Author</th> 
								<th className="text-left w-1/5">Actions</th> 
								</tr>
							</thead>
							<tbody>
								{projects.map((project, index) => (
									<tr key={index} className="border-b">
										<td >{project.name}</td>
										<td>{project.description}</td>
										<td>
                                            <Link href={route('projects.edit', project.id)} className="text-blue-500 mr-3">Edit</Link> 
                                        </td>
										<button
											onClick={() => handleDelete(project.id)}
											className="text-red-500"
										>
											Delete
										</button>
									</tr>
								))}
							</tbody>
						</table>
					) : (
						<p>No projects available.</p>
					)}
				</main>
			</div>
        </AuthenticatedLayout>
	);
}