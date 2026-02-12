'use client';
import React from 'react';
import { Headphones, Zap, Cpu, Globe, Activity, Home } from 'lucide-react';

const MobileNav = () => {
  const navItems = [
    { icon: <Home size={20} />, label: 'Home', href: '/' },
    { icon: <Headphones size={20} />, label: 'Music', href: '#news' },
    { icon: <Zap size={20} />, label: 'Energy', href: '#events' },
    { icon: <Cpu size={20} />, label: 'Protocol', href: '#membership' },
    { icon: <Activity size={20} />, label: 'Pulse', href: '#footer' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-[999] flex justify-center p-4 lg:hidden">
      {/* Contenedor con Glassmorphism */}
      <div className="flex w-full max-w-md justify-evenly items-center bg-zinc-950/80 backdrop-blur-xl border border-white/10 py-3 rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="group flex flex-col items-center gap-1 transition-all"
          >
            <div className="p-2 rounded-xl text-zinc-500 group-hover:text-purple-400 group-active:scale-90 group-active:bg-purple-500/10 transition-all">
              {item.icon}
            </div>
            <span className="text-[10px] font-black uppercase tracking-tighter text-zinc-600 group-hover:text-purple-300 transition-colors">
              {item.label}
            </span>
            {/* Indicador de luz inferior al hacer focus */}
            <div className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 shadow-[0_0_8px_#a855f7] transition-opacity"></div>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
