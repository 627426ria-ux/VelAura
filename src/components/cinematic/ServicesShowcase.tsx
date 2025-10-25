import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Zap, ShoppingCart, TrendingUp, Bot } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Performance + design precision. Lightning-fast, pixel-perfect sites.",
    color: "from-cyan-500 to-blue-500",
    gradient: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Zap,
    title: "Dynamic Web Apps",
    description: "Reactive, data-driven experiences with real-time interactivity.",
    color: "from-purple-500 to-pink-500",
    gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Systems",
    description: "Elegant online stores with seamless checkout experiences.",
    color: "from-teal-500 to-emerald-500",
    gradient: "bg-gradient-to-br from-teal-500/20 to-emerald-500/20",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Intelligent chatbots, smart dashboards, process automation.",
    color: "from-violet-500 to-purple-500",
    gradient: "bg-gradient-to-br from-violet-500/20 to-purple-500/20",
  },
  {
    icon: TrendingUp,
    title: "SEO & Optimization",
    description: "Faster, smarter, higher-ranking sites that dominate search.",
    color: "from-amber-500 to-orange-500",
    gradient: "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
  },
];

const ServicesShowcase = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="min-h-screen py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-center mb-20 tracking-wide"
        >
          Our <span className="text-gradient">Craft</span>
        </motion.h2>

        <div className="space-y-32">
          {services.map((service, index) => {
            const cardRef = useRef(null);
            const { scrollYProgress: cardProgress } = useScroll({
              target: cardRef,
              offset: ["start end", "center center"]
            });

            const scale = useTransform(cardProgress, [0, 0.5], [0.8, 1]);
            const opacity = useTransform(cardProgress, [0, 0.5], [0, 1]);
            const x = useTransform(
              cardProgress,
              [0, 0.5],
              [index % 2 === 0 ? -100 : 100, 0]
            );

            return (
              <motion.div
                key={index}
                ref={cardRef}
                style={{ scale, opacity, x }}
                whileHover={{ scale: 1.02 }}
                className="glass-morphism neon-border rounded-3xl p-8 md:p-12 group cursor-pointer cinematic-shadow"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-24 h-24 rounded-2xl ${service.gradient} flex items-center justify-center shrink-0`}
                  >
                    <service.icon className="w-12 h-12 text-white" />
                  </motion.div>

                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-4xl font-bold mb-4 group-hover:text-gradient transition-all">
                      {service.title}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  {/* Progress indicator */}
                  <div className="hidden md:block w-1 h-24 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      style={{ scaleY: cardProgress }}
                      className={`w-full h-full bg-gradient-to-b ${service.color} origin-top`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Side progress bar */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="w-1 h-64 bg-muted rounded-full overflow-hidden">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="w-full h-full bg-gradient-to-b from-primary via-secondary to-accent origin-top"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
