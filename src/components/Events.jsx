import React from 'react';
import { Calendar, MapPin, Radio } from 'lucide-react';

const events = [
  {
    date: '12.03.26',
    title: 'SENTIO LIVE',
    location: 'RAI AMSTERDAM, NL',
    description:
      'The definitive neural synchronization. Martin Garrix returns to his home ground for a 360° holographic experience.',
    imageUrl: '/GRX2.jpg',
  },
  {
    date: '21.03.26',
    title: 'STMPD TAKEOVER',
    location: 'LOLLAPALOOZA ARGENTINA, BA',
    description:
      "NEXUS protocol deploys at the Perry's Stage. A massive frequency-mapping set for the Buenos Aires crowd.",
    imageUrl: '/GRX1.jpg',
  },
  {
    date: '15.07.25',
    title: 'ANIMA PROTOCOL',
    location: 'TOMORROWLAND MAINSTAGE, BE',
    description:
      'Where technology meets the soul. A historical archive of the first live neural-reactive visuals.',
    imageUrl: '/GRX.jpg',
  },
  {
    date: '04.10.25',
    title: 'LABEL NIGHT',
    location: 'BROOKLYN MIRAGE, NY',
    description:
      'An underground data stream. STMPD artists showcase the future of high-frequency club music.',
    imageUrl: '/GRX3.avif',
  },
  {
    date: '28.12.25',
    title: 'ZIGGO DOME 2.0',
    location: 'ZIGGO DOME, AMSTERDAM',
    description:
      'Final synchronization of the cycle. A masterclass in spatial audio and decentralized lighting.',
    imageUrl: '/GRX4.avif',
  },
];

const EventsSection = () => {
  return (
    <>
      <div className="pb-14" id="events"></div>
      <section className="p-4 lg:px-[80px] pt-11 mb-11 max-w-screen-xl mx-auto lg:mb-24 font-sans">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white text-center tracking-tighter uppercase italic">
            Stage{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500">
              Archives
            </span>
          </h2>
          <p className="text-zinc-500 font-mono text-xs tracking-[0.3em] mt-4 uppercase">
            // LIVE_TRANSMISSIONS: HISTORICAL_DATA
          </p>
        </div>

        <div className="flex flex-col h-full gap-8">
          {/* Evento Hero (Destacado) */}
          <div className="group relative bg-zinc-950 text-white rounded-[2.5rem] overflow-hidden min-h-[450px] border border-white/10 shadow-2xl transition-all duration-700 hover:border-purple-500/50">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-60"
              style={{ backgroundImage: `url(${events[0].imageUrl})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

            {/* Info Superior */}
            <div className="relative p-8 flex flex-col h-full justify-between lg:min-h-[450px]">
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full self-start">
                <Calendar className="w-4 h-4 text-purple-400" />
                <p className="text-xs font-mono tracking-widest">
                  {events[0].date}
                </p>
              </div>

              <div className="mt-auto lg:mt-0">
                <h3 className="text-5xl font-black lg:text-[100px] leading-[0.85] uppercase italic tracking-tighter mb-4">
                  {events[0].title}
                </h3>
              </div>

              {/* Panel lateral en Desktop, inferior en Mobile */}
              <div className="bg-black/60 backdrop-blur-xl border border-white/10 text-white p-8 rounded-[2rem] lg:absolute lg:bottom-8 lg:right-8 lg:max-w-[380px] transition-all duration-500 group-hover:bg-purple-900/20 group-hover:border-purple-500/30">
                <div className="flex items-center gap-2 mb-3 text-purple-400">
                  <MapPin className="w-4 h-4" />
                  <p className="font-bold text-xs uppercase tracking-widest">
                    {events[0].location}
                  </p>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  {events[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Grid de Eventos Secundarios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.slice(1).map((event, index) => (
              <div
                key={index}
                className="group relative bg-zinc-900 text-white rounded-[2rem] p-8 overflow-hidden min-h-[220px] flex flex-col justify-end border border-white/10 transition-all duration-500 hover:border-fuchsia-500/50"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  style={{ backgroundImage: `url(${event.imageUrl})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Radio className="w-3 h-3 text-fuchsia-400 animate-pulse" />
                    <p className="text-[10px] font-mono tracking-widest text-zinc-400">
                      {event.date}
                    </p>
                  </div>
                  <h4 className="text-2xl font-black uppercase italic tracking-tighter mb-2 group-hover:text-fuchsia-300 transition-colors">
                    {event.title}
                  </h4>
                  <div className="flex items-center gap-2 mb-3 text-[10px] text-fuchsia-200/60 uppercase font-bold tracking-widest">
                    <MapPin className="w-3 h-3" />
                    {event.location}
                  </div>
                  <p className="text-xs text-zinc-500 font-light leading-snug group-hover:text-zinc-300 transition-colors">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsSection;
