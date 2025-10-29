import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MessageSquare, Phone, Linkedin, Instagram, Send, MapPin, Clock,ChevronDown, Globe, Award, Users, Zap } from 'lucide-react';
import ParticleField from '@/components/cinematic/ParticleField';
import Navigation from '@/components/layout/Navigation';
import ScrollProgress from '@/components/cinematic/ScrollProgress';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const heroRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(heroProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(heroProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(heroProgress, [0, 1], [0, -200]);

  const contactMethods = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7012381292",
      link: "tel:+917012381292",
      color: "from-green-400 to-emerald-500",
      description: "Call us directly",
      available: "Mon-Sat, 9AM-6PM IST"
    },
    {
      icon: Mail,
      label: "Email",
      value: "codmacai@gmail.com",
      link: "mailto:codmacai@gmail.com",
      color: "from-blue-400 to-cyan-500",
      description: "Drop us a line",
      available: "24/7 Response"
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: "Chat Instantly",
      link: "https://wa.me/917012381292",
      color: "from-green-400 to-teal-500",
      description: "Instant messaging",
      available: "Quick replies"
    }
  ];

  const socialLinks = [
    { Icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com", color: "text-cyan-400" },
    { Icon: Instagram, label: "Instagram", link: "https://instagram.com", color: "text-pink-400" },
  ];

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const whatsappMessage = `Hi! I'm ${formData.name}.\n\nEmail: ${formData.email}\n\nMessage: ${formData.message}`;
      const whatsappUrl = `https://wa.me/917012381292?text=${encodeURIComponent(whatsappMessage)}`;
      
      window.open(whatsappUrl, '_blank');

      toast({
        title: "Message Sent!",
        description: "Opening WhatsApp. We'll get back to you within 24 hours!",
      });

      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

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
              <span className="text-sm font-bold tracking-wider">GET IN TOUCH</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 glow-text"
            >
              Let's Create <span className="text-gradient">Together</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Ready to transform your vision into a cinematic digital experience? We're just a message away.
            </motion.p>

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

        
                  

        {/* Contact Methods Grid */}
        <section className="py-20 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
                Connect <span className="text-gradient">With Us</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Choose your preferred way to reach out
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: false, amount: 0.3 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group glass-morphism neon-border rounded-3xl p-8 cursor-pointer cinematic-shadow"
                >
                  <motion.div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 cinematic-shadow`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{method.label}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                    <p className="text-sm font-semibold text-primary mb-2">{method.value}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-xs">
                      <Clock className="w-3 h-3" />
                      {method.available}
                    </div>
                  </div>

                  <motion.div
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xs">→</span>
                    </div>
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Form Section */}
        <section className="py-20 px-4 relative">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="glass-morphism neon-border rounded-3xl p-8 md:p-12 cinematic-shadow"
            >
              <div className="text-center mb-12">
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Your Name
                    </label>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background/50 border-muted focus:border-primary transition-colors h-12"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="yourname@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background/50 border-muted focus:border-primary transition-colors h-12"
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Your Message
                  </label>
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
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity group h-14 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span className="ml-2">Sending...</span>
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>

              {/* Additional Info */}
              <div className="mt-12 pt-12 border-t border-muted grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Business Hours</h3>
                    <p className="text-sm text-muted-foreground">Monday - Saturday</p>
                    <p className="text-sm text-muted-foreground">9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Location</h3>
                    <p className="text-sm text-muted-foreground">Kerala, India</p>
                    <p className="text-sm text-muted-foreground">Serving clients worldwide</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-muted">
                <p className="text-center text-sm text-muted-foreground mb-6">
                  Or connect with us on social media
                </p>

                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-full glass-morphism neon-border flex items-center justify-center"
                    >
                      <social.Icon className={`w-5 h-5 ${social.color}`} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
                Quick <span className="text-gradient">Answers</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { q: "Response Time?", a: "Within 24 hours on business days" },
                { q: "Free Consultation?", a: "Yes! First consultation is always free" },
                { q: "Project Timeline?", a: "Typically 2-6 weeks depending on scope" },
                { q: "Payment Terms?", a: "Flexible milestone-based payment options" }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: false }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="glass-morphism neon-border rounded-2xl p-6"
                >
                  <h3 className="font-bold text-lg mb-2 text-gradient">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="py-16 px-4 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="text-center space-y-4"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <h3 className="text-2xl font-bold text-gradient">
                CODMAC
              </h3>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default Contact;