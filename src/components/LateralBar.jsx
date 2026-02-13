import React from 'react';
import {
  FileArchive,
  Zap,
  Cpu,
  House,
  Terminal,
  SquaresUnite,
  Mic2,
} from 'lucide-react';

const LateralBar = () => {
  const navItems = [
    { icon: <House size={20} />, label: 'Home', href: '#home' },
    { icon: <SquaresUnite size={20} />, label: 'plur', href: '#plur' },
    { icon: <Zap size={20} />, label: 'pulse', href: '#pulse' },
    { icon: <Mic2 size={20} />, label: 'Vox Populi', href: '#vox' },
    { icon: <FileArchive size={20} />, label: 'archive', href: '#archive' },
  ];

  return (
    <aside className="hidden lg:flex flex-col z-[999] items-center fixed left-0 top-0 h-screen w-20 bg-zinc-950/40 backdrop-blur-2xl border-r border-white/5 shadow-[20px_0_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:w-24">
      {/* Branding con link al Inicio */}
      <div className="py-10 relative group">
        <a href="#home" className="relative z-10 block">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:rotate-12 transition-transform duration-500">
            <Terminal className="text-white w-6 h-6" />
          </div>
        </a>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-purple-500/20 rounded-full animate-ping pointer-events-none"></div>
      </div>

      {/* Navigation Rail */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-8 w-full">
        {navItems.map((item, index) => (
          <div key={index} className="group relative">
            <a
              href={item.href}
              className="flex items-center justify-center w-12 h-12 rounded-xl text-zinc-500 hover:text-white hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
            >
              <div className="group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
                {item.icon}
              </div>
            </a>
            <span className="absolute left-20 top-1/2 -translate-y-1/2 px-3 py-1 bg-purple-600 text-white text-[10px] font-black uppercase tracking-widest rounded-md opacity-0 pointer-events-none group-hover:opacity-100 group-hover:left-24 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.4)] whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Status Bar */}
      <div className="py-8 flex flex-col items-center gap-4">
        <p className="[writing-mode:vertical-lr] text-[9px] font-mono text-zinc-600 uppercase tracking-[0.3em]">
          Nexus_Media_Active
        </p>
      </div>
    </aside>
  );
};

export default LateralBar;
