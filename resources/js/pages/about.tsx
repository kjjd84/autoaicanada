import { SectionHeading } from '@/components/header';
import { Button } from '@/components/ui/button';
import SiteLayout from '@/layouts/site-layout';
import { Link } from '@inertiajs/react';

const values = [
    {
        badge: 'Canadian Built',
        title: 'Built for the Canadian Market',
        description:
            'From the Maritimes to the West Coast, our AI agents understand the unique nuances of selling vehicles in every province and territory.',
        image: '/images/canada-map.png',
    },
    {
        badge: 'Full Control',
        title: 'You\'re Always in the Driver\'s Seat',
        description:
            'Switch Autopilot off instantly to take over any conversation, then hand it back to the AI whenever you need. Total control, even on autopilot.',
        image: '/images/ai-agent.png',
    },
    {
        badge: 'Proven Results',
        title: 'Results That Speak for Themselves',
        description:
            '40% increased vehicle sales, 30% old leads recovered, and 5-second initial contact times across our growing dealer network.',
        image: '/images/dashboard.png',
    },
];

const stats = [
    { value: '40%', label: 'Increased Vehicle Sales' },
    { value: '30%', label: 'Old Leads Recovered' },
    { value: '5s', label: 'Initial Contact Time' },
    { value: '15%', label: 'Higher Closing Ratio' },
];

const team = [
    {
        title: 'Mission',
        description:
            'Revolutionize how Canadian dealerships sell vehicles by automating the entire sales funnel—from lead capture to appointment booking to closing.',
    },
    {
        title: 'Technology',
        description:
            'Built on cutting edge AI that verifies and updates lead data in real-time, browses your inventory, and engages customers with human-level nuance.',
    },
    {
        title: 'Vision',
        description:
            'Every Canadian dealership equipped with a 24/7 AI sales team that never sleeps, never forgets a follow-up, and never lets a lead go cold.',
    },
];

export default function About() {
    return (
        <SiteLayout title="About">
            {/* Hero */}
            <section className="relative -mt-20 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/hero-bg-about.png"
                        alt=""
                        className="hero-bg-mask h-full w-full object-cover"
                    />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 pb-32 pt-44 md:pb-44 md:pt-56">
                    <div className="max-w-3xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-300">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                            Our Story
                        </div>
                        <h1 className="glow-text text-5xl leading-tight font-bold md:text-7xl">
                            <span className="text-gradient">
                                About Auto AI
                            </span>
                            <br />
                            Canada
                        </h1>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300 md:text-xl">
                            Canada&apos;s premier automotive AI sales platform,
                            built for dealers who want to sell more without
                            hiring more.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link href="/landing" className="cursor-pointer">
                                <Button size="lg">Book a Demo</Button>
                            </Link>
                            <Link href="/contact" className="cursor-pointer">
                                <Button variant="outline" size="lg">
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Cards */}
            <section className="border-y border-white/5 bg-surface-light/50 py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <SectionHeading
                        title="Who We Are"
                        subtitle="We don't just capture leads—we qualify, nurture, and close them."
                    />

                    <div className="mt-16 grid gap-8 md:grid-cols-3">
                        {team.map((item) => (
                            <div
                                key={item.title}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 transition-all duration-300 hover:border-brand-500/40 hover:shadow-lg hover:shadow-brand-500/10"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                <div className="relative">
                                    <h3 className="text-gradient text-xl font-bold">
                                        {item.title}
                                    </h3>
                                    <p className="mt-4 leading-relaxed text-gray-400">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-brand-500 to-accent transition-all duration-500 group-hover:w-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values - alternating feature layout */}
            <section className="relative py-24">
                <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
                <div className="relative mx-auto max-w-7xl px-6">
                    <SectionHeading
                        title="What Sets Us Apart"
                        subtitle="It's all the talent of a 20-year veteran salesperson, with none of the overhead."
                    />

                    <div className="mt-16 space-y-24 md:space-y-32">
                        {values.map((value, i) => (
                            <div
                                key={value.title}
                                className={`group relative grid items-center gap-10 md:grid-cols-2 md:gap-16 ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}
                            >
                                <div className={`relative ${i % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
                                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-500/10 via-transparent to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                    <div className="glow-border relative overflow-hidden rounded-2xl border border-white/10 bg-surface-light/50 shadow-2xl shadow-brand-500/10">
                                        <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent" />
                                        <img
                                            src={value.image}
                                            alt={value.title}
                                            className="relative w-full transition-transform duration-700 group-hover:scale-[1.02]"
                                        />
                                    </div>
                                </div>
                                <div className={i % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-300">
                                        <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                                        {value.badge}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white md:text-3xl">
                                        {value.title}
                                    </h3>
                                    <p className="mt-4 leading-relaxed text-gray-400">
                                        {value.description}
                                    </p>
                                    <div className="mt-6 h-0.5 w-16 bg-gradient-to-r from-brand-500 to-accent transition-all duration-300 group-hover:w-24" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="border-y border-white/5 bg-surface-light/30 py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <SectionHeading
                        title="By the Numbers"
                        subtitle="Real results from dealerships across Canada."
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
                        Ready to See It in Action?
                    </h2>
                    <p className="mt-4 text-lg text-brand-100">
                        Book a demo and see how Auto AI Canada can transform
                        your dealership&apos;s sales floor.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link href="/landing" className="cursor-pointer">
                            <Button
                                size="lg"
                                className="border border-white/30 bg-white/10 text-white shadow-lg shadow-brand-900/30 backdrop-blur-sm hover:bg-white/20"
                            >
                                Book a Demo
                            </Button>
                        </Link>
                        <Link href="/contact" className="cursor-pointer">
                            <Button variant="outline" size="lg">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
