import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Star, FileText, Home as HomeIcon } from 'lucide-react';
import { TabId } from '../types';
import Logo from './Logo';

interface NavbarProps {
  currentTab: TabId;
  setCurrentTab: (tab: TabId) => void;
}

export default function Navbar({ currentTab, setCurrentTab }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'order', label: 'Request Quote', icon: FileText },
  ] as const;

  const handleNavClick = (id: TabId) => {
    setCurrentTab(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/5 shadow-lg antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="cursor-pointer"
            id="nav-logo-btn"
          >
            <Logo size={42} showText={true} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2" id="desktop-nav-menu">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-tab-${item.id}`}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg flex items-center gap-2 ${
                    isActive ? 'text-teal-400' : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {/* Active background capsule animation */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 bg-teal-500/10 border border-teal-500/20 rounded-lg -z-10 shadow-[0_0_15px_rgba(13,148,136,0.1)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block" id="desktop-nav-cta">
            <button
              onClick={() => handleNavClick('order')}
              id="nav-get-started-btn"
              className="group relative px-5 py-2.5 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-medium text-sm rounded-lg shadow-[0_4px_20px_rgba(13,148,136,0.25)] hover:shadow-[0_4px_25px_rgba(13,148,136,0.4)] transition-all duration-200 flex items-center gap-2 cursor-pointer border border-teal-400/20"
            >
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden" id="mobile-nav-toggle-container">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-nav-toggle-btn"
              className="p-2 text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-t border-white/5 bg-neutral-950/95 backdrop-blur-xl"
            id="mobile-nav-drawer"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    id={`mobile-nav-tab-${item.id}`}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-150 ${
                      isActive 
                        ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20 shadow-[0_0_15px_rgba(13,148,136,0.05)]' 
                        : 'text-neutral-300 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </button>
                );
              })}

              <div className="pt-4 border-t border-white/5">
                <button
                  onClick={() => handleNavClick('order')}
                  id="mobile-nav-cta-btn"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-medium rounded-lg shadow-lg hover:shadow-teal-500/20 transition-all cursor-pointer"
                >
                  Request a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
