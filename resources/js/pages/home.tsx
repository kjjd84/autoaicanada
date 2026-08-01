import { SectionHeading } from '@/components/header';
import { Button } from '@/components/ui/button';
import SiteLayout from '@/layouts/site-layout';
import { Link } from '@inertiajs/react';

const stats = [
    { value: '40%', label: 'Increased Vehicle Sales' },
    { value: '30%', label: 'Old Leads Recovered' },
    { value: '5s', label: 'Initial Contact Time' },
    { value: '15%', label: 'Higher Closing Ratio' },
];

const partnerLogos = [
    { src: '/images/partner-logo-1.png', alt: 'Car Network Canada' },
    { src: '/images/partner-logo-2.png', alt: 'Powersport Network Canada' },
    { src: '/images/partner-logo-3.png', alt: 'Next Car Canada' },
    { src: '/images/partner-logo-4.png', alt: 'Marsim Auto Group' },
];

const testimonials = [
    {
        quote: 'We replaced our entire night-shift BDC with one Auto AI agent. Our appointment show-up rate actually went UP. It\'s a no-brainer.',
        name: 'Marcus T.',
        role: 'General Manager',
        image: '/images/testimonial-marcus-t.png',
    },
    {
        quote: 'I was skeptical, but watching the AI agent handle a complex credit inquiry in real-time sold me. It\'s faster and more polite than half my floor staff.',
        name: 'Sarah L.',
        role: 'Internet Sales Director',
        image: '/images/testimonial-sarah-l.png',
    },
    {
        quote: 'The inventory integration is a game changer. It knows my stock better than I do and recommends the right vehicle every single time.',
        name: 'David R.',
        role: 'Dealer Principal',
        image: '/images/testimonial-david-r.png',
    },
    {
        quote: 'Finally, a tool that actually updates the lead data and moves the pipeline stages automatically. No more messy unstructured data.',
        name: 'Jason K.',
        role: 'Operations Manager',
        image: '/images/testimonial-jason-k.png',
    },
];

const features = [
    {
        badge: 'Autopilot Mode',
        title: 'Total Control, Even on Autopilot',
        description:
            'Watch the magic happen in real-time. Our AI agents engage customers with human-level nuance, but you\'re always in the driver\'s seat. Switch Autopilot off instantly to take over the chat, then hand it back whenever you need.',
        image: '/images/ai-agent.png',
    },
    {
        badge: 'Intelligent Pipeline',
        title: 'A Pipeline That Moves Itself',
        description:
            'Stop chasing status updates. As our AI qualifies a lead, it automatically moves them through your custom Kanban board—from Engaged to Qualified to Appointment. Visualizing your floor\'s performance has never been this effortless.',
        image: '/images/dashboard.png',
    },
    {
        badge: 'Automated Calendar',
        title: 'Fill Your Calendar While You Sleep',
        description:
            'Our agents don\'t just talk—they convert. Auto AI Canada agents handle the back-and-forth of scheduling, automatically booking test drives and sales consultations without your team sending a single email.',
        image: '/images/calendar.png',
    },
];

export default function Home() {
    return (
        <SiteLayout title="Home">
            {/* Hero */}
            <section className="relative -mt-20 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/hero-bg.png"
                        alt=""
                        className="hero-bg-mask h-full w-full object-cover"
                    />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 pb-32 pt-44 md:pb-44 md:pt-56">
                    <div className="max-w-3xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-300">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                            Canada&apos;s Premier Automotive AI Platform
                        </div>
                        <h1 className="glow-text text-5xl leading-tight font-bold md:text-7xl">
                            <span className="text-gradient">
                                More Appointments.
                            </span>
                            <br />
                            More Deliveries.
                        </h1>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300 md:text-xl">
                            We don&apos;t just capture leads—we qualify, nurture,
                            and close them. Automate your entire sales funnel and
                            turn your vehicle inventory into a 24/7
                            high-performance sales machine.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link href="/landing" className="cursor-pointer">
                                <Button size="lg">Book a Demo</Button>
                            </Link>
                            <Link href="/about" className="cursor-pointer">
                                <Button variant="outline" size="lg">
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="relative py-24">
                <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
                <div className="relative mx-auto max-w-7xl px-6">
                    <div className="mt-4 space-y-24 md:space-y-32">
                        {features.map((feature, i) => (
                            <div
                                key={feature.title}
                                className={`group relative grid items-center gap-10 md:grid-cols-2 md:gap-16 ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}
                            >
                                <div className={`relative ${i % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
                                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-500/10 via-transparent to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                    <div className="glow-border relative overflow-hidden rounded-2xl border border-white/10 bg-surface-light/50 shadow-2xl shadow-brand-500/10">
                                        <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent" />
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="relative w-full transition-transform duration-700 group-hover:scale-[1.02]"
                                        />
                                    </div>
                                    <div className="absolute -bottom-3 -right-3 hidden h-24 w-24 rounded-full bg-brand-500/10 blur-2xl md:block" />
                                </div>
                                <div className={i % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-300">
                                        <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                                        {feature.badge}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white md:text-3xl">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-4 leading-relaxed text-gray-400">
                                        {feature.description}
                                    </p>
                                    <div className="mt-6 h-0.5 w-16 bg-gradient-to-r from-brand-500 to-accent transition-all duration-300 group-hover:w-24" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats + Top Producer */}
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

                    <div className="mt-12 text-center">
                        <Link href="/landing" className="cursor-pointer">
                            <Button size="lg">Book a Demo</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
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
                                Trusted by Canada&apos;s Leading Auto Groups.
                            </h2>
                            <p className="mt-4 text-lg text-gray-400">
                                From coast to coast, Canada&apos;s top dealer groups rely on Auto AI Canada to drive more sales.
                            </p>
                            <div className="mt-10 grid grid-cols-2 items-center gap-8 md:gap-12">
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
                    </div>

                    <div className="mt-28">
                        <SectionHeading
                            title="The AI That's Outperforming the Floor"
                            subtitle="Real results from dealers who've made the switch."
                        />
                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2">
                        {testimonials.map((t) => (
                            <div
                                key={t.name}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 transition-all duration-300 hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/10"
                            >
                                <div className="absolute top-6 right-8 text-5xl leading-none font-serif text-brand-500/20 select-none">
                                    &ldquo;
                                </div>
                                <div className="relative">
                                    <p className="text-base leading-relaxed text-gray-300">
                                        {t.quote}
                                    </p>
                                    <div className="mt-6 flex items-center gap-4">
                                        <img
                                            src={t.image}
                                            alt={t.name}
                                            className="h-11 w-11 shrink-0 rounded-full object-cover"
                                        />
                                        <div>
                                            <div className="font-semibold text-white">
                                                {t.name}
                                            </div>
                                            <div className="text-sm text-brand-300">
                                                {t.role}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-brand-500 to-accent transition-all duration-500 group-hover:w-full" />
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
                        Ready to Transform Your Dealership?
                    </h2>
                    <p className="mt-4 text-lg text-brand-100">
                        Join Canada&apos;s leading dealerships using AI to sell
                        more vehicles, recover more leads, and close more deals.
                    </p>
                    <div className="mt-8">
                        <Link href="/landing" className="cursor-pointer">
                            <Button
                                size="lg"
                                className="border border-white/30 bg-white/10 text-white shadow-lg shadow-brand-900/30 backdrop-blur-sm hover:bg-white/20"
                            >
                                Get Started Today
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
