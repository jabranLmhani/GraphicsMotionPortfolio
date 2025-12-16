'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#motion' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#home"
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              JL
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[13px] font-medium text-muted hover:text-foreground transition-colors duration-200 relative group"
                >
                    {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                </a>
              ))}
                <a
                  href="#contact"
                  className="relative inline-flex items-center px-4 py-1.5 text-xs font-semibold
                            text-white rounded-full
                            bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800
                            shadow-md
                            transition-all duration-300
                            hover:scale-105
                            hover:shadow-[0_0_12px_rgba(255,255,255,0.35)]
                            before:absolute before:inset-0 before:rounded-full
                            before:bg-gradient-to-r before:from-white/10 before:via-white/30 before:to-white/10
                            before:opacity-0 hover:before:opacity-100
                            before:blur-md before:transition-opacity before:duration-500"
                >
                  Hire Me
                </a>

            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-foreground p-3 glass-card hover:scale-105 transition-all"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <HiX className="text-2xl" />
              ) : (
                <HiMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container-custom py-8 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-5 py-4 text-base font-semibold text-muted hover:text-foreground hover:bg-white/10 rounded-xl transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary block text-center mt-6"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

