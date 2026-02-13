'use client';
import React from 'react';
import { Play, MapPin, User, Youtube, Quote, Radio } from 'lucide-react';

// Datos simulados del último video subido a YouTube
const latestVod = {
  title: '¿Vendiste la compu para venir? | La Previa de Martin Garrix',
  location: 'Movistar Arena, Buenos Aires',
  date: '12.02.26',
  agent: 'Stefano', // Vos como el reportero de campo
  // Reemplaza esto con el ID real de tu video de YouTube (lo que va después de "v=")
  youtubeId: 'cWJV0DgMqEA',
  highlightQuote:
    '"Amigo, no duermo hace 48 horas, ¡solo quiero que suene el drop!"',
};

const VoxPopuli = () => {
  return (
    <section className="p-4 lg:px-[80px] pt-11 mb-24 max-w-screen-xl mx-auto font-sans">
      {/* Header de la Sección */}
      <div className="flex flex-col mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic">
          Vox{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-600">
            Populi
          </span>
        </h2>
        <p className="text-zinc-500 font-mono text-xs tracking-[0.3em] mt-4 uppercase flex items-center gap-2">
          <Radio className="text-red-500 animate-pulse" size={12} />
          // FIELD_INTERCEPTS: RAW_CROWD_DATA
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contenedor Principal del Video (Youtube Embed) */}
        <div className="lg:col-span-8 group relative bg-zinc-950 border border-purple-500/30 rounded-[2.5rem] p-2 overflow-hidden shadow-[0_0_60px_rgba(168,85,247,0.15)] hover:border-purple-500/60 transition-all duration-500">
          {/* Decoración Tech */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>

          <div className="relative rounded-[2rem] overflow-hidden aspect-video bg-black">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${latestVod.youtubeId}?rel=0&modestbranding=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Sidebar: Metadatos del Reporte */}
        <div className="lg:col-span-4 space-y-6">
          {/* Tarjeta de Información de Misión */}
          <div className="bg-zinc-950 border border-white/10 rounded-[2.5rem] p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Play size={60} className="text-white" />
            </div>
            <h3 className="text-white font-bold text-lg uppercase italic leading-tight mb-6 pr-8">
              {latestVod.title}
            </h3>

            <div className="space-y-3 font-mono text-[10px] uppercase tracking-widest">
              <div className="flex items-center gap-3 text-zinc-400">
                <MapPin size={14} className="text-fuchsia-500" />
                <span>
                  Location:{' '}
                  <b className="text-white ml-1">{latestVod.location}</b>
                </span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400">
                <User size={14} className="text-purple-500" />
                <span>
                  Field Agent:{' '}
                  <b className="text-white ml-1">{latestVod.agent}</b>
                </span>
              </div>
              <div className="flex items-center gap-3 text-zinc-400 pl-1">
                <span className="text-zinc-600">Date:</span>
                <span>{latestVod.date}</span>
              </div>
            </div>
          </div>

          {/* Tarjeta de Cita Destacada (El gancho) */}
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-[2.5rem] p-6 relative">
            <Quote
              className="absolute top-4 right-4 text-purple-500/30"
              size={24}
            />
            <p className="text-purple-300 font-mono text-[9px] uppercase tracking-widest mb-2">
              // INTERCEPTED_AUDIO_FRAGMENT
            </p>
            <p className="text-white text-lg italic font-medium leading-snug">
              {latestVod.highlightQuote}
            </p>
          </div>

          {/* Botón CTA a YouTube */}
          <a
            href={`https://www.youtube.com/watch?v=${latestVod.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 bg-[#FF0000] hover:bg-[#CC0000] text-white rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] transition-all shadow-lg hover:shadow-red-900/50"
          >
            <Youtube size={18} /> Watch full Stream
          </a>
        </div>
      </div>
    </section>
  );
};

export default VoxPopuli;
