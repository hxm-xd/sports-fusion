import React from 'react';
import { motion } from 'framer-motion';

const servicesList = [
    {
        title: "Meet Management",
        description: "End-to-end management software for swimming meets, handling entries, seeding, and results compilation effortlessly.",
        delay: 0.1
    },
    {
        title: "Timing System Integration",
        description: "Seamless integration with major timing hardware to ensure accurate data capture and live updates.",
        delay: 0.2
    },
    {
        title: "Live Scoreboards",
        description: "Digital scoreboard solutions for real-time audience engagement and race visualization.",
        delay: 0.3
    },
    {
        title: "Multi-Sport Support",
        description: "Adaptable solutions for artistic swimming, athletics, and football tournaments.",
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
        <div className="text-center mb-16 pt-10">
            <motion.h1 
                variants={cardVariants}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
                Our Services
            </motion.h1>
            <motion.p 
                variants={cardVariants}
                className="text-xl text-text-dim max-w-2xl mx-auto"
            >
                Comprehensive solutions tailored for the modern sports ecosystem.
            </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </div>
      </motion.div>
    </div>
  );
};

const ServiceCard = ({ title, description }) => (
    <motion.div 
        variants={cardVariants}
        whileHover={{ scale: 1.02 }}
    className="bg-white/4 p-8 rounded-md border border-white/10 hover:border-pool-blue/35 transition-colors duration-200 relative overflow-hidden group"
    >
    <div className="absolute top-0 left-0 w-1.5 h-full bg-pool-blue transform origin-left md:group-hover:w-2 transition-all"></div>
        <div className="pl-6">
            <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-pool-blue transition-colors">{title}</h2>
            <p className="text-white/60 leading-relaxed text-lg">{description}</p>
        </div>
    </motion.div>
);

export default Services;