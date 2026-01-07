import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-deep-ocean mb-8 text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pool-blue">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Meet Management</h2>
                <p className="text-gray-600">End-to-end management software for swimming meets, handling entries, seeding, and results compilation effortlessly.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pool-blue">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Timing System Integration</h2>
                <p className="text-gray-600">Seamless integration with major timing hardware to ensure accurate data capture and live updates.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pool-blue">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Live Scoreboards</h2>
                <p className="text-gray-600">Digital scoreboard solutions for real-time audience engagement and race visualization.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pool-blue">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Multi-Sport Support</h2>
                <p className="text-gray-600">Adaptable solutions for artistic swimming, athletics, and football tournaments.</p>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;