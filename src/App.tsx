/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  ShieldCheck, 
  Leaf, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  Menu, 
  X, 
  Instagram, 
  Twitter, 
  Facebook,
  ChevronDown,
  ShoppingBag,
  Flame,
  Clock,
  Package
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Benefits', href: '#benefits' },
    { name: 'Ingredients', href: '#ingredients' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-green/95 backdrop-blur-xl py-3 shadow-2xl border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center transition-transform group-hover:rotate-12">
            <Zap className="text-brand-green w-6 h-6 fill-current" />
          </div>
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-brand-gold">GINGER SHOT</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em]">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-brand-gold transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all group-hover:w-full" />
            </a>
          ))}
          <button className="bg-brand-gold text-brand-green px-6 py-2.5 rounded-full font-black hover:bg-brand-gold-light transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-brand-gold/20">
            ORDER <ShoppingBag size={16} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-gold p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-brand-green border-t border-white/10 overflow-hidden md:hidden"
          >
            <div className="p-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-2xl font-serif text-brand-gold border-b border-white/5 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-brand-gold text-brand-green px-6 py-4 rounded-2xl font-black text-center text-lg shadow-xl">
                ORDER NOW
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-brand-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full md:w-1/3 h-1/2 bg-brand-gold/5 blur-[100px] rounded-full translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-gold text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            100% Organic Nigerian Ginger
          </div>
          <h1 className="text-5xl sm:text-7xl xl:text-8xl font-serif font-bold leading-[0.95] mb-8">
            Ignite Your <br />
            <span className="text-gold-gradient italic">Natural Power.</span>
          </h1>
          <p className="text-base sm:text-lg text-white/70 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
            Hand-crafted in small batches using premium, sun-dried ginger. A concentrated burst of immunity, energy, and vitality in every 60ml shot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-brand-gold text-brand-green px-10 py-5 rounded-full font-black text-lg hover:bg-brand-gold-light transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-brand-gold/20">
              GET YOUR PACK <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="border border-white/20 hover:bg-white/5 px-10 py-5 rounded-full font-bold text-lg transition-all backdrop-blur-sm">
              VIEW BUNDLES
            </button>
          </div>
          
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/user${i}/120/120`} 
                  className="w-12 h-12 rounded-full border-2 border-brand-green shadow-xl"
                  alt="User"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="text-center sm:text-left">
              <div className="flex justify-center sm:justify-start text-brand-gold mb-1">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-sm font-medium text-white/60 tracking-wide">Trusted by 10,000+ Nigerians</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="relative px-4 sm:px-0"
        >
          <div className="relative z-10 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(212,175,55,0.15)] border border-white/10">
            <img 
              src="https://picsum.photos/seed/ginger-shot-bottle/1000/1250" 
              alt="Ginger Shot Bottle" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 sm:p-6 rounded-3xl">
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="text-brand-gold w-4 h-4" />
                  <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-black">Daily Ritual</p>
                </div>
                <p className="text-lg sm:text-2xl font-serif italic leading-tight">"The morning kick that changed my energy levels forever."</p>
              </div>
            </div>
          </div>
          
          {/* Decorative floating elements */}
          <motion.div 
            animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-12 w-40 h-40 bg-brand-gold/20 blur-[80px] rounded-full"
          />
          <motion.div 
            animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-gold/10 blur-[100px] rounded-full"
          />
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <ChevronDown className="text-brand-gold/30" size={32} />
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Energy",
      description: "Natural caffeine-free boost that keeps you sharp all day without the crash."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Immunity Shield",
      description: "Packed with antioxidants and gingerol to fight off seasonal illnesses."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Gut Health",
      description: "Soothes digestion and reduces inflammation naturally from the inside out."
    }
  ];

  return (
    <section id="benefits" className="py-24 sm:py-32 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-6xl font-serif font-bold mb-6">Why Ginger Shot?</h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">We don't just make drinks; we bottle the ancient power of Nigerian soil to fuel your modern lifestyle.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -15 }}
              className="p-10 rounded-[2.5rem] bg-brand-green border border-white/5 hover:border-brand-gold/40 transition-all duration-500 group"
            >
              <div className="w-20 h-20 rounded-3xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-8 group-hover:scale-110 transition-transform duration-500">
                {benefit.icon}
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4">{benefit.title}</h3>
              <p className="text-white/60 leading-relaxed text-lg">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Ingredients = () => {
  return (
    <section id="ingredients" className="py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-4 sm:space-y-6">
              <img src="https://picsum.photos/seed/ginger-root/500/700" className="rounded-3xl w-full aspect-[3/4] object-cover shadow-2xl" alt="Fresh Ginger" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/citrus/500/500" className="rounded-3xl w-full aspect-square object-cover shadow-2xl" alt="Lemon" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4 sm:space-y-6 pt-12 sm:pt-20">
              <img src="https://picsum.photos/seed/pure-honey/500/500" className="rounded-3xl w-full aspect-square object-cover shadow-2xl" alt="Honey" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/turmeric-root/500/700" className="rounded-3xl w-full aspect-[3/4] object-cover shadow-2xl" alt="Turmeric" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-4xl sm:text-6xl font-serif font-bold mb-10 leading-tight">Nothing But <br /><span className="text-brand-gold italic">Pure Nature.</span></h2>
          <div className="space-y-8">
            {[
              { name: "Organic Ginger", desc: "Sourced from Kaduna, high in gingerol for that signature burn." },
              { name: "Fresh Lemon", desc: "A Vitamin C burst for skin health and metabolic support." },
              { name: "Wild Honey", desc: "Natural sweetness with powerful antibacterial properties." },
              { name: "Turmeric Root", desc: "The ultimate anti-inflammatory agent for joint health." }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 items-start group"
              >
                <div className="mt-1.5 p-1 rounded-full bg-brand-gold/10 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-green transition-colors">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-black text-xl mb-1 tracking-wide">{item.name}</h4>
                  <p className="text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <button className="mt-12 text-brand-gold font-black uppercase tracking-widest text-sm flex items-center gap-3 hover:gap-6 transition-all group">
            LEARN ABOUT OUR SOURCING <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Starter Pack",
      price: "₦7,500",
      count: "7 Shots",
      desc: "Perfect for a week of wellness.",
      popular: false,
      features: ["7 x 60ml Ginger Shots", "Freshly Pressed", "Lagos Delivery Only"]
    },
    {
      name: "Power Bundle",
      price: "₦18,000",
      count: "21 Shots",
      desc: "Our most popular choice.",
      popular: true,
      features: ["21 x 60ml Ginger Shots", "Free Delivery in Lagos", "Priority Small Batch", "10% Savings"]
    },
    {
      name: "Family Pack",
      price: "₦32,000",
      count: "42 Shots",
      desc: "Wellness for the whole home.",
      popular: false,
      features: ["42 x 60ml Ginger Shots", "Free Nationwide Delivery", "Eco-Friendly Cooler Bag", "20% Savings"]
    }
  ];

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-6xl font-serif font-bold mb-6">Choose Your Power</h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">Freshly pressed and delivered to your doorstep. No preservatives, no shortcuts.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-end">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative p-10 rounded-[3rem] border transition-all duration-500 ${plan.popular ? 'bg-brand-gold text-brand-green border-brand-gold scale-105 z-10 shadow-2xl shadow-brand-gold/30' : 'bg-white/5 border-white/10 hover:border-brand-gold/30'}`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-brand-green px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-xl">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className={`text-2xl font-serif font-bold mb-2 ${plan.popular ? 'text-brand-green' : 'text-brand-gold'}`}>{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className={`text-sm font-bold opacity-60`}>/ {plan.count}</span>
                </div>
                <p className={`text-sm font-medium ${plan.popular ? 'text-brand-green/70' : 'text-white/50'}`}>{plan.desc}</p>
              </div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold">
                    <CheckCircle2 size={18} className={plan.popular ? 'text-brand-green' : 'text-brand-gold'} />
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all active:scale-95 ${plan.popular ? 'bg-brand-green text-white hover:bg-black shadow-xl' : 'bg-brand-gold text-brand-green hover:bg-brand-gold-light shadow-lg shadow-brand-gold/10'}`}>
                ORDER NOW
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Chidi O.",
      role: "Tech Lead, Lagos",
      content: "I used to drink 4 coffees a day. Now, one Ginger Shot in the morning keeps me focused until evening. It's a game changer.",
      rating: 5
    },
    {
      name: "Amina B.",
      role: "Fitness Coach",
      content: "The best recovery drink. I feel the inflammation leaving my body. Plus, the taste is actually incredible—spicy and sweet!",
      rating: 5
    },
    {
      name: "Tunde E.",
      role: "Entrepreneur",
      content: "Finally, a Nigerian brand that prioritizes quality and aesthetics. The packaging is premium and the product is even better.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-6xl font-serif font-bold mb-6">The Community</h2>
          <div className="flex justify-center gap-1 text-brand-gold mb-4">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={24} />)}
          </div>
          <p className="text-white/80 font-black uppercase tracking-[0.3em] text-xs">4.9/5 Average Rating from 500+ Reviews</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 relative group hover:bg-white/[0.05] transition-all duration-500"
            >
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-brand-gold rounded-2xl flex items-center justify-center text-brand-green font-bold text-3xl font-serif shadow-xl group-hover:rotate-12 transition-transform">
                "
              </div>
              <p className="text-xl italic text-white/80 mb-10 leading-relaxed font-serif">
                {review.content}
              </p>
              <div className="flex items-center gap-4">
                <img src={`https://picsum.photos/seed/rev${idx}/100/100`} className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" alt={review.name} referrerPolicy="no-referrer" />
                <div>
                  <p className="font-black text-brand-gold tracking-wide">{review.name}</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto rounded-[4rem] gold-gradient p-12 sm:p-24 text-center relative overflow-hidden shadow-[0_0_100px_rgba(212,175,55,0.2)]">
        <div className="absolute top-0 left-0 w-full h-full bg-black/5 pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl sm:text-7xl font-serif font-bold text-brand-green mb-8 leading-tight">Ready to feel <br />the burn?</h2>
          <p className="text-brand-green/80 text-lg sm:text-xl mb-12 max-w-2xl mx-auto font-bold leading-relaxed">
            Join thousands of Nigerians who start their day with Ginger Shot. Order your first pack today and get 10% off your first order.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-brand-green text-white px-12 py-6 rounded-full font-black text-xl hover:bg-black transition-all shadow-2xl active:scale-95">
              SHOP NOW
            </button>
            <button className="bg-transparent border-2 border-brand-green text-brand-green px-12 py-6 rounded-full font-black text-xl hover:bg-brand-green hover:text-white transition-all active:scale-95">
              SUBSCRIBE & SAVE
            </button>
          </div>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-4 border-brand-green/10 rounded-full" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-brand-green/10 rounded-full" />
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-24 border-t border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center">
                <Zap className="text-brand-green w-6 h-6 fill-current" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-brand-gold">GINGER SHOT</span>
            </div>
            <p className="text-white/40 max-w-sm mb-10 text-lg leading-relaxed">
              Premium wellness crafted in Nigeria. Empowering your daily life with the purest natural ingredients from our soil.
            </p>
            <div className="flex gap-5">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-green hover:border-brand-gold transition-all duration-300">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black mb-8 text-brand-gold uppercase tracking-[0.3em] text-xs">Shop</h4>
            <ul className="space-y-5 text-white/50 font-bold">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Single Shots</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Weekly Packs</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Monthly Subscription</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-8 text-brand-gold uppercase tracking-[0.3em] text-xs">Company</h4>
            <ul className="space-y-5 text-white/50 font-bold">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Sourcing</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">FAQs</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/20 uppercase tracking-[0.3em] font-black">
          <p>© 2024 Ginger Shot Wellness Ltd. Handcrafted in Lagos.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-brand-green overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Ingredients />
        <Pricing />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
