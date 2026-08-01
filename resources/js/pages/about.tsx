import { SectionHeading } from '@/components/header';
import { Button } from '@/components/ui/button';
import SiteLayout from '@/layouts/site-layout';
import { Link } from '@inertiajs/react';

export default function About() {
    return (
        <SiteLayout title="About">
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <SectionHeading
                        title="About Auto AI Canada"
                        subtitle="Canada's premier automotive AI sales platform, built for dealers who want to sell more."
                    />

                    <div className="mx-auto mt-16 max-w-3xl space-y-6 text-lg leading-relaxed text-gray-300">
                        <p>
                            Auto AI Canada is revolutionizing how Canadian
                            dealerships sell vehicles. We don&apos;t just capture
                            leads—we qualify, nurture, and close them. Our
                            platform automates your entire sales funnel, turning
                            your vehicle inventory into a 24/7 high-performance
                            sales machine.
                        </p>
                        <p>
                            Built on cutting edge AI technology, our agents are
                            fully configurable to your dealership&apos;s
                            requirements. They do more than chat; they verify and
                            update lead data in real-time, and can even browse
                            your current inventory to suggest the perfect vehicle
                            match.
                        </p>
                        <p>
                            It&apos;s all the talent of a 20-year veteran
                            salesperson, with none of the overhead or hiring
                            headaches. Our AI agents engage customers with
                            human-level nuance, but you&apos;re always in the
                            driver&apos;s seat.
                        </p>
                    </div>

                    <div className="mt-20 grid gap-8 md:grid-cols-3">
                        {[
                            {
                                title: 'Canadian Built',
                                description:
                                    'Built for the unique nuances of the Canadian market, ensuring your sales floor stays competitive in every province and territory.',
                            },
                            {
                                title: 'Full Control',
                                description:
                                    'Switch Autopilot off instantly to take over any conversation, then hand it back to the AI whenever you need.',
                            },
                            {
                                title: 'Proven Results',
                                description:
                                    '40% increased vehicle sales, 30% old leads recovered, and 5-second initial contact times across our dealer network.',
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="glow-border rounded-2xl border border-white/5 bg-white/5 p-8"
                            >
                                <h3 className="text-xl font-bold text-white">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link href="/landing">
                            <Button size="lg">Book a Demo</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </SiteLayout>
    );
}
