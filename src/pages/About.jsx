import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="min-h-screen bg-pool-dark py-24 px-4 sm:px-6 lg:px-8">
             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl mx-auto pt-10"
            >
                <div className="bg-white/5 backdrop-blur-md p-8 md:p-16 rounded-lg shadow-xl border border-white/10 relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-pool-blue/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-deep-ocean/40 rounded-full -ml-10 -mb-10 blur-2xl"></div>

                    <div className="relative z-10">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-pool-blue font-bold tracking-widest uppercase text-sm block mb-3"
                        >
                            Who We Are
                        </motion.span>
                        <motion.h1 
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             transition={{ delay: 0.3 }}
                             className="text-4xl md:text-5xl font-bold text-white mb-10"
                        >
                            About <span className="text-pool-blue">Sports Fusion</span>
                        </motion.h1>
                        
                        <div className="space-y-8 text-lg text-white/70 leading-relaxed">
                            <motion.p
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <span className="text-xl font-semibold text-white">Precision and speed</span> aren't just for the athletes in the water—they are the core of what we do behind the scenes. In the fast-paced world of competitive swimming, every split second counts, and we ensure that accurate data is delivered instantly.
                            </motion.p>
                            
                            <motion.p
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                SportsFusion is a premier provider of integrated IT solutions designed to streamline every aspect of swimming meet management. We understand the unique pulse of sports events—the adrenaline, the schedules, the records—and have built our technology to meet those rigorous demands head-on.
                            </motion.p>

                            <motion.div 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className="bg-pool-blue/10 p-6 rounded-lg border-l-4 border-pool-blue"
                            >
                                <p className="text-white font-medium italic">
                                    "Our mission is to empower event organizers with reliable, efficient, and modern tools so they can focus on what matters most: the athletes and the competition."
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;