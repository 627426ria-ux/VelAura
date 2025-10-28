import ParticleField from "@/components/cinematic/ParticleField";
import ScrollProgress from "@/components/cinematic/ScrollProgress";
import Navigation from "@/components/layout/Navigation";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Zap, Globe, ShoppingCart, Sparkles, Code2, Rocket, TrendingUp, Shield, Search, PenTool, Palette, Database, MessageSquare, ChevronDown, Layers, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(heroProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(heroProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(heroProgress, [0, 1], [0, -200]);

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      tagline: "Architecting Digital Ecosystems",
      description: "We craft lightning-fast, pixel-perfect websites that don't just exist—they captivate. From minimalist portfolios to complex enterprise platforms, every line of code is optimized for performance and user delight.",
      highlights: [
        "Responsive ",
        "Performance-optimized (90+ scores)",
        "Interactive & Engaging Interfaces",
        "Scalable & Future-Ready Architecture"
      ],
      color: "from-cyan-500 to-blue-500",
      gradient: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
      glowColor: "rgba(6, 182, 212, 0.3)"
    },
    
    
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      tagline: "Online Stores That Convert",
      description: "Transform browsers into buyers with seamless shopping experiences. We build e-commerce platforms with intelligent product discovery, frictionless checkout, and powerful analytics.",
      highlights: [
        "Custom shopping cart & checkout",
        "Payment gateway integration",
        "Inventory & order management",
      ],
      color: "from-emerald-500 to-teal-500",
      gradient: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
      glowColor: "rgba(16, 185, 129, 0.3)"
    },
    {
      icon: Zap,
      title: "AI Integration",
      tagline: "Intelligence That Scales",
      description: "Harness the power of artificial intelligence to automate workflows, personalize experiences, and unlock insights. From chatbots to predictive analytics, we make AI work for you.",
      highlights: [
        "AI chatbots & virtual assistants",
        "Predictive analytics & forecasting",
        "Content generation & automation",
        "Computer vision & image recognition",
        "Natural language processing"
      ],
      color: "from-orange-500 to-red-500",
      gradient: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
      glowColor: "rgba(249, 115, 22, 0.3)"
    },
    
    {
      icon: Layers,
      title: "Web Design",
      tagline: "Dynamic Solutions, Real-Time Power",
      description: "We craft visually engaging and intuitive websites that leave a lasting impression. From layout and color schemes to typography and interactive elements, our designs ensure users enjoy a seamless and memorable experience across every device.",
      highlights: [
        "Intuitive user interfaces",
        "Visually appealing layouts",
        "Mobile-friendly and responsive designs",
        "Accessible and user-centered experiences",
      ],
      color: "from-blue-500 to-indigo-500",
      gradient: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20",
      glowColor: "rgba(59, 130, 246, 0.3)"
    },
    {
      icon: Rocket,
      title: "Ongoing Support",
      tagline: "Partnership Beyond Launch",
      description: "Your digital presence evolves—so should your support. We provide continuous maintenance, updates, security monitoring, and strategic optimization to keep you ahead.",
      highlights: [
        "24/7 security monitoring",
        "Regular updates & backups",
        "Performance optimization",
        "Bug fixes & troubleshooting",
        "Strategic consulting & roadmaps"
      ],
      color: "from-rose-500 to-pink-500",
      gradient: "bg-gradient-to-br from-rose-500/20 to-pink-500/20",
      glowColor: "rgba(244, 63, 94, 0.3)"
    }
  ];

  const consultationBenefits = [
    {
      icon: Target,
      title: "Tailored Strategy",
      description: "Every project is unique. We analyze your goals, audience, and competition to craft a bespoke solution."
    },
    {
      icon: Users,
      title: "Transparent Process",
      description: "From wireframes to deployment, you're involved at every stage. No surprises, just collaboration."
    },
    {
      icon: Sparkles,
      title: "Flexible Pricing",
      description: "Whether you're a startup or enterprise, we scale our services—and pricing—to match your vision and budget."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      <ParticleField />
      <ScrollProgress />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section
          ref={heroRef}
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          <motion.div
            style={{ opacity, scale, y }}
            className="relative z-10 px-4 max-w-7xl mx-auto w-full text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism neon-border mb-6"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-2 h-2 rounded-full bg-primary"
              />
              <span className="text-sm font-bold tracking-wider">SERVICES PORTFOLIO</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 glow-text"
            >
              <span className="text-gradient">Craft</span> Your Digital{' '}
              <span className="text-gradient">Future</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Transforming visions into seamless digital journeys.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity group"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="cursor-pointer"
              >
                <ChevronDown className="w-8 h-8 text-primary" />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
                Our <span className="text-gradient">Services</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Crafting digital experiences.</p>
            </motion.div>

            <div className="space-y-32">
              {services.map((service, index) => {
                const cardRef = useRef(null);
                const { scrollYProgress: cardProgress } = useScroll({
                  target: cardRef,
                  offset: ["start end", "center center"]
                });

                const cardScale = useTransform(cardProgress, [0, 0.5], [0.85, 1]);
                const cardOpacity = useTransform(cardProgress, [0, 0.5], [0, 1]);
                const cardX = useTransform(
                  cardProgress,
                  [0, 0.5],
                  [index % 2 === 0 ? -100 : 100, 0]
                );

                return (
                  <motion.div
                    key={index}
                    ref={cardRef}
                    style={{ scale: cardScale, opacity: cardOpacity, x: cardX }}
                    className="relative group"
                  >
                    {/* Background glow effect */}
                    <motion.div
                      className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"
                      style={{ background: service.glowColor }}
                    />

                    <div className="relative glass-morphism neon-border rounded-3xl p-8 md:p-12 cinematic-shadow overflow-hidden">
                      {/* Animated gradient overlay */}
                      <motion.div
                        className={`absolute inset-0 ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                      />

                      <div className="relative z-10 grid md:grid-cols-[auto,1fr] gap-8 md:gap-12 items-start">
                        {/* Icon Section */}
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                          className={`w-24 h-24 md:w-32 md:h-32 rounded-2xl ${service.gradient} flex items-center justify-center shrink-0 cinematic-shadow`}
                          style={{
                            boxShadow: `0 0 40px ${service.glowColor}`
                          }}
                        >
                          <service.icon className="w-12 h-12 md:w-16 md:h-16 text-white" />
                        </motion.div>

                        {/* Content Section */}
                        <div className="space-y-6">
                          <div>
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                              viewport={{ once: false }}
                              className="flex items-center gap-3 mb-3"
                            >
                              <h3 className="text-3xl md:text-4xl font-bold text-gradient">
                                {service.title}
                              </h3>
                            </motion.div>
                            
                            <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                              viewport={{ once: false }}
                              className={`text-lg font-semibold mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                            >
                              {service.tagline}
                            </motion.p>

                            <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                              viewport={{ once: false }}
                              className="text-base md:text-lg text-muted-foreground leading-relaxed"
                            >
                              {service.description}
                            </motion.p>
                          </div>

                          {/* Highlights */}
                          <div className="grid sm:grid-cols-2 gap-3">
                            {service.highlights.map((highlight, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + idx * 0.1 }}
                                viewport={{ once: false }}
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-3 text-sm text-muted-foreground group/item"
                              >
                                <motion.div
                                  className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}
                                  whileHover={{ scale: 1.5 }}
                                />
                                <span className="group-hover/item:text-foreground transition-colors">
                                  {highlight}
                                </span>
                              </motion.div>
                            ))}
                          </div>

                          {/* CTA Button */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            viewport={{ once: false }}
                          >
                            <Button
                              variant="outline"
                              className="glass-morphism neon-border group/btn mt-4"
                              onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                              <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent font-semibold`}>
                                Request Consultation
                              </span>
                              <ArrowRight className={`ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Consultation Section */}
        <section className="py-24 px-4 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
                Why <span className="text-gradient">Custom Solutions?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                No two projects are alike. Your goals, audience, and challenges deserve a tailored approach.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {consultationBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: false, amount: 0.3 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass-morphism neon-border rounded-3xl p-8 text-center cinematic-shadow group"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
                  >
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-gradient">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="consultation" className="py-32 px-4 relative overflow-hidden">
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 20% 50%, hsl(180 80% 55% / 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(270 70% 60% / 0.15) 0%, transparent 50%)',
              backgroundSize: '100% 100%',
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism neon-border mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold tracking-wider">LET'S COLLABORATE</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide glow-text">
                Ready to Build <span className="text-gradient">Something Extraordinary?</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Book a free consultation and let's discuss how we can bring your vision to life—with 
                transparent timelines, flexible pricing, and a partnership built on trust.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: false }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity text-lg px-12 py-6 group"
                onClick={() => window.location.href = '/#contact'}
              >
                Request Free Consultation
                <Rocket className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="glass-morphism neon-border text-lg px-12 py-6"
                onClick={() => window.open('https://wa.me/917012381292', '_blank')}
              >
                Chat on WhatsApp
                <MessageSquare className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              viewport={{ once: false }}
              className="mt-12 p-6 glass-morphism neon-border rounded-2xl max-w-2xl mx-auto"
            >
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">💡 What to Expect:</strong> In our consultation, 
                we'll explore your project goals, discuss timelines, and provide a custom quote tailored 
                to your specific needs. No pressure, no obligations—just honest conversation.
              </p>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default Services;