import { HoneypotFields } from '@/components/honeypot-fields';
import { SectionHeading } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SiteLayout from '@/layouts/site-layout';
import { Form } from '@inertiajs/react';

const benefits = [
    {
        badge: 'Instant Response',
        title: '5-Second Initial Contact',
        description:
            'While your competitors take hours to respond, our AI agents engage every lead within seconds—day or night.',
        image: '/images/blog/reducing-response-time-5-second-advantage.png',
    },
    {
        badge: 'Lead Recovery',
        title: '30% More Leads Recovered',
        description:
            'Your CRM is full of cold leads. Our AI agents re-engage them automatically and turn lost opportunities into sales.',
        image: '/images/blog/5-ways-ai-recovers-lost-leads.png',
    },
    {
        badge: 'Automated Scheduling',
        title: 'Fill Your Calendar While You Sleep',
        description:
            'AI handles the back-and-forth of scheduling, automatically booking test drives and sales consultations.',
        image: '/images/calendar.png',
    },
];

const stats = [
    { value: '40%', label: 'Increased Vehicle Sales' },
    { value: '5s', label: 'Initial Contact Time' },
    { value: '30%', label: 'Old Leads Recovered' },
    { value: '15%', label: 'Higher Closing Ratio' },
];

const checklist = [
    '40% increase in vehicle sales',
    '5-second initial contact time',
    '30% old leads recovered',
    'No hiring headaches',
    '24/7 lead engagement',
    'Full inventory integration',
];

const partnerLogos = [
    { src: '/images/partner-logo-1.png', alt: 'Car Network Canada' },
    { src: '/images/partner-logo-2.png', alt: 'Powersport Network Canada' },
    { src: '/images/partner-logo-3.png', alt: 'Next Car Canada' },
    { src: '/images/partner-logo-4.png', alt: 'Marsim Auto Group' },
];

export default function Landing() {
    return (
        <SiteLayout title="Get Started">
            {/* Hero with Form */}
            <section className="relative -mt-20 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/hero-bg-landing.png"
                        alt=""
                        className="hero-bg-mask h-full w-full object-cover"
                    />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-44 md:pb-28 md:pt-56">
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                        <div>
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-300">
                                <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                                Limited Time Offer
                            </div>
                            <h1 className="glow-text text-5xl leading-tight font-bold md:text-6xl lg:text-7xl">
                                <span className="text-gradient">
                                    Sell More Cars
                                </span>
                                <br />
                                With AI That Never Sleeps
                            </h1>
                            <p className="mt-6 text-lg leading-relaxed text-gray-300 md:text-xl">
                                Join Canada&apos;s top dealerships using Auto
                                AI to qualify leads, book appointments, and
                                close deals—24 hours a day, 7 days a week.
                            </p>

                            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                                {checklist.map((item) => (
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
                            <h2 className="text-2xl font-bold text-white">
                                Get Your Free Demo
                            </h2>
                            <p className="mt-2 text-sm text-gray-400">
                                Fill out the form below and we&apos;ll contact
                                you within one business day.
                            </p>

                            <Form action="/landing" method="post" className="mt-6">
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

            {/* Stats */}
            <section className="border-y border-white/5 bg-surface-light/50 py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <SectionHeading
                        title="Meet Your New Top Producer"
                        subtitle="Built on cutting edge AI technology, our agents are fully configurable to your dealership's requirements."
                    />

                    <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 text-center transition-all duration-300 hover:border-brand-500/40 hover:shadow-lg hover:shadow-brand-500/10 md:p-8"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                <div className="relative">
                                    <div className="text-gradient text-4xl font-extrabold tabular-nums md:text-5xl">
                                        {stat.value}
                                    </div>
                                    <div className="mt-3 text-sm font-medium leading-snug text-gray-400">
                                        {stat.label}
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-brand-500 to-accent transition-all duration-500 group-hover:w-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="relative py-24">
                <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
                <div className="relative mx-auto max-w-7xl px-6">
                    <SectionHeading
                        title="Why Dealers Choose Auto AI Canada"
                        subtitle="Everything you need to turn your inventory into a 24/7 high-performance sales machine."
                    />

                    <div className="mt-16 space-y-24 md:space-y-32">
                        {benefits.map((benefit, i) => (
                            <div
                                key={benefit.title}
                                className={`group relative grid items-center gap-10 md:grid-cols-2 md:gap-16 ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}
                            >
                                <div className={`relative ${i % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
                                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-500/10 via-transparent to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                    <div className="glow-border relative overflow-hidden rounded-2xl border border-white/10 bg-surface-light/50 shadow-2xl shadow-brand-500/10">
                                        <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent" />
                                        <img
                                            src={benefit.image}
                                            alt={benefit.title}
                                            className="relative w-full transition-transform duration-700 group-hover:scale-[1.02]"
                                        />
                                    </div>
                                </div>
                                <div className={i % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-300">
                                        <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                                        {benefit.badge}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white md:text-3xl">
                                        {benefit.title}
                                    </h3>
                                    <p className="mt-4 leading-relaxed text-gray-400">
                                        {benefit.description}
                                    </p>
                                    <div className="mt-6 h-0.5 w-16 bg-gradient-to-r from-brand-500 to-accent transition-all duration-300 group-hover:w-24" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="border-t border-white/5 bg-surface-light/30 py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center">
                        <h2 className="text-gradient text-3xl font-bold md:text-4xl">
                            Trusted by Canada&apos;s Leading Auto Groups
                        </h2>
                        <p className="mt-4 text-lg text-gray-400">
                            From coast to coast, top dealer groups rely on Auto AI Canada.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-2 items-center gap-8 md:grid-cols-4 md:gap-12">
                        {partnerLogos.map((logo) => (
                            <div
                                key={logo.alt}
                                className="flex items-center justify-center px-4"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="max-h-12 w-auto object-contain opacity-70 brightness-110 transition-opacity hover:opacity-100 md:max-h-16"
                                />
                            </div>
                        ))}
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
                        Don&apos;t Let Another Lead Go Cold
                    </h2>
                    <p className="mt-4 text-lg text-brand-100">
                        Every minute you wait, a competitor is responding
                        faster. Book your free demo today.
                    </p>
                    <div className="mt-8">
                        <a href="#top" className="cursor-pointer">
                            <Button
                                size="lg"
                                className="border border-white/30 bg-white/10 text-white shadow-lg shadow-brand-900/30 backdrop-blur-sm hover:bg-white/20"
                            >
                                Book My Free Demo
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
