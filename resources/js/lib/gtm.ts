import { router } from '@inertiajs/react';

export function initGtmPageTracking(): void {
    router.on('navigate', () => {
        window.dataLayer = window.dataLayer ?? [];

        window.dataLayer.push({
            event: 'inertia_pageview',
            page_path: window.location.pathname + window.location.search,
            page_title: document.title,
        });
    });
}
