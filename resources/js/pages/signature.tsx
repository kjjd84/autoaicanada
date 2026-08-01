import { HoneypotFields } from '@/components/honeypot-fields';
import { SignaturePad } from '@/components/signature-pad';
import { SectionHeading } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useHoneypot } from '@/hooks/use-honeypot';
import SiteLayout from '@/layouts/site-layout';
import { useForm } from '@inertiajs/react';

function SignatureForm() {
    const honeypot = useHoneypot();
    const { data, setData, post, processing, errors } = useForm({
        date: new Date().toISOString().split('T')[0],
        name: '',
        signature: '',
        [honeypot.nameFieldName]: '',
        [honeypot.validFromFieldName]: honeypot.encryptedValidFrom,
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post('/signature');
    }

    return (
        <form onSubmit={submit} className="space-y-6">
            <HoneypotFields />
            <Input
                name="date"
                label="Today's Date *"
                type="date"
                value={data.date}
                onChange={(e) => setData('date', e.target.value)}
                required
                error={errors.date}
            />
            <Input
                name="name"
                label="Your Name *"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
                required
                error={errors.name}
            />
            <SignaturePad
                value={data.signature}
                onChange={(value) => setData('signature', value)}
                error={errors.signature}
            />
            <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={processing}
            >
                {processing ? 'Submitting...' : 'Submit Authorization'}
            </Button>
        </form>
    );
}

export default function Signature() {
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

                    <div className="glow-border rounded-2xl border border-white/5 bg-white/5 p-8">
                        <div className="mb-8 space-y-4 text-sm leading-relaxed text-gray-300">
                            <p>
                                By submitting this form, you certify that the
                                information provided in our previous email is
                                accurate and that you are an authorized signer
                                for the credit card details provided.
                            </p>
                            <p>
                                You hereby authorize Car Network Canada Inc. to
                                manually process the initial prorated charge,
                                monthly service fee, and additional text amount
                                as detailed in our agreement.
                            </p>
                        </div>

                        <SignatureForm />
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
