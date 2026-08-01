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
            {label && (
                <label
                    htmlFor={selectId}
                    className="block text-sm font-medium text-gray-300"
                >
                    {label}
                </label>
            )}
            <select
                id={selectId}
                className={cn(
                    'w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white transition-colors focus:border-brand-500 focus:ring-1 focus:ring-brand-500/50 focus:outline-none',
                    error && 'border-red-500',
                    className,
                )}
                {...props}
            >
                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                        className="bg-surface-light"
                    >
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <p className="text-sm text-red-400">{error}</p>}
        </div>
    );
}
