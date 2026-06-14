import React from 'react';

interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
  isLight?: boolean;
}

export default function Logo({ size = 40, showText = true, className = '', isLight = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Mascot Logo Icon */}
      <div 
        className="relative flex items-center justify-center shrink-0 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full shadow-inner"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Mint Green Background */}
          <rect width="100" height="100" rx="26" fill="#D1FAE5" />
          
          {/* Decorative network/grid lines on the mint background to sound elegant but subtle */}
          <circle cx="50" cy="50" r="42" stroke="#A7F3D0" strokeWidth="1" strokeDasharray="3 3" />
          
          {/* Classy Emerald Green Worm Body */}
          {/* Designed to form a curving modern figure-8 or smooth 'W' curve that flows beautifully */}
          <path
            d="M 28 64 C 20 54 24 44 34 44 C 44 44 42 66 54 66 C 66 66 72 54 71 38"
            stroke="#059669"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Little green tail accent */}
          <circle cx="28" cy="64" r="5" fill="#059669" />

          {/* Smart, Curvy head point accent */}
          <circle cx="71" cy="38" r="5" fill="#059669" />

          {/* Cute subtle blush under glasses */}
          <ellipse cx="60" cy="42" rx="4" ry="2" fill="#34D399" opacity="0.4" />
          <ellipse cx="80" cy="42" rx="4" ry="2" fill="#34D399" opacity="0.4" />

          {/* Professional Glasses (Graphite/Charcoal black) */}
          {/* Left Lens */}
          <circle cx="62" cy="34" r="9" stroke="#0F172A" strokeWidth="3" fill="#FFFFFF" fillOpacity="0.25" />
          {/* Glass glare */}
          <path d="M 65 30 Q 61 28 59 32" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />

          {/* Right Lens */}
          <circle cx="78" cy="34" r="9" stroke="#0F172A" strokeWidth="3" fill="#FFFFFF" fillOpacity="0.25" />
          {/* Glass glare */}
          <path d="M 81 30 Q 77 28 75 32" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />

          {/* Bridge of the Glasses */}
          <path d="M 70 34 H 71" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" />

          {/* Temple arms & frame hints */}
          <path d="M 53 34 Q 55 33 56 34" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
          <path d="M 84 34 Q 86 33 87 34" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />

          {/* Friendly Minimal Smile under glasses */}
          <path
            d="M 68 47 Q 70 49 72 47"
            stroke="#047857"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-display text-lg font-bold tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
            Web<span className="text-teal-400">Genius</span>
          </span>
          <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mt-0.5">
            Web Design Agency
          </span>
        </div>
      )}
    </div>
  );
}
