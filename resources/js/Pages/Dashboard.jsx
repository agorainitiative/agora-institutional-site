import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { route } from 'ziggy-js'; // Importa la funzione route come esportazione nominata

export default function Dashboard({ auth, activities }) {
    const handleUpdate = (id) => {
        if (confirm('Are you sure you want to take on evidence this activity?')) {
            put(route('activity.update', id));
        }
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h1 className="text-2xl font-bold mb-4">Activities</h1>
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead>
                                        <tr>
                                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title/Name</th>
                                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description/Content</th>
                                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">On Evidence</th>
                                            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Azioni</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {activities.map((activity) => (
                                            <tr key={activity.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {activity.activitable_type === 'App\\Models\\Article' ? 'Article' : 'Project'}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {activity.activitable_type === 'App\\Models\\Article' ? activity.activitable.title : activity.activitable.name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {activity.activitable_type === 'App\\Models\\Article' ? activity.activitable.content : activity.activitable.description}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {activity.on_evidence ? 'Yes' : 'No'}
                                                </td>
                                                <td>
                                                <Link href={route('activity.edit', activity.id)} className="text-blue-500 mr-3">Edit</Link> 
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                               
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}