import SiteLayout from '@/layouts/site-layout';
import { Link } from '@inertiajs/react';
import type { BlogPost } from '@/types/site';

interface Props {
    post: BlogPost & { content: string };
}

export default function BlogShow({ post }: Props) {
    return (
        <SiteLayout title={post.title}>
            <article className="py-24">
                <div className="mx-auto max-w-3xl px-6">
                    <Link
                        href="/blog"
                        className="text-sm text-brand-300 hover:text-accent"
                    >
                        &larr; Back to Blog
                    </Link>

                    <time className="mt-6 block text-sm text-brand-300">
                        {new Date(post.date).toLocaleDateString('en-CA', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </time>

                    <h1 className="text-gradient mt-4 text-4xl font-bold md:text-5xl">
                        {post.title}
                    </h1>

                    {post.image && (
                        <img
                            src={post.image}
                            alt={post.title}
                            className="glow-border mt-8 w-full rounded-2xl"
                        />
                    )}

                    <div
                        className="prose-blog mt-10"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>
            </article>
        </SiteLayout>
    );
}
