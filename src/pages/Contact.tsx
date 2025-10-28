import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MessageSquare, Phone, Linkedin, Instagram, Send, MapPin, Clock, Sparkles } from 'lucide-react';

const ContactPage = () => {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const contactMethods = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7012381292",
      link: "tel:+917012381292",
      color: "from-green-400 to-emerald-500",
      description: "Call us directly"
    },
    {
      icon: Mail,
      label: "Email",
      value: "codmacai@gmail.com",
      link: "mailto:codmacai@gmail.com",
      color: "from-blue-400 to-cyan-500",
      description: "Drop us a line"
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      link: "https://wa.me/917012381292",
      color: "from-green-400 to-teal-500",
      description: "Instant messaging"
    }
  ];

  const socialLinks = [
    { Icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com", color: "text-cyan-400" },
    { Icon: Instagram, label: "Instagram", link: "https://instagram.com", color: "text-pink-400" },
  ];

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all fields'
      });
      return;
    }

    const whatsappMessage = `Hi! I'm ${formData.name}.\n\nEmail: ${formData.email}\n\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/917012381292?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');

    setFormStatus({
      type: 'success',
      message: 'Opening WhatsApp...'
    });

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setFormStatus({ type: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(94, 234, 212, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)',
            backgroundSize: '100% 100%',
          }}
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <section ref={containerRef} className="relative z-10 min-h-screen py-24 px-4">
        <motion.div
          style={{ scale, opacity }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-2 h-2 rounded-full bg-cyan-400"
              />
              <span className="text-xs tracking-[0.2em]">GET IN TOUCH</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-wide"
            >
              Let's Create <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-teal-400 bg-clip-text text-transparent">Together</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Ready to transform your vision into a cinematic digital experience? We're just a message away.
            </motion.p>
          </div>

          {/* Contact Methods Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 cursor-pointer"
              >
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                <div className="flex flex-col items-center text-center relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{method.label}</h3>
                  <p className="text-sm text-gray-400 mb-3">{method.description}</p>
                  <p className="text-sm font-semibold text-cyan-400">{method.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Main Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl"
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-400 transition-colors outline-none text-white placeholder-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-400 transition-colors outline-none text-white placeholder-gray-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Your Message</label>
                <textarea
                  placeholder="Tell us about your project vision..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-400 transition-colors outline-none resize-none text-white placeholder-gray-500"
                />
              </div>

              {formStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    formStatus.type === 'success' 
                      ? 'bg-green-500/20 border border-green-500/50 text-green-400' 
                      : 'bg-red-500/20 border border-red-500/50 text-red-400'
                  }`}
                >
                  {formStatus.message}
                </motion.div>
              )}

              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-teal-400 font-semibold text-lg group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>
            </div>

            {/* Additional Info */}
            <div className="mt-12 pt-12 border-t border-gray-700 grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Business Hours</h3>
                  <p className="text-sm text-gray-400">Monday - Saturday</p>
                  <p className="text-sm text-gray-400">9:00 AM - 6:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-sm text-gray-400">Kerala, India</p>
                  <p className="text-sm text-gray-400">Serving clients worldwide</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-center text-sm text-gray-400 mb-6">
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
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10"
                  >
                    <social.Icon className={`w-5 h-5 ${social.color}`} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-center mt-16 space-y-4"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-teal-400 bg-clip-text text-transparent">
                Codmac
              </h3>
            </div>
            <p className="text-gray-400">
              Crafting cinematic digital experiences since 2024
            </p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;