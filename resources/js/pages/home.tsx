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

const testimonials = [
    {
        quote: 'We replaced our entire night-shift BDC with one Auto AI agent. Our appointment show-up rate actually went UP. It\'s a no-brainer.',
        name: 'Marcus T.',
        role: 'General Manager',
    },
    {
        quote: 'I was skeptical, but watching the AI agent handle a complex credit inquiry in real-time sold me. It\'s faster and more polite than half my floor staff.',
        name: 'Sarah L.',
        role: 'Internet Sales Director',
    },
    {
        quote: 'The inventory integration is a game changer. It knows my stock better than I do and recommends the right vehicle every single time.',
        name: 'David R.',
        role: 'Dealer Principal',
    },
    {
        quote: 'Finally, a tool that actually updates the lead data and moves the pipeline stages automatically. No more messy unstructured data.',
        name: 'Jason K.',
        role: 'Operations Manager',
    },
];

const features = [
    {
        title: 'Total Control, Even on Autopilot',
        description:
            'Watch the magic happen in real-time. Our AI agents engage customers with human-level nuance, but you\'re always in the driver\'s seat. Switch Autopilot off instantly to take over the chat, then hand it back whenever you need.',
        image: '/images/ai-agent.png',
    },
    {
        title: 'A Pipeline That Moves Itself',
        description:
            'Stop chasing status updates. As our AI qualifies a lead, it automatically moves them through your custom Kanban board—from Engaged to Qualified to Appointment. Visualizing your floor\'s performance has never been this effortless.',
        image: '/images/dashboard.png',
    },
    {
        title: 'Fill Your Calendar While You Sleep',
        description:
            'Our agents don\'t just talk—they convert. Auto AI Canada agents handle the back-and-forth of scheduling, automatically booking test drives and sales consultations without your team sending a single email.',
        image: '/images/ai-agent.png',
    },
];

export default function Home() {
    return (
        <SiteLayout title="Home">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/hero-bg.png"
                        alt=""
                        className="h-full w-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-surface/50 via-surface/80 to-surface" />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 py-32 md:py-44">
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
                            <Link href="/contact">
                                <Button size="lg">Book a Demo</Button>
                            </Link>
                            <Link href="/about">
                                <Button variant="outline" size="lg">
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="border-y border-white/5 bg-surface-light/50 py-16">
                <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-gradient text-4xl font-bold md:text-5xl">
                                {stat.value}
                            </div>
                            <div className="mt-2 text-sm text-gray-400">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <SectionHeading
                        title="Meet Your New Top Producer"
                        subtitle="Built on cutting edge AI technology, our agents are fully configurable to your dealership's requirements."
                    />

                    <div className="mt-20 space-y-32">
                        {features.map((feature, i) => (
                            <div
                                key={feature.title}
                                className={`grid items-center gap-12 md:grid-cols-2 ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}
                            >
                                <div className={i % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                                    <div className="glow-border overflow-hidden rounded-2xl">
                                        <img
                                            src={feature.image}
                                            alt={feature.title}
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                                <div className={i % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                                    <h3 className="text-2xl font-bold text-white md:text-3xl">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-4 leading-relaxed text-gray-400">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="border-t border-white/5 bg-surface-light/30 py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <SectionHeading
                        title="The AI That's Outperforming the Floor"
                        subtitle="Trusted by Canada's leading auto groups."
                    />

                    <div className="mt-16 grid gap-6 md:grid-cols-2">
                        {testimonials.map((t) => (
                            <div
                                key={t.name}
                                className="glow-border rounded-2xl border border-white/5 bg-white/5 p-8"
                            >
                                <p className="text-lg leading-relaxed text-gray-300 italic">
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                                <div className="mt-6">
                                    <div className="font-semibold text-white">
                                        {t.name}
                                    </div>
                                    <div className="text-sm text-brand-300">
                                        {t.role}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-gradient text-3xl font-bold md:text-4xl">
                        Ready to Transform Your Dealership?
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Join Canada&apos;s leading dealerships using AI to sell
                        more vehicles, recover more leads, and close more deals.
                    </p>
                    <div className="mt-8">
                        <Link href="/contact">
                            <Button size="lg">Get Started Today</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
