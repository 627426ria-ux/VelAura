import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pricingPlans = [
  {
    name: "Basic",
    price: "₹15,000",
    delivery: "1 Week",
    features: [
      "5–6 Pages",
      "Fully Responsive",
      "Domain & Hosting Help",
      "Basic SEO",
      "Professional Design",
    ],
    color: "from-cyan-500 to-blue-500",
    glow: "shadow-[0_0_40px_rgba(34,211,238,0.4)]",
  },
  {
    name: "Dynamic",
    price: "₹35,000",
    delivery: "2–3 Weeks",
    features: [
      "6–10 Pages",
      "CMS Integration",
      "Interactive Animations",
      "Advanced SEO + Analytics",
      "Priority Support",
    ],
    color: "from-purple-500 to-pink-500",
    glow: "shadow-[0_0_50px_rgba(168,85,247,0.5)]",
    popular: true,
  },
  {
    name: "E-Commerce",
    price: "₹60,000+",
    delivery: "3–4 Weeks",
    features: [
      "Full Online Store",
      "Payment Integration",
      "Product Dashboard",
      "SEO + Performance",
      "Unlimited Products",
    ],
    color: "from-teal-500 to-emerald-500",
    glow: "shadow-[0_0_40px_rgba(20,184,166,0.4)]",
  },
];

const PricingCards = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="min-h-screen py-24 px-4 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-center mb-20 tracking-wide"
        >
          Investment <span className="text-gradient">Tiers</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => {
            const cardRef = useRef(null);
            const { scrollYProgress: cardProgress } = useScroll({
              target: cardRef,
              offset: ["start end", "center center"]
            });

            const rotateY = useTransform(cardProgress, [0, 0.5], [10, 0]);
            const scale = useTransform(cardProgress, [0, 0.5], [0.9, 1]);

            const delays = [-0.1, 0, 0.1];

            return (
              <motion.div
                key={index}
                ref={cardRef}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: delays[index], duration: 0.6 }}
                viewport={{ once: false, amount: 0.2 }}
                style={{
                  scale,
                  rotateY: plan.popular ? 0 : rotateY,
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 0,
                  transition: { duration: 0.3 }
                }}
                className={`glass-morphism neon-border rounded-3xl p-8 relative overflow-hidden group ${
                  plan.popular ? plan.glow : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 text-sm font-bold rounded-bl-xl">
                    POPULAR
                  </div>
                )}

                {/* Animated background gradient */}
                <motion.div
                  animate={{
                    opacity: [0.1, 0.2, 0.1],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-10 rounded-3xl`}
                />

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                  
                  <div className="mb-6">
                    <span className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                    <p className="text-sm text-muted-foreground mt-2">
                      Delivery: {plan.delivery}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: false }}
                        className="flex items-start gap-3"
                      >
                        <Check className={`w-5 h-5 shrink-0 mt-0.5 bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`} />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full group/btn bg-gradient-to-r ${plan.color} hover:opacity-90 transition-opacity`}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Start Project
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default PricingCards;
