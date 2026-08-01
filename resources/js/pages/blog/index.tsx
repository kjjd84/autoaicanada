import { SectionHeading } from '@/components/header';
import SiteLayout from '@/layouts/site-layout';
import { Link } from '@inertiajs/react';
import type { BlogPost } from '@/types/site';

interface Props {
    posts: BlogPost[];
}

export default function BlogIndex({ posts }: Props) {
    return (
        <SiteLayout title="Blog">
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <SectionHeading
                        title="Auto AI Canada Blog"
                        subtitle="Insights, strategies, and trends for Canadian automotive dealers."
                    />

                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group glow-border overflow-hidden rounded-2xl border border-white/5 bg-white/5 transition-all hover:border-brand-500/30"
                            >
                                {post.image && (
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                                    />
                                )}
                                <div className="p-6">
                                    <time className="text-sm text-brand-300">
                                        {new Date(
                                            post.date,
                                        ).toLocaleDateString('en-CA', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </time>
                                    <h2 className="mt-2 text-xl font-bold text-white group-hover:text-brand-300">
                                        {post.title}
                                    </h2>
                                    <p className="mt-2 line-clamp-3 text-sm text-gray-400">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
