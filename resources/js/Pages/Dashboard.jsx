import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth, activities }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h1 className="text-2xl font-bold mb-4">Activities</h1>
                            <ul>
                                {activities.map((activity) => (
                                    <li key={activity.id} className="mb-4">
                                        {activity.activitable_type === 'App\\Models\\Article' && (
                                            <div>
                                                <h2 className="text-xl font-semibold">Article: {activity.activitable.title}</h2>
                                                <p>{activity.activitable.content}</p>
                                            </div>
                                        )}
                                        {activity.activitable_type === 'App\\Models\\Project' && (
                                            <div>
                                                <h2 className="text-xl font-semibold">Project: {activity.activitable.name}</h2>
                                                <p>{activity.activitable.description}</p>
                                            </div>
                                        )}
                                        <p>On Evidence: {activity.on_evidence ? 'Yes' : 'No'}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}