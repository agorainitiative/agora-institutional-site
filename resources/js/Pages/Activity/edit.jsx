import { Link, useForm, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Edit({ activity, auth }) {
    // Controlla se activity è definito e fornisci un valore predefinito per on_evidence e id
    const { data, setData, patch, processing, errors } = useForm({
        on_evidence: activity?.on_evidence || false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (activity?.id) {
            patch(route('activity.update', activity.id));
        } else {
            console.log(activity);
        }
    };

    return (
        <AuthenticatedLayout user={auth}>
            <Head title="Edit Activity" />
            <div className="max-w-7xl mx-auto">
                <header className="my-8 flex justify-between">
                    <h1 className="text-2xl font-bold">Edit Activity</h1>
                    <Link href={route('dashboard')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back to Dashboard</Link>
                </header>
                <main>
                    <form onSubmit={handleSubmit} className="max-w-lg">
                        <div className="mb-4">
                            <label className="block text-gray-700">On Evidence</label>
                            <input
                                type="checkbox"
                                checked={data.on_evidence}
                                onChange={(e) => setData('on_evidence', e.target.checked)}
                                className="mt-1 block w-full"
                            />
                            {errors.on_evidence && <div className="text-red-600 mt-2">{errors.on_evidence}</div>}
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={processing}>
                            Update Activity
                        </button>
                    </form>
                </main>
            </div>
        </AuthenticatedLayout>
    );
}