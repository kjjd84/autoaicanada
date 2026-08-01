import { useHoneypot } from '@/hooks/use-honeypot';

export function HoneypotFields() {
    const honeypot = useHoneypot();

    if (!honeypot.enabled) {
        return null;
    }

    return (
        <>
            <div
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}
            >
                <label htmlFor={honeypot.nameFieldName}>
                    Do not fill this out
                </label>
                <input
                    type="text"
                    id={honeypot.nameFieldName}
                    name={honeypot.nameFieldName}
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>
            <input
                type="hidden"
                name={honeypot.validFromFieldName}
                value={honeypot.encryptedValidFrom}
            />
        </>
    );
}
