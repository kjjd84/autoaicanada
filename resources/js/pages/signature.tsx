import { HoneypotFields } from '@/components/honeypot-fields';
import { SignaturePad } from '@/components/signature-pad';
import { SectionHeading } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SiteLayout from '@/layouts/site-layout';
import { Form } from '@inertiajs/react';
import { useState } from 'react';

interface SignaturePrefill {
    your_name: string | null;
    todays_date: string;
}

interface SignatureProps {
    token: string | null;
    prefill: SignaturePrefill;
    tokenValid: boolean;
}

export default function Signature({
    token,
    prefill,
    tokenValid,
}: SignatureProps) {
    const [signature, setSignature] = useState('');

    return (
        <SiteLayout title="Signature Authorization" showHeader={false}>
            <section className="py-12">
                <div className="mx-auto max-w-2xl px-6">
                    <div className="mb-8 text-center">
                        <img
                            src="/images/logo.png"
                            alt="Auto AI Canada"
                            className="mx-auto mb-6 h-12 w-auto"
                        />
                        <SectionHeading title="Authorization & Signature" />
                    </div>

                    {token && !tokenValid && (
                        <div className="mb-8 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-200">
                            This signature link has expired or is invalid. You
                            can still complete the form below.
                        </div>
                    )}

                    <div className="glow-border rounded-2xl border border-white/5 bg-white/5 p-8">
                        <div className="mb-8 space-y-4 text-sm leading-relaxed text-gray-300">
                            <p>
                                By submitting this form, you certify that the
                                information provided in our previous email is
                                accurate and that you are an authorized signer
                                for the credit card details provided.
                            </p>
                            <p>
                                You hereby authorize Auto AI Canada to manually
                                process the initial prorated charge, monthly
                                service fee, and additional text amount as
                                detailed in our agreement.
                            </p>
                        </div>

                        <Form
                            action="/signature"
                            method="post"
                            className="space-y-6"
                        >
                            {({ errors, processing }) => (
                                <>
                                    <HoneypotFields />
                                    {token && (
                                        <input
                                            type="hidden"
                                            name="token"
                                            value={token}
                                        />
                                    )}
                                    <Input
                                        name="todays_date"
                                        label="Today's Date"
                                        type="date"
                                        defaultValue={prefill.todays_date}
                                        error={errors.todays_date}
                                    />
                                    <Input
                                        name="your_name"
                                        label="Your Name"
                                        defaultValue={prefill.your_name ?? ''}
                                        error={errors.your_name}
                                    />
                                    <SignaturePad
                                        name="signature"
                                        value={signature}
                                        onChange={setSignature}
                                        error={errors.signature}
                                    />
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full"
                                        disabled={processing}
                                    >
                                        {processing
                                            ? 'Submitting...'
                                            : 'Submit Authorization'}
                                    </Button>
                                </>
                            )}
                        </Form>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
