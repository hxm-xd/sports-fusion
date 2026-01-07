import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <div className="py-20 px-4 max-w-7xl mx-auto">
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold text-deep-ocean mb-10 text-center">Get in Touch</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-pool-blue/10 p-8 rounded-xl">
                        <h2 className="text-2xl font-bold mb-6 text-deep-ocean">Contact Information</h2>
                        <div className="space-y-6">
                            <a href="mailto:sportsfusionlk2025@gmail.com" className="flex items-center space-x-4 text-gray-700 hover:text-deep-ocean transition">
                                <span className="p-3 bg-white rounded-full shadow-sm">
                                    <Mail className="h-6 w-6 text-pool-blue" />
                                </span>
                                <span className="text-lg">sportsfusionlk2025@gmail.com</span>
                            </a>
                             {/* Placeholder for other contact info if available */}
                            <div className="flex items-center space-x-4 text-gray-700">
                                <span className="p-3 bg-white rounded-full shadow-sm">
                                    <MapPin className="h-6 w-6 text-pool-blue" />
                                </span>
                                <span className="text-lg">Colombo, Sri Lanka</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pool-blue focus:border-transparent outline-none transition" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pool-blue focus:border-transparent outline-none transition" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pool-blue focus:border-transparent outline-none transition" placeholder="How can we help?"></textarea>
                            </div>
                            <button type="button" className="w-full py-3 bg-deep-ocean text-white font-bold rounded-md hover:bg-blue-800 transition duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;