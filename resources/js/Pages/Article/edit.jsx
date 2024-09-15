import { Link, useForm, Head } from '@inertiajs/react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Edit({ article, auth }) {
    const { data, setData, put, processing, errors } = useForm({
        title: article.title || '',
        content: article.content || '',
        author: article.author || '',
        published_at: article.published_at || '',
        abstract: article.abstract || '',
        on_trending: article.on_trending || false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('articles.update', article.id));
    };

    return (
        <AuthenticatedLayout
            user={auth}
        >
            <Head title="Edit Article" />
            <div className="max-w-7xl mx-auto">
                <header className="my-8 flex justify-between">
                    <h1 className="text-2xl font-bold">Edit Article</h1>
                    <Link href={route('articles.index')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back to Articles</Link>
                </header>
                <main>
                    <form onSubmit={handleSubmit} className="max-w-lg">
                        {/* Campi esistenti */}
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
                                config={{
                                    width: '1000px;' // Imposta la larghezza desiderata
                                }}
                                
                            />
                        </div>
                        <button type="submit" disabled={processing} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                    </form>
                </main>
            </div>
        </AuthenticatedLayout>
    );
}