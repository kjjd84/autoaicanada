import SiteLayout from '@/layouts/site-layout';
import { Link } from '@inertiajs/react';

export default function Thanks() {
    return (
        <SiteLayout title="Thank You">
            <section className="flex min-h-[60vh] items-center py-24">
                <div className="mx-auto max-w-2xl px-6 text-center">
                    <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-brand-500/20">
                        <svg
                            className="h-10 w-10 text-accent"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <h1 className="text-gradient text-4xl font-bold">
                        Thank You!
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                        Your submission has been received. Our team will be in
                        touch with you shortly.
                    </p>
                    <div className="mt-8">
                        <Link
                            href="/"
                            className="text-brand-300 hover:text-accent"
                        >
                            &larr; Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
