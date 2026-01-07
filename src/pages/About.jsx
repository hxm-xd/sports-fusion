import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, ShieldCheck, Workflow, ArrowRight } from 'lucide-react';

const highlights = [
    {
        title: 'Built for Live Events',
        description: 'Workflows that stay reliable under pressure—when schedules are tight and every update matters.',
        icon: Gauge
    },
    {
        title: 'Accuracy & Trust',
        description: 'Designed to reduce manual handling and keep results consistent across systems and stakeholders.',
        icon: ShieldCheck
    },
    {
        title: 'Operations-Ready',
        description: 'Tools that help organizers coordinate entries, heats, and publishing with less friction.',
        icon: Workflow
    }
];

const focusAreas = [
    'Meet operations and scheduling',
    'Timing integration and data flow',
    'Live publishing and visibility',
    'Multi-sport adaptability'
];

const About = () => {
    return (
        <div className="min-h-screen bg-deep-ocean py-24 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto pt-16"
            >
                <header className="mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                        About <span className="text-pool-blue">Sports Fusion</span>
                    </h1>
                    <p className="mt-5 text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed">
                        We build integrated meet operations and live-result workflows designed for competitive environments—where precision, clarity, and speed matter.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-7">
                        <div className="bg-white/4 p-8 md:p-12 rounded-md border border-white/10 relative overflow-hidden">
                            <div className="absolute inset-x-0 top-0 h-px bg-white/10"></div>

                            <div className="relative z-10 space-y-8 text-lg text-white/70 leading-relaxed">
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <span className="text-xl font-semibold text-white">Precision and speed</span> aren’t just for athletes—they’re the foundation of everything happening behind the scenes.
                                    In live competition, every split and every update has to be dependable.
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    SportsFusion is a provider of integrated IT solutions designed to streamline swimming meet management.
                                    We build systems that help organizers handle schedules, results, and publishing with less manual overhead.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="bg-white/4 p-6 rounded-md border border-white/10"
                                >
                                    <p className="text-white font-medium">
                                        Our mission is to empower event organizers with reliable, efficient, and modern tools so they can focus on what matters most: the athletes and the competition.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <aside className="lg:col-span-5">
                        <div className="bg-white/4 p-8 md:p-10 rounded-md border border-white/10">
                            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70 mb-4">At A Glance</div>
                            <h2 className="text-2xl font-bold text-white mb-6">Focus Areas</h2>
                            <ul className="space-y-4">
                                {focusAreas.map((area) => (
                                    <li key={area} className="flex items-start gap-3 text-white/70">
                                        <span className="mt-2 h-2 w-2 bg-pool-blue rounded-none flex-shrink-0" />
                                        <span className="leading-relaxed">{area}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4">
                                <a
                                    href="/services"
                                    className="group inline-flex items-center justify-center px-6 py-3 rounded-sm bg-pool-blue text-deep-ocean font-bold hover:bg-water-cyan transition-colors duration-200 ring-1 ring-white/10"
                                >
                                    Explore Services <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-6 py-3 rounded-sm border border-white/20 text-white font-medium hover:bg-white/5 transition-colors duration-200"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>

                <section className="mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {highlights.map(({ title, description, icon: Icon }) => (
                            <div key={title} className="bg-white/4 rounded-md border border-white/10 p-7 md:p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-10 w-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-pool-blue">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white">{title}</h3>
                                </div>
                                <p className="text-white/70 leading-relaxed">{description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </motion.div>
        </div>
    );
};

export default About;