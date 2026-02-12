import React from 'react';
import { Terminal, Headphones, Radio } from 'lucide-react';

const News = () => {
  const secondaryNews = [
    {
      category: 'Label Release',
      title: 'NEXUS Records: Quantum synths pack for underground producers',
      description:
        'Engineered at the intersection of rhythmic mathematics and raw energy...',
      image: '/GRX.jpg',
      icon: <Headphones className="w-4 h-4 text-purple-400" />,
    },
    {
      category: 'Mainstage Tech',
      title: 'New 360° Spatial Audio layer integrated into the Tokyo Dome set',
      description:
        'A breakthrough in immersive acoustics. The Tokyo Dome set now utilizes the NEXUS...',
      image: '/GRX1.jpg',
      icon: <Radio className="w-4 h-4 text-fuchsia-400" />,
    },
  ];

  return (
    <>
      <div className="pb-14" id="news"></div>
      <section className="p-4 lg:px-[80px] pt-11 max-w-screen-xl mx-auto font-sans">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white text-center tracking-tighter uppercase italic">
            NEXUS{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600">
              Pulse
            </span>
          </h2>
          <p className="text-zinc-500 font-mono text-xs tracking-[0.3em] mt-4 uppercase">
            // FREQUENCY_LOGS: LIVE_STREAMS
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Noticia Principal */}
          <div className="group relative flex flex-col justify-end rounded-[2.5rem] overflow-hidden h-[500px] lg:col-span-3 border border-white/10 shadow-2xl transition-all duration-700 hover:border-purple-500/50">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: 'url("/GRX2.jpg")' }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

            <div className="absolute top-6 left-6 z-10">
              <div className="flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full">
                <Terminal className="w-4 h-4 text-purple-400" />
                <p className="text-[10px] font-mono text-white/70 uppercase tracking-widest">
                  {new Date().getDate()} / {new Date().getMonth() + 1} /{' '}
                  {new Date().getFullYear()}
                </p>
              </div>
            </div>

            <div className="relative p-8 lg:p-12 z-10">
              <h3 className="text-3xl lg:text-4xl font-black mb-4 text-white leading-tight uppercase italic tracking-tighter text-balance">
                Sentio Evolution: Martin Garrix Deploys the Neural Mainstage
              </h3>
              <p className="text-zinc-400 text-sm lg:text-base leading-relaxed max-w-xl font-light">
                In a massive technical partnership, <strong>STMPD RCRDS</strong>{' '}
                has integrated <strong>NEXUS</strong> frequency-mapping to
                synchronize the Tomorrowland stage. The "Sentio" protocol
                allowed Garrix to manipulate live visual data...
                <strong>EDM environment.</strong>
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
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>

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
                  <span className="text-zinc-400 text-sm lg:text-xs leading-relaxed max-w-xl font-light mt-1">
                    {news.description}
                  </span>
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/10 group-hover:border-purple-500/50 transition-colors"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
