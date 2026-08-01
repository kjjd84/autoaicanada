import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
];

export function Header() {
    const { site } = usePage().props;
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-surface/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link href="/" className="flex items-center gap-3">
                    <img
                        src="/images/logo.png"
                        alt="Auto AI Canada"
                        className="h-10 w-auto"
                    />
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href={site.signInUrl}
                        className="text-sm font-medium text-brand-300 transition-colors hover:text-accent"
                    >
                        Sign In
                    </a>
                    <Link href="/contact">
                        <Button size="sm">Book a Demo</Button>
                    </Link>
                </nav>

                <button
                    type="button"
                    className="text-gray-300 md:hidden"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {mobileOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {mobileOpen && (
                <nav className="border-t border-white/5 bg-surface px-6 py-4 md:hidden">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-gray-300"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href={site.signInUrl}
                            className="text-sm font-medium text-brand-300"
                        >
                            Sign In
                        </a>
                        <Link href="/contact" onClick={() => setMobileOpen(false)}>
                            <Button size="sm" className="w-full">
                                Book a Demo
                            </Button>
                        </Link>
                    </div>
                </nav>
            )}
        </header>
    );
}

export function SectionHeading({
    title,
    subtitle,
    className,
}: {
    title: string;
    subtitle?: string;
    className?: string;
}) {
    return (
        <div className={cn('text-center', className)}>
            <h2 className="text-gradient text-3xl font-bold md:text-4xl">
                {title}
            </h2>
            {subtitle && (
                <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
