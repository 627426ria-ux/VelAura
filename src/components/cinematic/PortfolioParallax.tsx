import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PortfolioParallax = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="min-h-screen py-24 px-4 relative overflow-hidden">
      {/* Animated wave background */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, hsl(180 80% 55% / 0.3) 50%, transparent 100%)',
          backgroundSize: '200% 100%',
        }}
      />

      <motion.div style={{ opacity }} className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-center mb-20 tracking-wide"
        >
          Featured <span className="text-gradient">Work</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Project preview */}
          <motion.div
            style={{ y: y1 }}
            className="relative group"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              className="glass-morphism neon-border rounded-2xl p-8 cinematic-shadow"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4 overflow-hidden relative">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 mx-auto rounded-full border-4 border-primary border-t-transparent"
                    />
                    <p className="font-bold text-lg">Live Website</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  className="flex-1 group/btn"
                  onClick={() => window.open('https://www.shellsandscalesexports.in', '_blank')}
                >
                  View Live
                  <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
                <Button variant="outline" className="flex-1 group/btn">
                  Details
                  <Github className="ml-2 w-4 h-4 transition-transform group-hover/btn:rotate-12" />
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Project details */}
          <motion.div style={{ y: y2 }} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism neon-border mb-4">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-bold">LIVE PROJECT</span>
              </div>

              <h3 className="text-3xl md:text-5xl font-bold mb-6 glow-text">
                Shells & Scales Exports
              </h3>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                A comprehensive export business platform featuring elegant product showcases, 
                detailed company information, and seamless contact integration. Built with modern 
                web technologies for optimal performance and stunning visual experiences.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Performance", value: "95+" },
                  { label: "SEO Score", value: "98" },
                  { label: "Accessibility", value: "100" },
                  { label: "Best Practices", value: "100" },
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: false }}
                    className="glass-morphism neon-border rounded-xl p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-gradient">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default PortfolioParallax;
