import { FieldLabel } from '@/components/ui/field-label';
import { cn } from '@/lib/utils';
import type { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    options: { value: string; label: string }[];
}

export function Select({
    className,
    label,
    error,
    id,
    options,
    ...props
}: SelectProps) {
    const selectId = id ?? props.name;

    return (
        <div className="space-y-1.5">
            {label && <FieldLabel htmlFor={selectId}>{label}</FieldLabel>}
            <div className="relative">
                <select
                    id={selectId}
                    className={cn(
                        'w-full appearance-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 pr-10 text-white transition-colors focus:border-brand-500 focus:ring-1 focus:ring-brand-500/50 focus:outline-none scheme-dark',
                        error && 'border-red-500',
                        className,
                    )}
                    {...props}
                >
                    {options.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                            className="bg-surface-light text-white"
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                    <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>
            {error && <p className="text-sm text-red-400">{error}</p>}
        </div>
    );
}
