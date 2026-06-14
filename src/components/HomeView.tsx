import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, ShieldCheck, Zap, BarChart3, Users, 
  Layers, Palette, Code2, Rocket, ArrowUpRight, CheckCircle2, Monitor, Touchpad, HelpCircle
} from 'lucide-react';
import { TabId } from '../types';

interface HomeViewProps {
  setCurrentTab: (tab: TabId) => void;
}

export default function HomeView({ setCurrentTab }: HomeViewProps) {
  
  const handleGetStarted = () => {
    setCurrentTab('order');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whyChooseUs = [
    {
      id: "why-1",
      icon: Zap,
      title: "Meticulous Optimization",
      description: "Our websites load instantly. Under 1.2s local rendering speeds ensure you never lose a prospect to a blank screen or a slow page load.",
    },
    {
      id: "why-2",
      icon: BarChart3,
      title: "Conversion-First Formats",
      description: "Every layout, button placement, and content container is architected to guide regional traffic directly into scheduling calls, requests, or store visits.",
    },
    {
      id: "why-3",
      icon: ShieldCheck,
      title: "Ironclad Local SEO",
      description: "We build modern local schema schemas inside your code to make sure local map packs and search crawlers rank your business at the very top.",
    },
    {
      id: "why-4",
      icon: Users,
      title: "Absolute Ownership",
      description: "No confusing code blockages, no hostage configurations. You hold complete ownership over your domain, hosting structure, and clean static code.",
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Scope & Architecture Strategy",
      description: "We analyze local competitors, verify regional search queries, and map out a bespoke wireframe visual schematic custom-tailored for your local business.",
    },
    {
      number: "02",
      title: "High-Fidelity Custom Design",
      description: "Our designers craft a unique visual layout using custom typography, beautiful imagery, and high-contrast styling that strictly avoids formulaic templates.",
    },
    {
      number: "03",
      title: "Precision Engineering",
      description: "We translate approved mockups into modern, lightning-fast static code using robust, accessible semantic elements that perform elegantly on any viewport.",
    },
    {
      number: "04",
      title: "SEO Optimization & Launch",
      description: "We integrate structured rich-snippet local markup, index with search consoles, deploy clean analytics, and launch on zero-downtime, global CDNs.",
    }
  ];

  const services = [
    {
      idx: "srv-1",
      title: "Bespoke Service Showcases",
      price: "Starting at $1,499",
      description: "Custom multi-page premium websites for plumbing, consulting, medical clinics, law firms, and high-end local service contractors.",
      features: ["Premium typography setups", "Online booking options", "Local schema integrations", "Custom quote capture systems"]
    },
    {
      idx: "srv-2",
      title: "Clean High-Performance Retail Stores",
      price: "Starting at $2,499",
      description: "Lightweight, secure transactional structures mapped out for regional shops, custom cafes, boutique storefronts, and local products.",
      features: ["Polished payment checkout flow", "Bespoke inventory management preview", "Mobile touch payments enabled", "High-speed product listings"]
    },
    {
      idx: "srv-3",
      title: "Laser-Focused Lead Funnels",
      price: "Starting at $899",
      description: "Sleek, high-converting, single-page promotional destinations engineered to turn direct local advertising clicks into immediate clients.",
      features: ["Perfect A/B structured blocks", "Direct form submissions", "CRM linking integrations", "Extreme speed grades (>98 score)"]
    }
  ];

  return (
    <div className="relative w-full overflow-hidden antialiased bg-[#050707] pb-20" id="home-view-root">
      
      {/* Visual background decorations */}
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* --- HERO SECTION --- */}
      <section className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-32" id="home-hero-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-8 flex flex-col items-start text-left" id="hero-left-content">
              {/* Dynamic tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full" id="hero-premium-badge">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                <span className="text-[11px] font-mono tracking-widest text-teal-300 uppercase">Premium Digital Craftsmen</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-tight text-white leading-[1.1]" id="hero-headline">
                  Websites That <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-200 to-emerald-400 font-bold">
                    Work as Hard as You Do.
                  </span>
                </h1>
                
                <p className="max-w-xl text-base sm:text-lg text-neutral-400 leading-relaxed font-sans" id="hero-subheadline">
                  Professional websites designed to help local businesses stand out, build trust, and grow. Turn your visitor traffic into recurring brick-and-mortar customers.
                </p>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-wrap gap-4 w-full sm:w-auto" id="hero-buttons">
                <button
                  onClick={handleGetStarted}
                  id="hero-cta-get-started"
                  className="group px-7 py-4 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-medium text-base rounded-xl transition-all duration-200 shadow-[0_4px_30px_rgba(13,148,136,0.3)] hover:shadow-[0_4px_35px_rgba(13,148,136,0.5)] flex items-center justify-center gap-2 cursor-pointer border border-teal-400/20 grow sm:grow-0"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={handleGetStarted}
                  id="hero-cta-request-quote"
                  className="px-7 py-4 bg-neutral-900 hover:bg-neutral-850 text-neutral-200 hover:text-white font-medium text-base rounded-xl transition-all duration-200 border border-neutral-800 hover:border-teal-500/30 flex items-center justify-center gap-2 cursor-pointer grow sm:grow-0"
                >
                  Request a Quote
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-6 border-t border-white/5 w-full grid grid-cols-3 gap-4" id="hero-trust-metrics">
                <div>
                  <div className="text-2xl font-semibold text-white font-display">100%</div>
                  <div className="text-[11px] font-mono text-neutral-400 tracking-wider">CUSTOM CODE</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-teal-400 font-display">99+</div>
                  <div className="text-[11px] font-mono text-neutral-400 tracking-wider">SPEED RATING</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white font-display">No Template</div>
                  <div className="text-[11px] font-mono text-neutral-400 tracking-wider">ORIGINAL DESIGNS</div>
                </div>
              </div>

            </div>

            {/* Hero Right Visual: High-performance Browser Dashboard Mockup */}
            <div className="lg:col-span-5 relative" id="hero-right-visual">
              <div className="absolute inset-0 bg-teal-500/10 rounded-3xl blur-2xl pointer-events-none" />
              
              {/* Browser Window mockup wrapper */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.60, delay: 0.2 }}
                className="relative rounded-2xl border border-white/10 shadow-2xl overflow-hidden glass-panel"
                id="hero-mockup-browser"
              >
                {/* Browser Tab Bar */}
                <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/60" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/60" />
                  </div>
                  <div className="bg-[#050707]/60 rounded-md px-12 py-1 text-[11px] font-mono text-neutral-400 tracking-wide border border-white/5 flex items-center gap-1.5 select-none">
                    <span className="w-2 h-2 rounded-full bg-teal-500" />
                    webgenius.agency/work
                  </div>
                  <span className="w-1.5 h-1.5 bg-neutral-700 rounded-full" />
                </div>

                {/* Dashboard / Work Mockup Content */}
                <div className="p-4 sm:p-6 space-y-6">
                  {/* Performance metric top card */}
                  <div className="bg-white/5 rounded-xl p-4 border border-teal-500/20 shadow-[0_0_20px_rgba(13,148,136,0.05)] flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="text-xs font-mono text-teal-400">CORE WEB VITALS</div>
                      <div className="text-base font-display font-medium text-white">Maximum Performance Grade</div>
                    </div>
                    {/* Circle Speed Graph */}
                    <div className="relative shrink-0 flex items-center justify-center w-14 h-14">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-neutral-800"
                          strokeWidth="3"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-emerald-400"
                          strokeDasharray="99, 100"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <span className="absolute text-xs font-mono font-bold text-white">99+</span>
                    </div>
                  </div>

                  {/* Representational Wireframe layouts of a local contractor site */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-300 font-mono text-xs font-bold border border-teal-500/20">W1</div>
                        <div>
                          <div className="text-xs font-semibold text-white">Apex Plumbers Inc.</div>
                          <div className="text-[10px] font-mono text-neutral-400">Google Map Rank #1 in Local Area</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md">Online</span>
                    </div>

                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-300 font-mono text-xs font-bold border border-teal-500/20">W2</div>
                        <div>
                          <div className="text-xs font-semibold text-white">Prestige Dental Care</div>
                          <div className="text-[10px] font-mono text-neutral-400">+240% Local Patient Inquiries</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md">Online</span>
                    </div>

                    <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-300 font-mono text-xs font-bold border border-teal-500/20">W3</div>
                        <div>
                          <div className="text-xs font-semibold text-white">Vanguard Masonry</div>
                          <div className="text-[10px] font-mono text-neutral-400">Integrated Project Estimates</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md">Online</span>
                    </div>
                  </div>

                  {/* Wireframe interface controls */}
                  <div className="grid grid-cols-2 gap-3" id="wireframe-speed-highlights">
                    <div className="bg-white/5 p-3 rounded-lg border border-white/5 space-y-1">
                      <div className="text-[10px] font-mono text-neutral-400">TIME TO INTERACTIVE</div>
                      <div className="text-sm font-semibold font-mono text-white">0.3s</div>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg border border-white/5 space-y-1">
                      <div className="text-[10px] font-mono text-neutral-400">REDUNDANT SCRIPTS</div>
                      <div className="text-sm font-semibold font-mono text-red-400">0%</div>
                    </div>
                  </div>
                </div>

                {/* Footer status message */}
                <div className="bg-white/5 py-2.5 px-4 text-center border-t border-white/5">
                  <p className="text-[10px] font-mono text-neutral-400 tracking-wider">
                    SECURED & IMMUTABLE CLOUD HOSTING ARCHITECTURE
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE WEBGENIUS SECTION --- */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 border-y border-white/10 bg-transparent relative" id="why-choose-webgenius">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Section heading */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-xs font-mono tracking-widest text-teal-400 uppercase">Engineered for Regional Growth</h2>
            <p className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
              Why Local Businesses Choose WebGenius
            </p>
            <p className="text-neutral-400 font-sans text-sm sm:text-base leading-relaxed">
              We don't use clunky prebuilt layout builders that drag your page loading times down. We write clean, high-performance web structures coded explicitly to generate client growth.
            </p>
          </div>

          {/* Grid of features */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" id="why-choose-cards-grid">
            {whyChooseUs.map((item) => (
              <div 
                key={item.id}
                id={item.id}
                className="p-6 rounded-2xl glass-panel glass-panel-hover relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-teal-500/5 rounded-bl-full group-hover:bg-teal-500/10 transition-colors" />
                
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center border border-teal-500/20 group-hover:scale-110 transition-transform duration-350">
                  <item.icon className="w-6 h-6 text-teal-400" />
                </div>

                <h3 className="text-base font-display font-semibold text-white mt-5 mb-2">
                  {item.title}
                </h3>
                
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- OUR PROCESS SECTION --- */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 relative" id="our-process-section">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Section heading */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono tracking-widest text-teal-400 uppercase">Seamless Blueprint Deployment</span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
              Our Premium Client Process
            </h2>
            <p className="text-neutral-400 font-sans text-sm leading-relaxed">
              How we collaborate to build a highly converting digital centerpiece for your company, guiding you seamlessly from discovery to complete local deployment.
            </p>
          </div>

          {/* Process flow layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative" id="process-steps-container">
            {/* Thread line connecting steps */}
            <div className="hidden lg:block absolute left-4 right-4 top-1/2 h-[1px] bg-gradient-to-r from-teal-500/0 via-teal-500/20 to-teal-500/0 -z-10 pointer-events-none" />

            {steps.map((step, index) => (
              <div 
                key={step.number}
                id={`process-step-${index}`}
                className="rounded-2xl p-6 glass-panel glass-panel-hover relative space-y-4 group overflow-hidden"
              >
                {/* Step numbering */}
                <div className="flex justify-between items-center" id={`process-number-header-${index}`}>
                  <span className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-teal-500/30 to-teal-400/10 group-hover:from-teal-300 group-hover:to-teal-500 transition-all duration-300">
                    {step.number}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-base font-display font-medium text-white tracking-tight pt-1">
                  {step.title}
                </h3>

                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- SERVICES OVERVIEW SECTION --- */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 border-t border-white/10 bg-transparent relative" id="services-overview-section">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Section heading */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono tracking-widest text-teal-400 uppercase">Tailor-Made Configurations</span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
              Bespoke Web Packages
            </h2>
            <p className="text-neutral-400 font-sans text-sm">
              We translate custom business scope requirements into high-value online solutions. No monthly platform locks, completely clean handoffs.
            </p>
          </div>

          {/* Pricing/Service Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8" id="services-cards-grid">
            {services.map((srv, index) => {
              const isHighlight = index === 0; // Highlight the main showcase package
              return (
                <div 
                  key={srv.idx}
                  id={srv.idx}
                  className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden h-full ${
                    isHighlight 
                      ? 'bg-gradient-to-b from-teal-500/10 to-teal-500/5 border-2 border-teal-500/50 shadow-[0_0_40px_rgba(13,148,136,0.15)] backdrop-blur-xl' 
                      : 'glass-panel glass-panel-hover'
                  }`}
                >
                  {isHighlight && (
                    <div className="absolute top-0 right-0 bg-teal-500 text-slate-950 text-[10px] font-mono tracking-widest font-bold px-4 py-1.5 uppercase rounded-bl-xl shadow-md">
                      POPULAR CHOICE
                    </div>
                  )}

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-display font-semibold text-white">
                        {srv.title}
                      </h3>
                      <p className="text-teal-400 stroke-teal-400 font-sans font-semibold text-sm">
                        {srv.price}
                      </p>
                    </div>

                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-sans">
                      {srv.description}
                    </p>

                    <div className="h-[1px] bg-white/5" />

                    <ul className="space-y-3">
                      {srv.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                          <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={handleGetStarted}
                      id={`choose-package-btn-${index}`}
                      className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                        isHighlight 
                          ? 'bg-teal-500 hover:bg-teal-400 text-black shadow-[0_0_20px_rgba(20,184,166,0.2)]' 
                          : 'bg-neutral-900 hover:bg-neutral-850 text-white border border-neutral-800 hover:border-teal-500/20'
                      }`}
                    >
                      Configure Scope
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* --- FINAL HERO/CTA PANEL --- */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="final-cta-section">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900/40 border border-white/10 p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 glass-panel shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="space-y-4 max-w-xl text-left">
            <span className="text-xs font-mono tracking-widest text-teal-400 uppercase">Ready to Dominate Your Local Area?</span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight">
              Let's Build Something That Captures ROI.
            </h2>
            <p className="text-neutral-400 font-sans text-sm sm:text-base leading-relaxed">
              Don't settle for slow hosting, template builders, or developers who don't understand local lead capture. Experience the premium local standard with WebGenius.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto" id="final-cta-btn-group">
            <button
              onClick={handleGetStarted}
              id="final-cta-get-started-btn"
              className="group w-full sm:w-auto px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black font-semibold text-base rounded-xl transition-all duration-200 shadow-[0_4px_30px_rgba(13,148,136,0.35)] flex items-center justify-center gap-2 cursor-pointer"
            >
              Get My Free Custom Proposal
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
