import React, { useState, useEffect } from 'react';
import { Link, Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Edit({ auth, project }) {
    const { data, setData, put, errors } = useForm({
        name: project.name || '',
        description: project.description || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('projects.update', project.id));
    };

    return (
        <AuthenticatedLayout
            user={auth}
        >
            <Head title="Edit Project" />
            <div className="max-w-7xl mx-auto">
                <header className="my-8 flex justify-between">
                    <h1 className="text-2xl font-bold">Edit Project</h1>
                    <Link href={route('projects.index')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back to Projects</Link>
                </header>
                <main>
                    <form onSubmit={handleSubmit} className="max-w-lg">
                        <div className="mb-4">
                            <label className="block text-gray-700">Name</label>
                            <input 
                                type="text" 
                                value={data.name} 
                                onChange={e => setData('name', e.target.value)}
                                className="mt-1 block w-full"
                            />
                            {errors.name && <div className="text-red-500 mt-2">{errors.name}</div>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Description</label>
                            <textarea 
                                value={data.description} 
                                onChange={e => setData('description', e.target.value)}
                                className="mt-1 block w-full"
                            />
                            {errors.description && <div className="text-red-500 mt-2">{errors.description}</div>}
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update Project</button>
                    </form>
                </main>
            </div>
        </AuthenticatedLayout>
    );
}