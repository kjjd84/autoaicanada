import type { Auth } from '@/types/auth';
import type { HoneypotData, SiteConfig } from '@/types/site';

declare global {
    interface Window {
        dataLayer?: Record<string, unknown>[];
    }
}

declare module 'react' {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface InputHTMLAttributes<T> {
        passwordrules?: string;
    }
}

declare module '@inertiajs/core' {
    export interface InertiaConfig {
        sharedPageProps: {
            name: string;
            auth: Auth;
            sidebarOpen: boolean;
            site: SiteConfig;
            honeypot: HoneypotData;
            [key: string]: unknown;
        };
    }
}

export {};
