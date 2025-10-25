import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, Export Business",
    content: "The cinematic experience they created for our brand was beyond expectations. Every scroll feels like a journey through innovation.",
    rating: 5,
    avatar: "RK",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Priya Sharma",
    role: "Founder, E-commerce",
    content: "They transformed our vision into a living, breathing digital experience. The attention to motion and detail is unparalleled.",
    rating: 5,
    avatar: "PS",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Amit Patel",
    role: "Director, Tech Startup",
    content: "Working with this studio was like watching magic unfold. They don't just build websites — they craft immersive experiences.",
    rating: 5,
    avatar: "AP",
    color: "from-teal-500 to-emerald-500",
  },
];

const TestimonialsGlass = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.5]);

  return (
    <section ref={containerRef} className="min-h-screen py-24 px-4 relative">
      {/* Dark glass background transition */}
      <motion.div
        style={{ opacity: backgroundOpacity }}
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
          Client <span className="text-gradient">Stories</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -10, rotateX: 5, transition: { duration: 0.3 } }}
              className="glass-morphism neon-border rounded-3xl p-8 cinematic-shadow group"
            >
              {/* Floating quote icon */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="mb-6"
              >
                <Quote className="w-12 h-12 text-primary/30" />
              </motion.div>

              {/* Star rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    viewport={{ once: false }}
                  >
                    <Star className="w-5 h-5 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-muted-foreground leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>

              {/* Avatar and info */}
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-lg cinematic-shadow`}
                >
                  {testimonial.avatar}
                </motion.div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Animated glow on hover */}
              <motion.div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGlass;
