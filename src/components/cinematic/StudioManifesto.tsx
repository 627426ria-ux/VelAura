import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Sparkles, Cpu, Zap } from 'lucide-react';

const techIcons = [
  { Icon: Code2, label: "React", color: "text-cyan-400" },
  { Icon: Sparkles, label: "Next.js", color: "text-purple-400" },
  { Icon: Cpu, label: "AI", color: "text-teal-400" },
  { Icon: Zap, label: "Framer", color: "text-violet-400" },
];

const StudioManifesto = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center py-24 px-4 relative">
      <motion.div
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto text-center relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl md:text-7xl font-bold mb-12 tracking-wide"
        >
          Where design meets{" "}
          <span className="text-gradient glow-text">intelligence</span>
        </motion.h2>

        <div className="space-y-8 mb-16">
          {[
            "We don't just build websites — we craft digital experiences that breathe.",
            "Every pixel, every transition, every interaction is intentionally designed.",
            "From concept to code, we merge artistry with engineering precision.",
          ].map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto"
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Floating 3D tech icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {techIcons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="glass-morphism neon-border rounded-2xl p-8 group cursor-pointer"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="mb-4"
              >
                <item.Icon className={`w-12 h-12 mx-auto ${item.color}`} />
              </motion.div>
              <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Background glow effect */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
};

export default StudioManifesto;
