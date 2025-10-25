import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MessageSquare, Phone, Linkedin, Instagram, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const socialIcons = [
  { Icon: Phone, label: "Phone", link: "https://wa.me/919876543210", color: "text-green-400" },
  { Icon: Mail, label: "Email", link: "mailto:info@shellsandscales.com", color: "text-blue-400" },
  { Icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com", color: "text-cyan-400" },
  { Icon: Instagram, label: "Instagram", link: "https://instagram.com", color: "text-pink-400" },
];

const ContactFinale = () => {
  const { toast } = useToast();
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const whatsappMessage = `Hi! I'm ${formData.name}. Email: ${formData.email}. Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Opening WhatsApp",
      description: "We'll get back to you within 24 hours!",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={containerRef} className="min-h-screen py-24 px-4 relative overflow-hidden">
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

      {/* Light rays */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-10"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0deg, hsl(180 80% 55%) 90deg, transparent 180deg, hsl(270 70% 60%) 270deg, transparent 360deg)',
        }}
      />

      <motion.div
        style={{ scale, opacity }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-center mb-6 tracking-wide glow-text"
        >
          Let's Create <span className="text-gradient">Together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center text-muted-foreground mb-16 text-lg"
        >
          Ready to transform your vision into a cinematic digital experience?
        </motion.p>

        {/* Floating form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="glass-morphism neon-border rounded-3xl p-8 md:p-12 cinematic-shadow"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="text-sm font-medium">Your Name</label>
                <Input
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-muted focus:border-primary transition-colors"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="text-sm font-medium">Email Address</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50 border-muted focus:border-primary transition-colors"
                />
              </motion.div>
            </div>

            <motion.div
              whileFocus={{ scale: 1.02 }}
              className="space-y-2"
            >
              <label className="text-sm font-medium">Your Message</label>
              <Textarea
                placeholder="Tell us about your project vision..."
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background/50 border-muted focus:border-primary transition-colors resize-none"
              />
            </motion.div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity group"
            >
              Send Message
              <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>

          {/* Social icons */}
          <div className="mt-12 pt-12 border-t border-muted">
            <p className="text-center text-sm text-muted-foreground mb-6">
              Or connect with us on social media
            </p>

            <div className="flex justify-center gap-4">
              {socialIcons.map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    opacity: { delay: index * 0.1 },
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="glass-morphism neon-border hover:scale-110 transition-transform"
                    onClick={() => window.open(social.link, '_blank')}
                  >
                    <social.Icon className={`w-5 h-5 ${social.color}`} />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: false }}
          className="text-center mt-16 space-y-4"
        >
          <h3 className="text-2xl font-bold text-gradient">
            Shells & Scales Exports Web Studio
          </h3>
          <p className="text-muted-foreground">
            Crafting cinematic digital experiences since 2024
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactFinale;
