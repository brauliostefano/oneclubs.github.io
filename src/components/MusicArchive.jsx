'use client';
import React, { useState } from 'react';
import { Play, Calendar, MapPin, ArrowRight, Disc } from 'lucide-react';

const archiveData = [
  {
    id: 1,
    category: 'LEGACY_FILES',
    title: '36 Years of Smooth Criminal',
    artist: 'Michael Jackson',
    event: 'Dangerous World Tour',
    excerpt:
      'Analyzing the 36-year legacy of the "Anti-Gravity Lean." A technical breakdown of the patented stage mechanics and the cinematography that redefined the synchronization between live performance and visual storytelling.',
    videoUrl: 'https://www.youtube.com/embed/h_D3VFfhvs4', // Martin Garrix URL - Sugiero cambiar por MJ luego
    slug: 'smooth-criminal-36-anniversary',
  },
  {
    id: 2,
    category: 'FESTIVAL_DATA',
    title: 'Alive 2007: The Architecture',
    artist: 'Daft Punk',
    event: 'Bercy, Paris',
    excerpt:
      "Exploring the Big Bang of modern visual production. A deep dive into how Daft Punk's LED pyramid integrated hardware and software into a synchronization protocol that still defines the industry standard today.",
    videoUrl: 'https://www.youtube.com/embed/B38CY-4Rd6s',
    slug: 'daft-punk-alive-2007',
  },
  {
    id: 3,
    category: 'LOCAL_HISTORY',
    title: 'The First Pulse of Ultra Buenos Aires',
    artist: 'Various Artists',
    event: 'Ultra Buenos Aires',
    excerpt:
      'Retrieving the signal from Argentina’s first massive electronic synchronization. A technical report on the logistical deployment that successfully brought Ultra’s global production standard to the San Isidro Hippodrome.',
    videoUrl: 'https://www.youtube.com/embed/cWJV0DgMqEA',
    slug: 'ultra-ba-origins',
  },
];

const ArchiveStream = () => {
  const [activeTab, setActiveTab] = useState('ALL');
  const categories = ['ALL', 'STMPD_LOGS', 'FESTIVAL_DATA', 'LOCAL_HISTORY'];

  const filteredData =
    activeTab === 'ALL'
      ? archiveData
      : archiveData.filter((item) => item.category === activeTab);

  return (
    <section
      className="p-4 lg:px-[80px] lg:py-28 pt-24 max-w-screen-xl mx-auto font-sans"
      id="archive"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic">
            Archive{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500">
              Stream
            </span>
          </h2>
          <p className="text-zinc-500 font-mono text-[10px] tracking-[0.3em] mt-4 uppercase">
            // HISTORICAL_DATABASE_ACCESS
          </p>
        </div>

        {/* Sistema de Pestañas (Filtros) */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-[9px] font-black tracking-widest uppercase transition-all border ${
                activeTab === cat
                  ? 'bg-purple-600 border-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                  : 'bg-white/5 border-white/10 text-zinc-500 hover:border-purple-500/50'
              }`}
            >
              {cat.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Contenido */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="group relative bg-zinc-950 border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-purple-500/40 hover:-translate-y-1"
          >
            {/* Preview del Video */}
            <div className="relative aspect-video bg-black overflow-hidden">
              <iframe
                src={`${item.videoUrl}?controls=0&modestbranding=1`}
                className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
            </div>

            {/* Contenido de la Tarjeta */}
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <Disc className="text-purple-500 w-3 h-3 animate-spin-slow" />
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.2em]">
                  {item.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white uppercase italic tracking-tight mb-2 group-hover:text-purple-400 transition-colors">
                {item.title}
              </h3>

              <p className="text-zinc-500 text-xs leading-relaxed font-light mb-6 line-clamp-2">
                {item.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-4 text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {item.event.split(',')[0]}
                  </span>
                </div>

                {/* Link a la Nota Completa */}
                <a
                  href={`/archive/${item.slug}`}
                  className="p-3 bg-white/5 rounded-full text-white hover:bg-purple-600 transition-all transform group-hover:scale-110"
                >
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArchiveStream;
