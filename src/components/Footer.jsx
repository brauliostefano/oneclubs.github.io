import React from 'react';
import { Headphones, Zap, Cpu, Share2, Globe } from 'lucide-react';

const Footer = () => {
  return (
    /* Restauramos: w-screen, lg:w-full, mb-20 y lg:pl-24 */
    <footer className="relative bg-zinc-950 border-t border-white/5 text-white py-9 mb-20 w-screen lg:w-full lg:m-0 lg:pt-11 lg:pl-24 overflow-hidden">
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between items-center md:items-start gap-12 relative z-10">
        <div className="text-center md:text-left flex flex-col gap-6">
          <div>
            <h2 className="text-3xl tracking-tighter italic uppercase font-black">
              NEXUS<span className="text-purple-500">PROTOCOL</span>
            </h2>
            <p className="text-zinc-500 text-[10px] font-mono mt-2 tracking-[0.3em] uppercase">
              // A NEXUS NETWORK BRAND. © 2026
            </p>
          </div>

          {/* Active Nodes Iconos */}
          <div className="flex justify-center md:justify-start space-x-6 opacity-60">
            <div className="flex flex-col items-center gap-2 group cursor-help">
              <Headphones className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="text-[8px] font-bold tracking-widest uppercase">
                Music
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-help">
              <Zap className="w-6 h-6 text-fuchsia-400 group-hover:scale-110 transition-transform" />
              <span className="text-[8px] font-bold tracking-widest uppercase">
                Live
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-help">
              <Cpu className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="text-[8px] font-bold tracking-widest uppercase">
                Tech
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-help">
              <Share2 className="w-6 h-6 text-fuchsia-400 group-hover:scale-110 transition-transform" />
              <span className="text-[8px] font-bold tracking-widest uppercase">
                Social
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-help">
              <Globe className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="text-[8px] font-bold tracking-widest uppercase">
                Global
              </span>
            </div>
          </div>
        </div>

        {/* Sección Derecha: Newsletter & Navigation */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-end">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400">
            Stay Synchronized
          </h3>

          <p className="text-zinc-500 text-[9px] mt-4 uppercase tracking-widest text-center md:text-right">
            Privacy guaranteed. No spam, just pure signal.
          </p>

          {/* Navigation Links */}
          <div className="mt-12 flex gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
            <a
              href="#about"
              className="hover:text-purple-400 transition-colors"
            >
              // About
            </a>
            <a href="#faqs" className="hover:text-purple-400 transition-colors">
              // FAQs
            </a>
            <a
              href="#contact"
              className="hover:text-purple-400 transition-colors"
            >
              // Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
