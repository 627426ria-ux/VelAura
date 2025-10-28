import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, ArrowRight, Calendar, Tag, Zap, Award, TrendingUp } from 'lucide-react';
import ParticleField from '@/components/cinematic/ParticleField';
import Navigation from '@/components/layout/Navigation';

const Projects = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const headerScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const projects = [
    {
      id: 1,
      title: "Shells & Scales Exports",
      category: "Seafood Exporters",
      description: "A comprehensive export business platform featuring elegant product showcases, detailed company information, and seamless contact integration.",
      longDescription: "Built with modern web technologies for optimal performance and stunning visual experiences. Features real-time inventory management, automated email notifications, and a fully responsive design that works flawlessly across all devices.",
      image: "/logo-512.jpeg",
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      metrics: [
        { label: "Performance", value: "95+", icon: Zap },
        { label: "SEO Score", value: "98", icon: TrendingUp },
        { label: "Accessibility", value: "100", icon: Award }
      ],
      features: [
        "Product catalog with advanced filtering",
        "Real-time inventory management",
        "Automated email notifications",
      ],
      gradient: "from-cyan-500 to-blue-500",
      glowColor: "hsl(180 80% 55% / 0.4)",
      link: "https://www.shellsandscalesexports.in",
      date: "2025",
      status: "Live Production"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* PARTICLE FIELD BACKGROUND - EXACT FROM HERO */}
      <Navigation />
      <ParticleField />

      {/* CONTENT */}
      <div ref={containerRef} className="relative">
        {/* Hero Header */}
        <motion.section 
          style={{ opacity: headerOpacity, scale: headerScale }}
          className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism neon-border text-sm tracking-wider">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent"
                />
                OUR PORTFOLIO
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 glow-text"
            >
              <span className="text-gradient">Crafted</span>
              <br />
              <span className="text-gradient">Experiences</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            >
              Every pixel, every interaction, every moment designed to inspire and perform
            </motion.p>
          </div>
        </motion.section>

        {/* Main Project Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {projects.map((project, index) => {
              const cardRef = useRef(null);
              const { scrollYProgress: cardProgress } = useScroll({
                target: cardRef,
                offset: ["start end", "center center"]
              });

              const cardY = useTransform(cardProgress, [0, 0.5], [100, 0]);
              const cardOpacity = useTransform(cardProgress, [0, 0.5], [0, 1]);

              return (
                <motion.div
                  key={project.id}
                  ref={cardRef}
                  style={{ y: cardY, opacity: cardOpacity }}
                  className="mb-32"
                >
                  {/* Project Header */}
                  <div className="mb-12">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="flex items-center gap-4 mb-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white`}>
                          {project.status}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {project.date}
                        </div>
                      </div>
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      viewport={{ once: false }}
                      className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient glow-text"
                    >
                      {project.title}
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      viewport={{ once: false }}
                      className="text-lg md:text-xl text-muted-foreground"
                    >
                      {project.category}
                    </motion.p>
                  </div>

                  {/* Main Project Card */}
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left: Image & Metrics */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="space-y-6"
                    >
                      {/* Project Image */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative aspect-video rounded-3xl overflow-hidden glass-morphism neon-border group cursor-pointer cinematic-shadow"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                          style={{ background: `linear-gradient(135deg, ${project.glowColor}, transparent)` }}
                        />
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="glass-morphism neon-border rounded-full p-4"
                          >
                            <ExternalLink className="w-8 h-8 text-white" />
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Metrics Grid */}
                      <div className="grid grid-cols-3 gap-4">
                        {project.metrics.map((metric, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            viewport={{ once: false }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="glass-morphism neon-border rounded-2xl p-4 text-center"
                          >
                            <metric.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                            <div className="text-2xl font-bold text-gradient mb-1">{metric.value}</div>
                            <div className="text-xs text-muted-foreground">
                              {metric.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Right: Details */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="space-y-8"
                    >
                      {/* Description */}
                      <div className="glass-morphism neon-border rounded-3xl p-8">
                        <h3 className="text-2xl font-bold mb-4 text-gradient">Overview</h3>
                        <p className="text-base leading-relaxed mb-6 text-muted-foreground">
                          {project.longDescription}
                        </p>

                        {/* Technologies */}
                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Tag className="w-4 h-4 text-primary" />
                            <h4 className="text-sm font-semibold">Technologies</h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <motion.span
                                key={idx}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: false }}
                                whileHover={{ scale: 1.1, y: -3 }}
                                className="px-4 py-2 rounded-full text-xs font-semibold glass-morphism neon-border cursor-pointer"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Features */}
                        <div>
                          <h4 className="text-sm font-semibold mb-3">Key Features</h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: false }}
                                className="flex items-start gap-3 text-sm text-muted-foreground"
                              >
                                <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-primary" />
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 px-8 py-4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-center font-semibold text-lg group relative overflow-hidden"
                        >
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            View Live Site
                            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </span>
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient glow-text">
                Let's Build Something Amazing
              </h2>
              <p className="text-xl mb-12 text-muted-foreground">
                Ready to bring your vision to life with cutting-edge technology?
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 rounded-full bg-gradient-to-r from-primary via-secondary to-accent font-bold text-xl group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Start Your Project
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;