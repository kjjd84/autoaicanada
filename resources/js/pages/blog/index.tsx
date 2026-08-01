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
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] transition-all duration-300 hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/10"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                {post.image && (
                                    <div className="relative overflow-hidden">
                                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-surface/60 via-transparent to-transparent" />
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                                        />
                                    </div>
                                )}

                                <div className="relative p-8">
                                    <time className="text-sm text-brand-300">
                                        {new Date(
                                            post.date,
                                        ).toLocaleDateString('en-CA', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </time>
                                    <h2 className="mt-2 text-xl font-bold text-white">
                                        {post.title}
                                    </h2>
                                    <p className="mt-2 line-clamp-3 text-base leading-relaxed text-gray-300">
                                        {post.excerpt}
                                    </p>
                                </div>

                                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-brand-500 to-accent transition-all duration-500 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
