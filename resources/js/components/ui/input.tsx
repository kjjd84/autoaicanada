import { FieldLabel } from '@/components/ui/field-label';
import { cn } from '@/lib/utils';
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export function Input({ className, label, error, id, ...props }: InputProps) {
    const inputId = id ?? props.name;

    return (
        <div className="space-y-1.5">
            {label && <FieldLabel htmlFor={inputId}>{label}</FieldLabel>}
            <input
                id={inputId}
                className={cn(
                    'w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-brand-500 focus:ring-1 focus:ring-brand-500/50 focus:outline-none',
                    error && 'border-red-500',
                    className,
                )}
                {...props}
            />
            {error && <p className="text-sm text-red-400">{error}</p>}
        </div>
    );
}
