import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Clock, ShieldCheck } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-deep-ocean to-pool-blue overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             {/* Placeholder for a swimming pool background pattern or image */}
             <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
          >
            Precision & Speed
            <span className="block text-water-cyan text-4xl md:text-5xl mt-2">In and Out of the Water</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-blue-100"
          >
            Integrated IT solutions designed to streamline every aspect of swimming meet management.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="/contact" className="inline-flex items-center px-8 py-3 bg-white text-deep-ocean font-bold rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-deep-ocean">Why Choose Sports Fusion?</h2>
            <p className="mt-4 text-xl text-gray-500">We bring technology to the pool deck.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard 
              icon={<Clock className="h-10 w-10 text-white" />}
              title="Real-time Results"
              description="Instant result processing and display, keeping spectators and athletes informed to the second."
            />
            <FeatureCard 
              icon={<ShieldCheck className="h-10 w-10 text-white" />}
              title="Accuracy & Reliability"
              description="Fault-tolerant systems ensuring race data is captured accurately every single time."
            />
            <FeatureCard 
              icon={<Activity className="h-10 w-10 text-white" />}
              title="Event Management"
              description="Comprehensive tools for meet organization, heat generation, and athlete seeding."
            />
          </div>
        </div>
      </section>

       {/* Other Sports Section */}
       <section className="py-20 bg-water-cyan/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-deep-ocean mb-6">Beyond Swimming</h2>
            <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                While we specialize in swimming, our expertise extends to artistic swimming, athletics, football, and other sports.
            </p>
        </div>
       </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
  >
    <div className="h-14 w-14 bg-pool-blue rounded-lg flex items-center justify-center mb-6 shadow-sm">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

export default Home;