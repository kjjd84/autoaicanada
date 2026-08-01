interface FieldLabelProps {
    htmlFor?: string;
    children: string;
}

export function FieldLabel({ htmlFor, children }: FieldLabelProps) {
    const parts = children.split(/(\*)/g);

    return (
        <label
            htmlFor={htmlFor}
            className="block text-sm font-medium text-gray-300"
        >
            {parts.map((part, index) =>
                part === '*' ? (
                    <span key={index} className="text-red-500">
                        *
                    </span>
                ) : (
                    part
                ),
            )}
        </label>
    );
}
