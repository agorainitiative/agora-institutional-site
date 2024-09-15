import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, useForm, Head } from '@inertiajs/react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Create({auth}) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        content: '',
        author: '',
        published_at: '',
        abstract: '', 
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('articles.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth}
        >
            <Head title="Create Project" />
            <div className="max-w-7xl  mx-auto">
                <header className="my-8 flex justify-between">
                    <h1 className="text-2xl font-bold">Create New Article</h1>
                    <Link href={route('articles.index')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back to Articles</Link>
                </header>
                <main>
                    <form onSubmit={handleSubmit} className="max-w-lg">
                        <div className="mb-4">
                            <label className="block text-gray-700">Title</label>
                            <input 
                                type="text" 
                                value={data.title} 
                                onChange={e => setData('title', e.target.value)}
                                className="mt-1 block w-full"
                            />
                            {errors.title && <div className="text-red-500 mt-1">{errors.title}</div>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Abstract</label>
                            <textarea 
                                value={data.abstract} 
                                onChange={e => setData('abstract', e.target.value)}
                                className="mt-1 block w-full"
                            />
                            {errors.abstract && <div className="text-red-500 mt-1">{errors.abstract}</div>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Content</label>
                            <CKEditor
                                editor={ClassicEditor}
                                data={data.content}
                                onChange={(event, editor) => {
                                    const content = editor.getData();
                                    setData('content', content);
                                }}
                                style={{ height: '500px' }}
                            />
                        </div>
                        
                        <button type="submit" disabled={processing} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                    </form>
                </main>
            </div>
        </AuthenticatedLayout>
    );
}