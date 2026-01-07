import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="py-20 px-4 max-w-7xl mx-auto">
             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
            >
                <h1 className="text-4xl font-bold text-deep-ocean mb-6">About Sports Fusion</h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    In the fast-paced world of competitive swimming, precision and speed shouldn’t just be in the water—they should be behind the scenes too. 
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    SportsFusion is a premier provider of integrated IT solutions designed to streamline every aspect of swimming meet management. We understand the unique challenges of sports events and have built our technology to meet those demands head-on.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Our mission is to empower event organizers with reliable, efficient, and modern tools so they can focus on what matters most: the athletes and the competition.
                </p>
            </motion.div>
        </div>
    );
};

export default About;