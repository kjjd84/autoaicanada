import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Head } from '@inertiajs/react';
import type { ReactNode } from 'react';

interface SiteLayoutProps {
    children: ReactNode;
    title?: string;
    showHeader?: boolean;
    showFooter?: boolean;
}

export default function SiteLayout({
    children,
    title,
    showHeader = true,
    showFooter = true,
}: SiteLayoutProps) {
    return (
        <>
            <Head title={title} />
            <div className="grid-bg min-h-screen">
                {showHeader && <Header />}
                <main className={showHeader ? 'pt-20' : ''}>{children}</main>
                {showFooter && <Footer />}
            </div>
        </>
    );
}
