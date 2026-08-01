import type { HoneypotData } from '@/types/site';
import { usePage } from '@inertiajs/react';

export function useHoneypot(): HoneypotData {
    const { honeypot } = usePage().props;

    return honeypot;
}
