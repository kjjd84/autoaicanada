import { Link } from '@inertiajs/react';

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-surface-light">
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="grid gap-12 md:grid-cols-4">
                    <div className="md:col-span-2">
                        <img
                            src="/images/logo.png"
                            alt="Auto AI Canada"
                            className="mb-4 h-10 w-auto"
                        />
                        <p className="max-w-md text-sm leading-relaxed text-gray-400">
                            Canada&apos;s premier automotive AI sales platform.
                            We don&apos;t just capture leads—we qualify, nurture,
                            and close them.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
                            Navigation
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-brand-300"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-brand-300"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="hover:text-brand-300"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-brand-300"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
                            Contact
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <a
                                    href="mailto:paulmiller@autoaicanada.com"
                                    className="hover:text-brand-300"
                                >
                                    paulmiller@autoaicanada.com
                                </a>
                            </li>
                            <li>Proudly serving Canadian dealers</li>
                            <li>Coast to coast</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/5 pt-8 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Auto AI Canada. All rights
                    reserved.
                </div>
            </div>
        </footer>
    );
}
