import { Link, useForm, Head } from '@inertiajs/react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Edit({ article, auth, activities }) {
    const { data, setData, put, processing, errors } = useForm({
        title: article.title || '',
        content: article.content || '',
        author: article.author || '',
        published_at: article.published_at || '',
        abstract: article.abstract || '',
        on_trending: article.on_trending || false,
        activity: article.activity || '', 
        postOnInstagram: article.postOnInstagram || false,
        instagramPostText: article.instagramPostText || '',
        instagramPostImage: article.instagramPostImage || '',
        postOnLinkedIn: article.postOnLinkedIn || false,
        linkedInPostText: article.linkedInPostText || '',
        linkedInPostImage: article.linkedInPostImage || '',
        postOnFacebook: article.postOnFacebook || false,
        facebookPostText: article.facebookPostText || '',
        facebookPostImage: article.facebookPostImage || '',
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
            <div className="container px-4">
                <header className="my-8">
                    <h1 className="text-2xl font-bold">Edit Article</h1>
                    <Link href={route('articles.index')} className="text-blue-500">Back to Articles</Link>
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
                        <label className="block text-gray-700">Activity</label>
                        <select
                            value={data.activity}
                            onChange={e => setData('activity', e.target.value)}
                            className="mt-1 block w-full"
                        >
                            <option value="">Select an activity</option>
                            {Array.isArray(activities) && activities.length > 0 ? (
                                activities.map(activity => (
                                    <option key={activity} value={activity}>
                                        {activity}
                                    </option>
                                ))
                            ) : (
                                <option value="" disabled>No activities available</option>
                            )}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">On Trending</label>
                        <input 
                            type="checkbox" 
                            checked={data.on_trending} 
                            onChange={e => setData('on_trending', e.target.checked)}
                        />
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
                            <label className="block text-gray-700">Post on Instagram</label>
                            <input 
                                type="checkbox" 
                                checked={data.postOnInstagram} 
                                onChange={e => setData('postOnInstagram', e.target.checked)}
                            />
                        </div>
                        {data.postOnInstagram && (
                            <>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Instagram Post Text</label>
                                    <textarea 
                                        value={data.instagramPostText} 
                                        onChange={e => setData('instagramPostText', e.target.value)}
                                        className="mt-1 block w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Instagram Post Image</label>
                                    <input 
                                        type="text" 
                                        value={data.instagramPostImage} 
                                        onChange={e => setData('instagramPostImage', e.target.value)}
                                        className="mt-1 block w-full"
                                    />
                                </div>
                            </>
                        )}
                        {/* Checkbox e campi per LinkedIn */}
                        <div className="mb-4">
                            <label className="block text-gray-700">Post on LinkedIn</label>
                            <input 
                                type="checkbox" 
                                checked={data.postOnLinkedIn} 
                                onChange={e => setData('postOnLinkedIn', e.target.checked)}
                            />
                        </div>
                        {data.postOnLinkedIn && (
                            <>
                                <div className="mb-4">
                                    <label className="block text-gray-700">LinkedIn Post Text</label>
                                    <textarea 
                                        value={data.linkedInPostText} 
                                        onChange={e => setData('linkedInPostText', e.target.value)}
                                        className="mt-1 block w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">LinkedIn Post Image</label>
                                    <input 
                                        type="text" 
                                        value={data.linkedInPostImage} 
                                        onChange={e => setData('linkedInPostImage', e.target.value)}
                                        className="mt-1 block w-full"
                                    />
                                </div>
                            </>
                        )}
                        
                        {/* Checkbox e campi per Facebook */}
                        <div className="mb-4">
                            <label className="block text-gray-700">Post on Facebook</label>
                            <input 
                                type="checkbox" 
                                checked={data.postOnFacebook} 
                                onChange={e => setData('postOnFacebook', e.target.checked)}
                            />
                        </div>
                        {data.postOnFacebook && (
                            <>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Facebook Post Text</label>
                                    <textarea 
                                        value={data.facebookPostText} 
                                        onChange={e => setData('facebookPostText', e.target.value)}
                                        className="mt-1 block w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Facebook Post Image</label>
                                    <input 
                                        type="text" 
                                        value={data.facebookPostImage} 
                                        onChange={e => setData('facebookPostImage', e.target.value)}
                                        className="mt-1 block w-full"
                                    />
                                </div>
                            </>
                        )}
                        <button type="submit" disabled={processing} className="btn btn-primary">
                            Update
                        </button>
                    </form>
                </main>
            </div>
        </AuthenticatedLayout>
    );
}