import React from 'react';
import { Mail, MapPin, Phone, ShieldCheck, ArrowUpRight, Code } from 'lucide-react';
import Logo from './Logo';
import { TabId } from '../types';

interface FooterProps {
  setCurrentTab: (tab: TabId) => void;
}

export default function Footer({ setCurrentTab }: FooterProps) {
  
  const handleLogoClick = () => {
    setCurrentTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050707] border-t border-white/10 pt-16 pb-8 relative overflow-hidden" id="webgenius-footer">
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-40" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand/Mascot column - spans 5 columns on desktop */}
          <div className="md:col-span-5 space-y-6 flex flex-col items-start text-left">
            <div onClick={handleLogoClick} className="cursor-pointer">
              <Logo size={42} showText={true} />
            </div>
            
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              We specialize in custom hand-coded local business websites engineered to perform, convert, and capture region-wide search rankings. No bulky drag-and-drop templates. Just pure performance metrics.
            </p>

            <div className="flex flex-col gap-3 text-xs text-neutral-400">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span>San Francisco, CA & Regional Offices</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400" />
                <span className="font-mono">team@webgenius.agency</span>
              </div>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-mono font-bold tracking-wider text-teal-400 uppercase">Agency Services</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5" onClick={() => { setCurrentTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <span>Local Contractor Showcases</span>
                <ArrowUpRight className="w-3 h-3 opacity-40 shrink-0" />
              </li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5" onClick={() => { setCurrentTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <span>High-Speed Webstores</span>
                <ArrowUpRight className="w-3 h-3 opacity-40 shrink-0" />
              </li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5" onClick={() => { setCurrentTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <span>Laser Lead Page Funnels</span>
                <ArrowUpRight className="w-3 h-3 opacity-40 shrink-0" />
              </li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5" onClick={() => { setCurrentTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <span>Dynamic Client Booking portals</span>
                <ArrowUpRight className="w-3 h-3 opacity-40 shrink-0" />
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-mono font-bold tracking-wider text-teal-400 uppercase">Portals</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => { setCurrentTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home View</li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => { setCurrentTab('reviews'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Verified Reviews</li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => { setCurrentTab('order'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Spec Proposal Form</li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4 text-left">
            <h4 className="text-xs font-mono font-bold tracking-wider text-teal-400 uppercase">Assurances</h4>
            <div className="space-y-2 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5 text-teal-400 bg-teal-500/5 px-2.5 py-1.5 rounded-lg border border-teal-500/10">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="font-semibold text-[10px] tracking-wide font-mono uppercase">100% OWNERSHIP</span>
              </div>
              <p className="text-[10px] text-neutral-500 leading-normal">
                No contract platform handcuffs. Secure, optimized static designs that you hold in full ownership.
              </p>
            </div>
          </div>

        </div>

        {/* Closing details & safety copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <Code className="w-4 h-4 text-teal-500" />
            <span>© {currentYear} WebGenius Digital Agency. All rights holding reserved.</span>
          </div>

          <div className="flex gap-4 text-[11px] font-mono text-neutral-500 select-none">
            <span className="hover:text-teal-400 transition-colors cursor-pointer">TERMS OF COMPLIANCE</span>
            <span>•</span>
            <span className="hover:text-teal-400 transition-colors cursor-pointer">RESTRICTED CORE VALUES</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
