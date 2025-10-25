import ParticleField from "@/components/cinematic/ParticleField";
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
    { icon: Code2, name: "React & Next.js", color: "from-cyan-500 to-blue-500", gradient: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20" },
    { icon: Sparkles, name: "UI/UX Design", color: "from-purple-500 to-pink-500", gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20" },
    { icon: Zap, name: "AI Automation", color: "from-violet-500 to-purple-500", gradient: "bg-gradient-to-br from-violet-500/20 to-purple-500/20" },
    { icon: Globe, name: "Full Stack Solutions", color: "from-teal-500 to-emerald-500", gradient: "bg-gradient-to-br from-teal-500/20 to-emerald-500/20" },
    { icon: Rocket, name: "Performance Engineering", color: "from-amber-500 to-orange-500", gradient: "bg-gradient-to-br from-amber-500/20 to-orange-500/20" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Client-Obsessed",
      description: "Every partnership becomes a collaborative journey where your vision transforms into extraordinary digital realities that exceed expectations.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Award,
      title: "Uncompromising Quality",
      description: "We craft premium experiences with meticulous attention to every interaction, animation, and pixel—because excellence is our signature.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Future-Forward",
      description: "Constantly pushing boundaries with emerging technologies, AI-driven automation, and avant-garde design principles that define tomorrow's web.",
      color: "from-teal-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
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
                      src="/profile.png"
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
                   <span className="text-gradient">VelAura</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
                >
                  A multidisciplinary web studio architecting cinematic digital experiences 
                  through motion, intelligence, and code. Where technology meets artistry.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  Founded by <span className="text-gradient font-semibold">Shaham Moidu C O T</span>, 
                  we evolved from a solo creative journey into a powerhouse studio blending 
                  cutting-edge design, AI automation, and full-stack engineering.
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

        {/* Skills Showcase */}
        <section className="min-h-screen py-24 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-center mb-20 tracking-wide"
            >
              Technical <span className="text-gradient">Arsenal</span>
            </motion.h2>

            <div className="space-y-32">
              {skills.map((skill, index) => {
                const cardRef = useRef(null);
                const { scrollYProgress: cardProgress } = useScroll({
                  target: cardRef,
                  offset: ["start end", "center center"]
                });

                const cardScale = useTransform(cardProgress, [0, 0.5], [0.8, 1]);
                const cardOpacity = useTransform(cardProgress, [0, 0.5], [0, 1]);
                const x = useTransform(
                  cardProgress,
                  [0, 0.5],
                  [index % 2 === 0 ? -100 : 100, 0]
                );

                return (
                  <motion.div
                    key={index}
                    ref={cardRef}
                    style={{ scale: cardScale, opacity: cardOpacity, x }}
                    whileHover={{ scale: 1.02 }}
                    className="glass-morphism neon-border rounded-3xl p-8 md:p-12 group cursor-pointer cinematic-shadow"
                  >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-24 h-24 rounded-2xl ${skill.gradient} flex items-center justify-center shrink-0`}
                      >
                        <skill.icon className="w-12 h-12 text-white" />
                      </motion.div>

                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl md:text-4xl font-bold mb-4 group-hover:text-gradient transition-all">
                          {skill.name}
                        </h3>
                        <p className="text-lg text-muted-foreground">
                          Our team masters the convergence of bleeding-edge frameworks and creative vision to forge immersive experiences that captivate and convert
                        </p>
                      </div>

                      {/* Progress indicator */}
                      <div className="hidden md:block w-1 h-24 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          style={{ scaleY: cardProgress }}
                          className={`w-full h-full bg-gradient-to-b ${skill.color} origin-top`}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="min-h-screen py-24 px-4 relative">
          {/* Dark glass background transition */}
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

                  {/* Animated glow on hover */}
                  <motion.div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Story */}
        <section className="min-h-screen flex items-center justify-center py-24 px-4 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="text-4xl md:text-6xl font-bold text-center mb-12 tracking-wide"
            >
              The <span className="text-gradient">Journey</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="glass-morphism neon-border rounded-3xl p-8 md:p-12 cinematic-shadow"
            >
              <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                <p>
                  <span className="text-gradient font-semibold">VelAura</span> was 
                  born from a singular vision: to transform the digital landscape into a canvas where technology 
                  and artistry converge. What began as founder Shaham Moidu's solo expedition through the world 
                  of freelance web development evolved into a multidisciplinary collective of designers, engineers, 
                  and creative technologists.
                </p>
                <p>
                  Today, we orchestrate full-spectrum digital experiences—from AI-powered automation that 
                  streamlines workflows to motion-rich interfaces that blur the line between utility and art. 
                  Our studio thrives at the intersection of performance engineering, avant-garde design, and 
                  intelligent systems that anticipate user needs before they arise.
                </p>
                <p>
                  We don't just build websites; we architect immersive digital ecosystems. Every project 
                  becomes a collaborative symphony where your brand vision harmonizes with our technical 
                  mastery and creative obsession. From concept to launch, we obsess over milliseconds of 
                  animation timing, semantic perfection, and experiences that linger in memory.
                </p>
                <motion.div
                  className="border-l-4 border-gradient pl-6 mt-8"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-xl font-semibold text-foreground mb-2">Founder's Note</p>
                  <p className="italic">
                    "We believe every digital interaction should feel cinematic—purposeful, emotive, and 
                    unforgettable. At VelAura, we're not just keeping pace with the future; 
                    we're defining it, one pixel and one line of code at a time."
                  </p>
                  <p className="text-sm text-gradient font-bold mt-3">— Shaham Moidu C O T, Founder</p>
                </motion.div>
                <motion.p 
                  className="text-2xl font-bold text-gradient pt-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Let's architect the extraordinary together.
                </motion.p>
              </div>
            </motion.div>
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