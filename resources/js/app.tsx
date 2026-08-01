import { createInertiaApp } from '@inertiajs/react';
import { initGtmPageTracking } from '@/lib/gtm';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

initGtmPageTracking();

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    progress: {
        color: '#0077e6',
    },
});
