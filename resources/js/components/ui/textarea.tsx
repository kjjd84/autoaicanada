import { FieldLabel } from '@/components/ui/field-label';
import { cn } from '@/lib/utils';
import type { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export function Textarea({
    className,
    label,
    error,
    id,
    ...props
}: TextareaProps) {
    const textareaId = id ?? props.name;

    return (
        <div className="space-y-1.5">
            {label && <FieldLabel htmlFor={textareaId}>{label}</FieldLabel>}
            <textarea
                id={textareaId}
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
