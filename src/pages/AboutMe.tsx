import ParticleField from "@/components/cinematic/ParticleField";
import Navigation from "@/components/layout/Navigation";
import ScrollProgress from "@/components/cinematic/ScrollProgress";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Sparkles, Rocket, Heart, Award, Zap, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutUs = () => {
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(heroProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(heroProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(heroProgress, [0, 1], [0, -200]);

  const skills = [
    { 
      icon: Code2, 
      name: "Web Development", 
      description: "Started our journey with modern React ecosystem, building lightning-fast applications with Next.js for optimal performance and SEO.",
      color: "from-cyan-500 to-blue-500", 
      gradient: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
      side: "left"
    },
    { 
      icon: Sparkles, 
      name: "UI/UX Design", 
      year: "2022",
      description: "Evolved into crafting pixel-perfect, user-centric interfaces with Figma, Adobe XD, and design systems that prioritize both beauty and usability.",
      color: "from-purple-500 to-pink-500", 
      gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      side: "right"
    },
    { 
      icon: Zap, 
      name: "AI Integration", 
      year: "2023",
      description: "Integrated cutting-edge AI technologies—ChatGPT APIs, automation workflows, and intelligent systems that streamline business processes.",
      color: "from-violet-500 to-purple-500", 
      gradient: "bg-gradient-to-br from-violet-500/20 to-purple-500/20",
      side: "left"
    },
    { 
      icon: Globe, 
      name: "Full Stack Solutions", 
      year: "2023",
      description: "Expanded to complete end-to-end development—from database architecture to cloud deployment, delivering scalable production systems.",
      color: "from-teal-500 to-emerald-500", 
      gradient: "bg-gradient-to-br from-teal-500/20 to-emerald-500/20",
      side: "right"
    },
    { 
      icon: Rocket, 
      name: "Ongoing Support", 
      year: "2024",
      description: "Mastered optimization techniques—Core Web Vitals, lazy loading, code splitting—ensuring every millisecond counts for user experience.",
      color: "from-amber-500 to-orange-500", 
      gradient: "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
      side: "left"
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Client-Centric Innovation",
      description: "Every partnership becomes a collaborative journey where your vision transforms into extraordinary digital realities that exceed expectations.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We craft premium experiences with meticulous attention to every interaction, animation, and pixel—because excellence is our signature.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Future-Forward",
      description: "We harness cutting-edge technologies, AI automation, and interactive design to push boundaries and create future-ready digital ecosystems.",
      color: "from-teal-500 to-emerald-500"
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
          

          {/* Glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          <motion.div
            style={{ opacity, scale, y }}
            className="relative z-10 px-4 max-w-7xl mx-auto w-full"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Photo Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                <div className="relative w-64 md:w-80 mx-auto">
                  {/* Animated rotating gradient border */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl opacity-40 blur-2xl group-hover:opacity-60 transition-opacity"
                  />
                  
                  {/* Photo container with glass morphism */}
                  <div className="relative glass-morphism neon-border rounded-3xl overflow-hidden cinematic-shadow aspect-[3/4]">
                    <img 
                      src="/logo2.png"
                      alt="Shells & Scales Exports Web Studio"
                      className="w-full h-full object-cover object-top"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism neon-border mb-4"
                >
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-bold">CREATIVE WEB STUDIO & DIGITAL ARCHITECTS</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-5xl md:text-7xl font-bold tracking-wide glow-text"
                >
                   <span className="text-gradient">CODMAC</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
                >
                  We’re CODMAC, a passionate web design agency dedicated to creating immersive digital experiences. We specialize in crafting high-performance websites that combine intuitive design, smooth interactions, and cutting-edge technology.
                </motion.p>

                

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="flex gap-4 pt-4"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity group"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Let's Collaborate
                    <Sparkles className="ml-2 w-5 h-5 transition-transform group-hover:rotate-12" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>

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
                className="cursor-pointer group"
              >
                <ChevronDown className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* TIMELINE Skills Showcase */}
        <section className="min-h-screen py-24 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-center mb-12 tracking-wide"
            >
               <span className="text-gradient">Expertise</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: false }}
              className="text-center text-xl text-muted-foreground mb-20 max-w-3xl mx-auto"
            >
              From humble beginnings to full-stack mastery—our journey of continuous learning and innovation
            </motion.p>

            {/* Timeline Container */}
            <div className="relative">
              {/* Central Vertical Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden md:block">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="w-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full"
                />
              </div>

              {/* Timeline Items */}
              <div className="space-y-24 md:space-y-32">
                {skills.map((skill, index) => {
                  const itemRef = useRef(null);
                  const { scrollYProgress: itemProgress } = useScroll({
                    target: itemRef,
                    offset: ["start end", "center center"]
                  });

                  const itemOpacity = useTransform(itemProgress, [0, 0.5], [0, 1]);
                  const itemX = useTransform(
                    itemProgress,
                    [0, 0.5],
                    [skill.side === "left" ? -100 : 100, 0]
                  );
                  const itemScale = useTransform(itemProgress, [0, 0.5], [0.8, 1]);

                  return (
                    <motion.div
                      key={index}
                      ref={itemRef}
                      style={{ opacity: itemOpacity, x: itemX, scale: itemScale }}
                      className="relative"
                    >
                      {/* Desktop Layout */}
                      <div className={`hidden md:grid md:grid-cols-2 gap-8 items-center ${
                        skill.side === "right" ? "md:grid-flow-dense" : ""
                      }`}>
                        {/* Content Card */}
                        <motion.div
                          whileHover={{ scale: 1.03, y: -5 }}
                          className={`glass-morphism neon-border rounded-3xl p-6 md:p-8 cinematic-shadow ${
                            skill.side === "right" ? "md:col-start-2" : ""
                          }`}
                        >
                          

                          {/* Title */}
                          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gradient">
                            {skill.name}
                          </h3>

                          {/* Description */}
                          <p className="text-muted-foreground leading-relaxed">
                            {skill.description}
                          </p>
                        </motion.div>

                        {/* Icon Circle */}
                        <div className={`flex justify-center ${
                          skill.side === "right" ? "md:col-start-1 md:row-start-1" : ""
                        }`}>
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{ 
                              delay: 0.2, 
                              type: "spring", 
                              stiffness: 100,
                              damping: 15
                            }}
                            viewport={{ once: false }}
                            whileHover={{ 
                              scale: 1.2, 
                              rotate: 360,
                              transition: { duration: 0.6 }
                            }}
                            className={`relative w-24 h-24 rounded-full ${skill.gradient} flex items-center justify-center cursor-pointer group`}
                          >
                            {/* Pulsing Ring */}
                            <motion.div
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.5, 0, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                              className={`absolute inset-0 rounded-full bg-gradient-to-r ${skill.color} blur-xl`}
                            />

                            {/* Icon */}
                            <skill.icon className="w-12 h-12 text-white relative z-10 group-hover:scale-110 transition-transform" />

                            {/* Outer Glow Ring */}
                            <div className={`absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r ${skill.color} bg-clip-border opacity-60`} />
                          </motion.div>
                        </div>
                      </div>

                      {/* Mobile Layout */}
                      <div className="md:hidden">
                        <div className="flex gap-4 items-start">
                          {/* Icon */}
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{ 
                              type: "spring", 
                              stiffness: 100,
                              damping: 15
                            }}
                            viewport={{ once: false }}
                            className={`relative w-16 h-16 rounded-full ${skill.gradient} flex items-center justify-center shrink-0`}
                          >
                            <motion.div
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                              }}
                              className={`absolute inset-0 rounded-full bg-gradient-to-r ${skill.color} blur-lg`}
                            />
                            <skill.icon className="w-8 h-8 text-white relative z-10" />
                          </motion.div>

                          {/* Content */}
                          <div className="flex-1 glass-morphism neon-border rounded-2xl p-4">
                            <motion.div
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ delay: 0.2 }}
                              viewport={{ once: false }}
                              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 bg-gradient-to-r ${skill.color} text-xs`}
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                              <span className="font-bold text-white">{skill.year}</span>
                            </motion.div>

                            <h3 className="text-xl font-bold mb-2 text-gradient">
                              {skill.name}
                            </h3>

                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {skill.description}
                            </p>
                          </div>
                        </div>

                        {/* Mobile Timeline Connector */}
                        {index < skills.length - 1 && (
                          <div className="ml-8 mt-4 mb-4">
                            <motion.div
                              initial={{ height: 0 }}
                              whileInView={{ height: "3rem" }}
                              transition={{ duration: 0.5 }}
                              viewport={{ once: false }}
                              className={`w-0.5 bg-gradient-to-b ${skill.color} rounded-full`}
                            />
                          </div>
                        )}
                      </div>

                      {/* Center Dot on Timeline (Desktop) */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
                        viewport={{ once: false }}
                        className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary z-10"
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [1, 0, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                          className="absolute inset-0 rounded-full bg-primary"
                        />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>

              {/* End Marker */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                viewport={{ once: false }}
                className="hidden md:flex justify-center mt-16"
              >
                <div className="glass-morphism neon-border rounded-full px-8 py-4 flex items-center gap-3">
                  <Rocket className="w-6 h-6 text-primary" />
                  <span className="text-lg font-bold text-gradient">Present & Beyond</span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-6 h-6 text-accent" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="min-h-screen py-24 px-4 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-center mb-20 tracking-wide"
            >
              Core <span className="text-gradient">Values</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateX: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: false, amount: 0.2 }}
                  whileHover={{ y: -10, rotateX: 5, transition: { duration: 0.3 } }}
                  className="glass-morphism neon-border rounded-3xl p-8 cinematic-shadow group"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                    className="mb-6"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-center mb-4 group-hover:text-gradient transition-all">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {value.description}
                  </p>

                  <motion.div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        

        

        {/* Final CTA - Matches ContactFinale style */}
        <section className="min-h-screen py-24 px-4 relative overflow-hidden flex items-center justify-center">
          {/* Animated wave background */}
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
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-wide glow-text"
            >
              Ready to Build <span className="text-gradient">Together?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: false }}
              className="text-xl md:text-2xl text-muted-foreground mb-12"
            >
              Let's transform your vision into a cinematic digital masterpiece that captivates and converts
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: false }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity text-lg px-12 py-6 group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Project
                <Rocket className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;