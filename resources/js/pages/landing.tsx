import { HoneypotFields } from '@/components/honeypot-fields';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SiteLayout from '@/layouts/site-layout';
import { Form } from '@inertiajs/react';

export default function Landing() {
    return (
        <SiteLayout title="Get Started">
            {/* Hero with Form */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/hero-bg.png"
                        alt=""
                        className="h-full w-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-surface/90 to-surface" />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div>
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-300">
                                <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                                Limited Time Offer
                            </div>
                            <h1 className="glow-text text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
                                <span className="text-gradient">
                                    Sell More Cars
                                </span>
                                <br />
                                With AI That Never Sleeps
                            </h1>
                            <p className="mt-6 text-lg leading-relaxed text-gray-300">
                                Join Canada&apos;s top dealerships using Auto AI
                                to qualify leads, book appointments, and close
                                deals—24 hours a day, 7 days a week.
                            </p>

                            <ul className="mt-8 space-y-3">
                                {[
                                    '40% increase in vehicle sales',
                                    '5-second initial contact time',
                                    '30% old leads recovered',
                                    'No hiring headaches',
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-3 text-gray-300"
                                    >
                                        <svg
                                            className="h-5 w-5 shrink-0 text-accent"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="glow-border rounded-2xl border border-brand-500/20 bg-surface-light/80 p-8 backdrop-blur-xl">
                            <h2 className="mb-2 text-2xl font-bold text-white">
                                Get Your Free Demo
                            </h2>
                            <p className="mb-6 text-sm text-gray-400">
                                Fill out the form below and we&apos;ll contact
                                you within one business day.
                            </p>

                            <Form action="/landing" method="post">
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
                                            label="Phone Number *"
                                            type="tel"
                                            required
                                            error={errors.phone}
                                        />
                                        <Input
                                            name="email"
                                            label="Email Address *"
                                            type="email"
                                            required
                                            error={errors.email}
                                        />
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full"
                                            disabled={processing}
                                        >
                                            {processing
                                                ? 'Submitting...'
                                                : 'Book My Free Demo'}
                                        </Button>
                                    </div>
                                )}
                            </Form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="border-t border-white/5 py-16">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <p className="text-sm tracking-wider text-gray-500 uppercase">
                        Trusted by Canada&apos;s Leading Auto Groups
                    </p>
                    <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
                        {[
                            { value: '40%', label: 'More Sales' },
                            { value: '5s', label: 'Response Time' },
                            { value: '30%', label: 'Leads Recovered' },
                            { value: '15%', label: 'Higher Close Rate' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div className="text-gradient text-3xl font-bold">
                                    {stat.value}
                                </div>
                                <div className="mt-1 text-sm text-gray-400">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
