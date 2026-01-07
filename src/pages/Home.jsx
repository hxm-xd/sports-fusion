import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroVideo from '../assets/hero.mp4';

const homeVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const services = [
    {
        title: "Real-Time Analytics",
        description: "Keep spectators and athletes informed with instant result processing. Our systems ensure that every split second is captured and displayed with zero latency.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        features: ["Live Scoreboard Integration", "Instant Web Publishing", "Heat & Lane Assignment"]
    },
    {
        title: "Event Management",
        description: "From seeding heats to managing finals, our comprehensive tools take the stress out of meet organization. Focus on the competition, not the paperwork.",
        image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        linkText: "Discover Solutions",
        linkUrl: "/services"
    },
    {
        title: "Live Broadcasting",
        description: "Bring the excitement to a global audience. Our integrated broadcasting tools make it easy to stream high-quality event coverage and replays.",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        linkText: "Learn More",
        linkUrl: "/services"
    }
];

const StickySlide = ({ title, description, image, features, linkText, linkUrl, index }) => {
    const isEven = index % 2 === 0;
    
    return (
    <section className="relative h-[200vh] bg-deep-ocean border-t border-white/10">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={image} alt={title} className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-deep-ocean/85"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
            <div className={`${!isEven ? 'lg:order-2' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                  {title.split(' ').map((word, i) => (
                    <span key={i} className={i === 1 ? 'text-pool-blue' : ''}> {word} </span>
                  ))}
                </h2>
                <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-lg">
                  {description}
                </p>

                {features && (
                  <ul className="space-y-4 mb-10">
                    {features.map((feature, i) => (
                      <li key={i} className="flex items-center text-white/90">
                        <span className="w-2 h-2 bg-pool-blue rounded-none mr-4"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                {linkText && (
                  <a href={linkUrl} className="text-pool-blue font-bold text-lg hover:text-white transition-colors inline-flex items-center group">
                    {linkText} <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </motion.div>
            </div>

            <div className={`relative ${!isEven ? 'lg:order-1' : ''}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="aspect-[4/3] rounded-md overflow-hidden border border-white/15"
              >
                <img src={image} alt={title} className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

const Home = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div className="w-full bg-deep-ocean">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-deep-ocean/50 z-10"></div>
             {/* Hero Video Background */}
             <motion.video
                style={{ y: y1 }}
                className="w-full h-[120%] -mt-20 object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                aria-hidden="true"
              >
                <source src={heroVideo} type="video/mp4" />
              </motion.video>
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={homeVariants}
            className="flex flex-col items-center"
          >
           
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-8xl font-light mb-8 tracking-tight"
            >
              Precision <span className="font-bold text-pool-blue">Meets</span> Performance
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-2xl mb-12 text-white/80 max-w-3xl font-light leading-relaxed"
            >
              Streamline your meets with integrated IT solutions designed for the modern swimming ecosystem.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6"
            >
              <a href="/contact" className="group px-8 py-4 bg-pool-blue text-deep-ocean font-bold rounded-sm hover:bg-water-cyan transition-colors duration-200 flex items-center ring-1 ring-white/10">
                Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/services" className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-sm hover:bg-white/5 transition-colors duration-200">
                Explore Services
              </a>
            </motion.div>
          </motion.div>
        </div>
        
      </section>

      {/* Sticky Services Slides */}
      <div className="relative">
        {services.map((service, index) => (
            <StickySlide key={index} {...service} index={index} />
        ))}
      </div>

       {/* Other Sports Section */}
         <section className="py-32 bg-deep-ocean relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Beyond the Pool</h2>
                <p className="text-lg text-text-dim max-w-2xl mx-auto">
                    Expertise that translates across disciplines.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <SportCard 
                    title="Artistic Swimming" 
                  image="https://res.cloudinary.com/usopc-prod/image/upload/v1704463720/NGB%20Artistic%20Swimming/Photos/IMG_1155.jpg"
                />
                <SportCard 
                    title="Athletics" 
                    image="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                />
                 <SportCard 
                    title="Football" 
                    image="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                />
            </div>
        </div>
       </section>
    </div>
  );
};

const SportCard = ({ title, image }) => (
    <motion.div 
        whileHover={{ y: -10 }}
    className="group relative h-96 rounded-md overflow-hidden cursor-pointer border border-white/10"
    >
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${image})` }}></div>
    <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
        <div className="absolute bottom-0 left-0 p-8 w-full">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <div className="h-1 w-12 bg-pool-blue transform origin-left transition-all duration-300 group-hover:w-full"></div>
        </div>
    </motion.div>
)

export default Home;