import React from 'react';
import { PULSE_IMAGES } from '../constants/images';
import { Award, Globe, Zap, Radio } from 'lucide-react';

const Pulse = () => {
  const secondaryNews = [
    {
      category: 'GRAMMYS 2026',
      title: 'Fred again.. & Skrillex Dominate the Night',
      description:
        "Winning Best Dance/Electronic Album, they've cemented the new era of global sound.",
      image: PULSE_IMAGES.GRAMMYS_WINNERS,
      icon: <Award className="w-4 h-4 text-purple-400" />,
    },
    {
      category: 'WORLD TOUR',
      title: "Anyma Reveals 'ÆDEN' Visual Concept",
      description:
        'A new standard in immersive entertainment featuring AI-driven 4D visuals.',
      image: PULSE_IMAGES.ANYMA_AEDEN,
      icon: <Globe className="w-4 h-4 text-purple-400" />,
    },
    {
      category: 'LOCAL SCENE',
      title: 'Ultra Buenos Aires: Phase 3 Live',
      description:
        "The countdown begins for the return of the world's premier electronic festival to San Isidro.",
      image: PULSE_IMAGES.ULTRA_BA,
      icon: <Zap className="w-4 h-4 text-purple-400" />,
    },
  ];

  return (
    <section className="p-4 lg:px-[80px] pt-11 max-w-screen-xl mx-auto font-sans">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-white text-center tracking-tighter uppercase italic">
          NEXUS{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600">
            Pulse
          </span>
        </h2>
        <p className="text-zinc-500 font-mono text-xs tracking-[0.3em] mt-4 uppercase">
          // FREQUENCY_LOGS: TRENDING_NOW
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Noticia Principal: Martin Garrix Talent Search */}
        <div className="group relative flex flex-col justify-end rounded-[2.5rem] overflow-hidden h-[500px] lg:col-span-3 border border-white/10 shadow-2xl transition-all duration-700 hover:border-purple-500/50">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("https://radio3cadenapatagonia.com.ar/wp-content/uploads/2026/01/720_11zon-59-1.jpeg")`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

          <div className="absolute top-6 left-6 z-10">
            <div className="flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full">
              <Radio className="w-4 h-4 text-purple-400 animate-pulse" />
              <p className="text-[10px] font-mono text-white/70 uppercase tracking-widest">
                12 / 02 / 2026
              </p>
            </div>
          </div>

          <div className="relative p-8 lg:p-12 z-10">
            <p className="text-purple-400 font-bold text-xs mb-2 tracking-widest uppercase">
              // STMPD EXCLUSIVE
            </p>
            <h3 className="text-3xl lg:text-4xl font-black mb-4 text-white leading-tight uppercase italic tracking-tighter text-balance">
              Americas Tour 2026: Garrix Launches Global Talent Search
            </h3>
            <p className="text-zinc-400 text-sm lg:text-base leading-relaxed max-w-xl font-light">
              Starting May 1st in Dallas, the "Americas Tour" will hit 16
              cities. <strong>STMPD RCRDS</strong> has opened a call for local
              DJs to open the stages in Santiago and Buenos Aires. Applications
              close Feb 19.
            </p>
          </div>
        </div>

        {/* Noticias Secundarias */}
        <div className="grid gap-6 lg:col-span-2">
          {secondaryNews.map((news, idx) => (
            <div
              key={idx}
              className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:bg-white/10"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
                style={{ backgroundImage: `url("${news.image}")` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>

              <div className="relative p-6 flex flex-col justify-center h-48 lg:h-full">
                <div className="flex items-center gap-2 mb-3">
                  {news.icon}
                  <span className="text-[9px] font-bold text-purple-400 uppercase tracking-widest">
                    {news.category}
                  </span>
                </div>
                <h4 className="text-white font-bold text-lg leading-snug group-hover:text-purple-300 transition-colors">
                  {news.title}
                </h4>
                <p className="text-zinc-400 text-xs leading-relaxed max-w-xl font-light mt-1">
                  {news.description}
                </p>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/10 group-hover:border-purple-500/50 transition-colors"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pulse;
