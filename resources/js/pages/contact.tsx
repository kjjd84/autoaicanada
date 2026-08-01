import { HoneypotFields } from '@/components/honeypot-fields';
import { SectionHeading } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import SiteLayout from '@/layouts/site-layout';
import { Form, Link, usePage } from '@inertiajs/react';
import type { LucideIcon } from 'lucide-react';
import { Handshake, MessageCircleQuestion, MonitorPlay } from 'lucide-react';

const contactReasons: {
    icon: LucideIcon;
    iconClassName: string;
    title: string;
    description: string;
}[] = [
    {
        icon: MonitorPlay,
        iconClassName:
            'border-brand-400/30 bg-gradient-to-br from-brand-500/20 to-brand-500/5 text-brand-300 group-hover:border-brand-400/50 group-hover:shadow-brand-500/20',
        title: 'Book a Demo',
        description:
            'See Auto AI Canada in action with a personalized walkthrough of the platform.',
    },
    {
        icon: MessageCircleQuestion,
        iconClassName:
            'border-accent/30 bg-gradient-to-br from-accent/15 to-accent/5 text-accent group-hover:border-accent/50 group-hover:shadow-accent/20',
        title: 'General Inquiry',
        description:
            "Have questions about pricing, integrations, or custom agent configuration? We're here to help.",
    },
    {
        icon: Handshake,
        iconClassName:
            'border-brand-300/30 bg-gradient-to-br from-brand-300/15 to-brand-300/5 text-brand-200 group-hover:border-brand-300/50 group-hover:shadow-brand-300/20',
        title: 'Partnership',
        description:
            "Interested in partnering with Auto AI Canada? Let's explore opportunities together.",
    },
];

export default function Contact() {
    const { site } = usePage().props;

    return (
        <SiteLayout title="Contact">
            {/* Hero */}
            <section className="relative -mt-20 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/hero-bg-contact.png"
                        alt=""
                        className="hero-bg-mask h-full w-full object-cover"
                    />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-44 md:pb-28 md:pt-56">
                    <div className="max-w-3xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-300">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                            We&apos;re Here to Help
                        </div>
                        <h1 className="glow-text text-5xl leading-tight font-bold md:text-7xl">
                            <span className="text-gradient">
                                Get in Touch
                            </span>
                        </h1>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300 md:text-xl">
                            Ready to book a demo or have questions? Our team
                            will reach out within one business day.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info + Form */}
            <section className="relative py-24">
                <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
                <div className="relative mx-auto max-w-7xl px-6">
                    <div className="grid items-start gap-16 lg:grid-cols-2">
                        {/* Left: Info */}
                        <div>
                            <SectionHeading
                                title="Let's Talk"
                                subtitle="Whether you want a live demo or need details on custom agent configuration, we're ready to help."
                            />

                            <div className="mt-10 space-y-6">
                                <div className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 transition-all duration-300 hover:border-brand-500/40">
                                    <h4 className="font-semibold text-brand-300">
                                        Phone
                                    </h4>
                                    <a
                                        href={`tel:${site.phone.replace(/[^\d+]/g, '')}`}
                                        className="mt-2 inline-block text-lg text-white transition-colors hover:text-brand-300"
                                    >
                                        {site.phone}
                                    </a>
                                </div>
                                <div className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 transition-all duration-300 hover:border-brand-500/40">
                                    <h4 className="font-semibold text-brand-300">
                                        Address
                                    </h4>
                                    <p className="mt-2 text-lg text-white">
                                        {site.address}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10 grid gap-6">
                                {contactReasons.map((reason) => {
                                    const Icon = reason.icon;

                                    return (
                                    <div
                                        key={reason.title}
                                        className="group flex gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-6 transition-all duration-300 hover:border-brand-500/30"
                                    >
                                        <div
                                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-lg shadow-transparent transition-all duration-300 group-hover:shadow-lg ${reason.iconClassName}`}
                                        >
                                            <Icon className="h-6 w-6" strokeWidth={1.75} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">
                                                {reason.title}
                                            </h4>
                                            <p className="mt-1 text-sm text-gray-400">
                                                {reason.description}
                                            </p>
                                        </div>
                                    </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="glow-border sticky top-28 rounded-2xl border border-white/10 bg-surface-light/80 p-8 backdrop-blur-xl">
                            <h2 className="text-2xl font-bold text-white">
                                Send Us a Message
                            </h2>
                            <p className="mt-2 text-sm text-gray-400">
                                Fill out the form below and we&apos;ll get back
                                to you shortly.
                            </p>

                            <Form action="/contact" method="post" className="mt-8">
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
                                            size="lg"
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

            {/* Map / Coverage */}
            <section className="border-t border-white/5 bg-surface-light/30 py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                        <div className="glow-border relative overflow-hidden rounded-2xl border border-white/10 bg-surface-light/50 shadow-2xl shadow-brand-500/10">
                            <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent" />
                            <img
                                src="/images/canada-map.png"
                                alt="Map of Canada showing nationwide dealer coverage"
                                className="relative w-full"
                            />
                        </div>
                        <div>
                            <h2 className="text-gradient text-3xl font-bold md:text-4xl">
                                Proudly Serving Canadian Dealers
                            </h2>
                            <p className="mt-4 text-lg text-gray-400">
                                From the Maritimes to the West Coast, Auto AI
                                Canada supports dealerships of every size. Our
                                agents are built for the unique nuances of the
                                Canadian market.
                            </p>
                            <div className="mt-8">
                                <Link href="/landing" className="cursor-pointer">
                                    <Button size="lg">Book a Demo</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative overflow-hidden py-24">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-600/30 to-brand-500/25" />
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src="/images/cta-bg.png"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover object-center opacity-25 mix-blend-overlay"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-700/15 via-transparent to-brand-500/10" />

                <div className="relative mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-3xl font-bold text-white md:text-4xl">
                        Prefer to Talk Now?
                    </h2>
                    <p className="mt-4 text-lg text-brand-100">
                        Call us directly and speak with our team about how Auto
                        AI Canada can help your dealership.
                    </p>
                    <div className="mt-8">
                        <a
                            href={`tel:${site.phone.replace(/[^\d+]/g, '')}`}
                            className="cursor-pointer"
                        >
                            <Button
                                size="lg"
                                className="border border-white/30 bg-white/10 text-white shadow-lg shadow-brand-900/30 backdrop-blur-sm hover:bg-white/20"
                            >
                                {site.phone}
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
