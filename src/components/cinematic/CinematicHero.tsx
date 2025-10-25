import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

const CinematicHero = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          background: #0a0a0f;
          color: #ffffff;
          overflow-x: hidden;
        }

        .text-gradient {
          background: linear-gradient(135deg, hsl(180 80% 55%), hsl(270 70% 60%), hsl(190 85% 50%));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glow-text {
          filter: drop-shadow(0 0 20px hsl(180 80% 55% / 0.5));
        }

        .glass-morphism {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .neon-border {
          border: 1px solid rgba(255, 255, 255, 0.2);
          position: relative;
        }
        
        .neon-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, hsl(180 80% 55% / 0.5), hsl(270 70% 60% / 0.5));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .cinematic-shadow {
          box-shadow: 0 10px 40px hsl(180 80% 55% / 0.3);
        }

        .text-muted-foreground {
          color: rgba(255, 255, 255, 0.7);
        }

        .text-primary {
          color: hsl(180 80% 55%);
        }

        .text-secondary {
          color: hsl(270 70% 60%);
        }

        .text-accent {
          color: hsl(190 85% 50%);
        }

        .bg-primary\/20 {
          background: hsl(180 80% 55% / 0.2);
        }

        .bg-secondary\/20 {
          background: hsl(270 70% 60% / 0.2);
        }

        .bg-gradient-to-r {
          background: linear-gradient(90deg, hsl(180 80% 55%), hsl(270 70% 60%), hsl(190 85% 50%));
        }
      `}</style>

      <section
        ref={containerRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, hsl(180 80% 55% / 0.15), hsl(270 70% 60% / 0.1), transparent)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Glowing orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div
          style={{ opacity, scale, y }}
          className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
          {/* Centered Content */}
          <div className="flex flex-col items-center justify-center text-center space-y-8 md:space-y-12">
            
            {/* Top badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism neon-border"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-2 h-2 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(180 80% 55%), hsl(190 85% 50%))'
                }}
              />
              <span className="text-xs tracking-[0.2em]">DIGITAL STUDIO</span>
            </motion.div>

            {/* VelAura - Main brand */}
            <motion.div className="relative">
              {/* Background glow effect */}
              <motion.div
                className="absolute -inset-8 md:-inset-12 rounded-3xl blur-3xl"
                style={{
                  background: 'linear-gradient(135deg, hsl(180 80% 55%), hsl(270 70% 60%))',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />

              {/* VelAura text */}
              <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none"
              >
                <span className="text-gradient glow-text">Vel</span>
                <span className="text-gradient glow-text">Aura</span>
              </motion.h1>

              {/* Animated underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="h-1 mt-4 md:mt-6 rounded-full mx-auto"
                style={{
                  background: 'linear-gradient(90deg, hsl(180 80% 55%), hsl(270 70% 60%), hsl(190 85% 50%))',
                  width: '80%',
                  maxWidth: '400px'
                }}
              />
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="space-y-4"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl text-muted-foreground font-light">
                Where{' '}
                <motion.span
                  className="text-primary font-semibold"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  velocity
                </motion.span>
                {' '}meets{' '}
                <motion.span
                  className="text-secondary"
                  style={{ fontWeight: 600 }}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  aura
                </motion.span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.6)' }}
            >
              Crafting digital experiences that move at the speed of imagination. 
              We blend cutting-edge technology with artistic vision to create 
              web solutions that captivate, engage, and inspire.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 40px hsl(180 80% 55% / 0.6)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 md:px-10 py-3 md:py-4 rounded-full bg-gradient-to-r text-white font-semibold text-base md:text-lg group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0"
                  style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 md:px-10 py-3 md:py-4 rounded-full glass-morphism neon-border font-semibold text-base md:text-lg"
              >
                View Our Work
              </motion.button>
            </motion.div>

            {/* Bottom stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 md:gap-12 pt-8"
            >
              {[
                
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.4 + (index * 0.1), type: "spring" }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center cursor-pointer"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="cursor-pointer group relative"
            >
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full blur-xl"
                style={{ background: 'hsl(180 80% 55% / 0.3)' }}
              />
              <ChevronDown className="relative w-8 h-8 md:w-10 md:h-10 text-primary group-hover:text-accent transition-colors" style={{ color: 'hsl(180 80% 55%)' }} />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default CinematicHero;