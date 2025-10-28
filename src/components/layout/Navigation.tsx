import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <style>{`
        .nav-glass {
          background: ${isScrolled 
            ? 'rgba(10, 10, 15, 0.8)' 
            : 'rgba(10, 10, 15, 0.3)'};
          backdrop-filter: blur(20px);
          border-bottom: 1px solid ${isScrolled 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(255, 255, 255, 0.05)'};
        }

        .nav-link {
          position: relative;
          color: rgba(255, 255, 255, 0.8);
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: hsl(180 80% 55%);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, hsl(180 80% 55%), hsl(270 70% 60%));
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .text-gradient {
          background: linear-gradient(135deg, hsl(180 80% 55%), hsl(270 70% 60%), hsl(190 85% 50%));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .mobile-menu {
          background: rgba(10, 10, 15, 0.95);
          backdrop-filter: blur(20px);
        }

        .white-button {
          background: #ffffff;
          color: #0a0a0f;
        }

        .white-button:hover {
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
        }
      `}</style>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="nav-glass fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src="/logo.png" 
                alt="CODMAC Logo" 
                className="h20 md:h-32 w-auto object-contain"
              />
              
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="nav-link text-sm font-medium tracking-wide"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-6 py-2.5 rounded-full white-button font-semibold text-sm relative overflow-hidden group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">Get Started</span>
              <motion.div
                className="absolute inset-0"
                style={{ background: 'rgba(0, 0, 0, 0.1)' }}
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg"
              style={{ color: 'hsl(180 80% 55%)' }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden mobile-menu"
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0, 
                  x: isMobileMenuOpen ? 0 : -20 
                }}
                transition={{ delay: 0.1 * index }}
                className="block nav-link text-lg font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
            
            {/* Mobile CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0, 
                y: isMobileMenuOpen ? 0 : 20 
              }}
              transition={{ delay: 0.3 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 rounded-full white-button font-semibold text-base mt-4"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Spacer to prevent content from hiding under fixed nav */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default Navigation;