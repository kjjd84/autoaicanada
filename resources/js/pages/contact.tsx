import { HoneypotFields } from '@/components/honeypot-fields';
import { SectionHeading } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import SiteLayout from '@/layouts/site-layout';
import { Form, usePage } from '@inertiajs/react';

export default function Contact() {
    const { site } = usePage().props;
    return (
        <SiteLayout title="Contact">
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <SectionHeading
                        title="Contact Us"
                        subtitle="Ready to book a demo or have questions? We're here to help."
                    />

                    <div className="mx-auto mt-16 grid max-w-5xl gap-16 md:grid-cols-2">
                        <div>
                            <h3 className="text-xl font-bold text-white">
                                Get in Touch Today
                            </h3>
                            <p className="mt-4 leading-relaxed text-gray-400">
                                Whether you want a live demo or need details on
                                custom agent configuration, simply complete the
                                form to get in touch. Our team will reach out
                                within one business day.
                            </p>

                            <div className="mt-8 space-y-4">
                                <div>
                                    <h4 className="font-semibold text-brand-300">
                                        Phone
                                    </h4>
                                    <a
                                        href={`tel:${site.phone.replace(/[^\d+]/g, '')}`}
                                        className="mt-1 inline-block text-sm text-gray-400 transition-colors hover:text-brand-300"
                                    >
                                        {site.phone}
                                    </a>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-brand-300">
                                        Address
                                    </h4>
                                    <p className="mt-1 text-sm text-gray-400">
                                        {site.address}
                                    </p>
                                </div>
                                <h4 className="font-semibold text-brand-300">
                                    Proudly Serving Canadian Dealers
                                </h4>
                                <p className="text-sm leading-relaxed text-gray-400">
                                    From the Maritimes to the West Coast, Auto AI
                                    Canada supports Canadian dealerships of every
                                    size. Our agents are built for the unique
                                    nuances of the Canadian market.
                                </p>
                            </div>
                        </div>

                        <div className="glow-border rounded-2xl border border-white/5 bg-white/5 p-8">
                            <Form action="/contact" method="post">
                                {({ errors, processing }) => (
                                    <div className="space-y-4">
                                        <HoneypotFields />
                                        <Input
                                            name="name"
                                            label="Your Name *"
                                            required
                                            error={errors.name}
                                        />
                                        <Input
                                            name="dealership_name"
                                            label="Dealership Name *"
                                            required
                                            error={errors.dealership_name}
                                        />
                                        <Input
                                            name="phone"
                                            label="Your Phone Number *"
                                            type="tel"
                                            required
                                            error={errors.phone}
                                        />
                                        <Input
                                            name="email"
                                            label="Your Email Address *"
                                            type="email"
                                            required
                                            error={errors.email}
                                        />
                                        <Select
                                            name="reason"
                                            label="Reason for Contact *"
                                            required
                                            error={errors.reason}
                                            options={[
                                                {
                                                    value: 'demo',
                                                    label: 'Book a Demo',
                                                },
                                                {
                                                    value: 'general',
                                                    label: 'General Inquiry',
                                                },
                                                {
                                                    value: 'other',
                                                    label: 'Other',
                                                },
                                            ]}
                                        />
                                        <Textarea
                                            name="message"
                                            label="Message"
                                            rows={4}
                                            error={errors.message}
                                        />
                                        <Button
                                            type="submit"
                                            className="w-full"
                                            disabled={processing}
                                        >
                                            {processing
                                                ? 'Sending...'
                                                : 'Send Message'}
                                        </Button>
                                    </div>
                                )}
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
