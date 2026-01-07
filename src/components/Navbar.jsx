import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        
        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
                    scrolled ? 'bg-deep-ocean/95 border-b border-white/10' : 'bg-deep-ocean/40'
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link to="/" className="text-2xl font-light tracking-tight text-white flex items-center gap-2">
                             <span>SPORTS <span className="font-bold text-pool-blue">FUSION</span></span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/services">Services</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                             <Link to="/contact" className="ml-4 px-5 py-2.5 rounded-sm bg-pool-blue text-deep-ocean text-sm font-bold hover:bg-water-cyan transition-colors duration-200 ring-1 ring-white/10">
                                Get Started
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                             <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                                {isOpen ? <X /> : <Menu />}
                             </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        className="fixed inset-0 z-[60] bg-deep-ocean md:hidden flex flex-col items-center justify-center space-y-8"
                    >
                         <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white p-2">
                            <X className="w-8 h-8" />
                         </button>
                        
                         <MobileNavLink to="/">Home</MobileNavLink>
                         <MobileNavLink to="/services">Services</MobileNavLink>
                         <MobileNavLink to="/about">About</MobileNavLink>
                         <MobileNavLink to="/contact">Contact</MobileNavLink>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const NavLink = ({ to, children }) => (
    <Link
        to={to}
        className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70 hover:text-white transition-colors relative group"
    >
        {children}
        <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-pool-blue transition-all duration-200 group-hover:w-full"></span>
    </Link>
);

const MobileNavLink = ({ to, children }) => (
    <Link to={to} className="text-3xl font-light uppercase tracking-wider text-white hover:text-pool-blue transition-colors">
        {children}
    </Link>
);

export default Navbar;