import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="min-h-screen bg-pool-dark py-24 px-4 sm:px-6 lg:px-8">
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto pt-10"
            >
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
                    <p className="text-xl text-text-dim">We'd love to hear from you. Drop us a line.</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-lg shadow-lg border border-white/10 flex flex-col justify-center h-full"
                    >
                        <h2 className="text-3xl font-bold mb-8 text-white">Contact Information</h2>
                        <div className="space-y-8">
                            <a href="mailto:sportsfusionlk2025@gmail.com" className="flex items-center space-x-6 group p-4 rounded-lg hover:bg-white/5 transition-colors duration-300">
                                <div className="p-4 bg-pool-blue/10 rounded-lg group-hover:bg-pool-blue/20 transition-colors">
                                    <Mail className="h-8 w-8 text-pool-blue" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/50 font-medium uppercase tracking-wide">Email Us</p>
                                    <span className="text-xl text-white font-semibold group-hover:text-pool-blue transition-colors">sportsfusionlk2025@gmail.com</span>
                                </div>
                            </a>
                            
                            <div className="flex items-center space-x-6 p-4 rounded-lg hover:bg-white/5 transition-colors duration-300">
                                <div className="p-4 bg-pool-blue/10 rounded-lg">
                                    <MapPin className="h-8 w-8 text-pool-blue" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/50 font-medium uppercase tracking-wide">Location</p>
                                    <span className="text-xl text-white font-semibold">Colombo, Sri Lanka</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Decorative element */}
                        <div className="mt-12 p-6 bg-gradient-to-r from-deep-ocean to-pool-blue rounded-lg text-white relative overflow-hidden shadow-lg">
                            <div className="relative z-10">
                                <p className="font-medium text-lg italic">"Excellence is not a singular act, but a habit. You are what you repeatedly do."</p>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                         initial={{ opacity: 0, x: 20 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ delay: 0.4, duration: 0.6 }}
                         className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-lg shadow-lg border border-white/10"
                    >
                        <h2 className="text-3xl font-bold mb-8 text-white">Send us a Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-white/80 mb-2">Name</label>
                                <input 
                                    type="text" 
                                    className="w-full px-6 py-4 bg-deep-ocean/50 border border-white/10 rounded-md focus:ring-4 focus:ring-pool-blue/20 focus:border-pool-blue outline-none transition-all duration-300 placeholder-white/20 text-white" 
                                    placeholder="Your Name" 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-white/80 mb-2">Email</label>
                                <input 
                                    type="email" 
                                    className="w-full px-6 py-4 bg-deep-ocean/50 border border-white/10 rounded-md focus:ring-4 focus:ring-pool-blue/20 focus:border-pool-blue outline-none transition-all duration-300 placeholder-white/20 text-white" 
                                    placeholder="your@email.com" 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-white/80 mb-2">Message</label>
                                <textarea 
                                    rows="5" 
                                    className="w-full px-6 py-4 bg-deep-ocean/50 border border-white/10 rounded-md focus:ring-4 focus:ring-pool-blue/20 focus:border-pool-blue outline-none transition-all duration-300 placeholder-white/20 text-white resize-none" 
                                    placeholder="How can we help?"
                                ></textarea>
                            </div>
                            <button 
                                type="button" 
                                className="w-full py-4 bg-pool-blue text-deep-ocean font-bold rounded-md hover:bg-white hover:shadow-lg hover:shadow-white/10 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                                <span>Send Message</span>
                                <Send className="h-5 w-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;