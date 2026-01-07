import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cable, MonitorDot, Layers, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesList = [
    {
        title: "Meet Management",
        description: "End-to-end management software for swimming meets, handling entries, seeding, and results compilation effortlessly.",
    features: ["Entries & eligibility", "Seeding & heat sheets", "Results publishing"],
    icon: ClipboardList,
    delay: 0.1
    },
    {
        title: "Timing System Integration",
        description: "Seamless integration with major timing hardware to ensure accurate data capture and live updates.",
    features: ["Stable data flow", "Operator-friendly tools", "Live feed support"],
    icon: Cable,
    delay: 0.2
    },
    {
        title: "Live Scoreboards",
        description: "Digital scoreboard solutions for real-time audience engagement and race visualization.",
    features: ["Venue display output", "Clear formatting", "Real-time updates"],
    icon: MonitorDot,
    delay: 0.3
    },
    {
        title: "Multi-Sport Support",
        description: "Adaptable solutions for artistic swimming, athletics, and football tournaments.",
    features: ["Configurable workflows", "Consistent operator UX", "Event-ready setup"],
    icon: Layers,
    delay: 0.4
    }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Services = () => {
  return (
    <div className="min-h-screen bg-deep-ocean py-24 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <header className="text-center mb-14 pt-10">
          <motion.h1 
              variants={cardVariants}
              className="text-4xl md:text-6xl font-bold text-white mb-5 tracking-tight"
          >
              Our Services
          </motion.h1>
          <motion.p 
              variants={cardVariants}
              className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
              Practical, operations-first tooling for meet management, timing integration, and live visibility—built to stay calm under event-day pressure.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </div>

        <div className="mt-12 bg-white/4 rounded-md border border-white/10 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70 mb-2">Next Step</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Tell us what you’re running</h2>
            <p className="mt-3 text-white/70 leading-relaxed max-w-2xl">
              Share your event type and requirements, and we’ll recommend a setup that fits your operation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center px-6 py-3 rounded-sm bg-pool-blue text-deep-ocean font-bold hover:bg-water-cyan transition-colors duration-200 ring-1 ring-white/10"
            >
              Contact <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-sm border border-white/20 text-white font-medium hover:bg-white/5 transition-colors duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ServiceCard = ({ title, description, features, icon: Icon }) => (
    <motion.div 
        variants={cardVariants}
        whileHover={{ scale: 1.02 }}
    className="bg-white/4 p-8 rounded-md border border-white/10 hover:border-pool-blue/35 transition-colors duration-200 relative overflow-hidden group"
    >
        <div className="absolute top-0 left-0 w-1.5 h-full bg-pool-blue transform origin-left md:group-hover:w-2 transition-all"></div>
        <div className="pl-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-pool-blue">
                {Icon ? <Icon className="h-5 w-5" /> : null}
              </div>
              <h2 className="text-2xl font-bold text-white group-hover:text-pool-blue transition-colors">{title}</h2>
            </div>
            <p className="text-white/70 leading-relaxed text-lg">{description}</p>

            {features?.length ? (
              <ul className="mt-6 space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-white/70">
                    <span className="mt-2 h-2 w-2 bg-pool-blue rounded-none flex-shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            ) : null}
        </div>
    </motion.div>
);

export default Services;