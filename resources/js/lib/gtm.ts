import { router } from '@inertiajs/react';

export function pushPageView(): void {
    window.dataLayer = window.dataLayer ?? [];

    window.dataLayer.push({
        event: 'page_view',
        page_location: window.location.href,
        page_path: window.location.pathname + window.location.search,
        page_title: document.title,
    });
}

export function initGtmPageTracking(): void {
    let isInitialPage = true;

    router.on('navigate', () => {
        if (isInitialPage) {
            isInitialPage = false;

            return;
        }

        pushPageView();
    });
}
