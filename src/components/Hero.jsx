'use client';

import React, { useState } from 'react';
import '../styles/Membership.css';
import Counter from './Counter';
import {
  Zap,
  ShieldCheck,
  Globe,
  Activity,
  Info,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';

const locationData = {
  Norway: ['Oslo', 'Bergen', 'Tromsø', 'Stavanger'],
  Argentina: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza'],
  Netherlands: ['Amsterdam', 'Rotterdam', 'Utrecht'],
  Spain: ['Barcelona', 'Madrid', 'Valencia'],
  'United States': ['New York', 'Los Angeles', 'Miami'],
  Mexico: ['CDMX', 'Guadalajara', 'Monterrey', 'Cancún'],
  Sweden: ['Stockholm', 'Gothenburg', 'Malmö', 'Uppsala'],
  Finland: ['Helsinki', 'Espoo', 'Tampere', 'Vantaa'],
  Germany: ['Berlin', 'Munich', 'Hamburg', 'Frankfurt'],
  Canada: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa'],
  Chile: ['Santiago', 'Valparaíso', 'Concepción', 'Antofagasta'],
  France: ['Paris', 'Lyon', 'Marseille', 'Bordeaux'],
};

// src/components/Plus.jsx
export const Plus = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 48 48"
    className="icon icon-cross"
  >
    <path
      fill="#fff"
      d="M42.3848 14.1005L33.8995 5.61519L24 15.5147L14.1005 5.61519L5.61523 14.1005L15.5147 24L5.61522 33.8995L14.1005 42.3847L24 32.4853L33.8995 42.3847L42.3848 33.8995L32.4853 24L42.3848 14.1005Z"
    ></path>
  </svg>
);
const Membership = () => {
  return (
    <div id="protocol">
      <div className="p-4 lg:px-[30px] pt-11 max-w-screen-xl mx-auto">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 h-auto">
          {/* Caja 1: Node Status (Sustituye a "Join the crew") */}
          <div className="hidden lg:flex lg:col-span-3 flex-col justify-between border border-purple-500/20 rounded-[28px] p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-50"></div>

            <div className="relative z-10">
              <p className="text-purple-500 font-mono text-[10px] tracking-widest uppercase mb-2">
                // IDENTITY_LINK
              </p>
              <h3 className="text-white text-2xl font-black uppercase italic leading-none">
                Ultra_BA
                <br />
                Argentina
              </h3>
            </div>

            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-zinc-500 font-mono text-[9px] uppercase">
                  Connection: Stable
                </span>
              </div>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                Sincronizado con el protocolo global desde Buenos Aires.
                Recibiendo datos de STMPD_LOGS.
              </p>
            </div>
          </div>
          {/* Caja 2 y 3: Mission & Video (Ahora unidas en un gran contenedor) */}
          <div className="lg:col-span-9 flex flex-col lg:flex-row items-center justify-between bg-white/5 backdrop-blur-xl border border-white/10 rounded-[28px] p-8 lg:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-600/20 blur-[100px]"></div>

            <div className="flex flex-col space-y-6 max-w-md text-center lg:text-left z-10">
              <p className="text-purple-400 font-mono text-sm tracking-[0.3em] uppercase opacity-80">
                // ARCHIVE_01: MISSION
              </p>
              <h2 className="text-white text-3xl lg:text-4xl font-black leading-[0.9] tracking-tighter uppercase italic">
                NEXUS is a decentralized ecosystem for digital pioneers.
              </h2>
              <p className="text-zinc-400 text-[15px] leading-relaxed font-light">
                A hybrid sanctuary where high-performance networking meets edge
                computing. We bridge the gap between visionary talent and the
                infrastructure of the next era.
              </p>
            </div>

            {/* Video con estilo "Security Feed" */}
            <div className="relative mt-8 lg:mt-0 group">
              <div className="absolute -top-4 -left-4 z-20 bg-purple-600 text-[8px] font-black px-2 py-1 rounded uppercase tracking-widest">
                Live_Feed
              </div>
              <div className="absolute -inset-2 bg-purple-500/30 rounded-2xl blur-xl opacity-40 animate-pulse group-hover:opacity-60 transition-opacity"></div>
              <div className="relative rounded-xl overflow-hidden bg-black border border-white/20 shadow-2xl w-full sm:w-[320px]">
                <iframe
                  src="https://www.youtube.com/embed/cWJV0DgMqEA?rel=0&start=10021&controls=0"
                  className="w-full h-[200px] object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* inicio sección */}
        {/* <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="hidden sm:hidden lg:flex flex-col items-center justify-around gradient bg-cover bg-center bg-no-repeat rounded-[28px] h-[500px] w-full p-6 shadow-2xl border border-gray-800 relative overflow-hidden ">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleFormVisibility();
              }}
              className="z-10 "
            >
              <p className="text-white text-[28px] font-bold leading-tight tracking-tighter uppercase italic">
                Join to the crew
              </p>
            </a>
            {Array.from({ length: 5 }).map((_, i) => (
              <Plus key={i} />
            ))}
          </div>

          <div className="lg:flex lg:flex-row lg:items-center lg:justify-center lg:space-x-8 max-w-full lg:max-w-7xl mx-auto p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[28px] w-[720px] m-w-[720px] shadow-inner relative overflow-hidden ">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-600/20 blur-[100px]"></div>

            <div className="flex flex-col space-y-4 mx-auto justify-center lg:justify-stretch text-center lg:text-left z-10">
              <p className="text-purple-400 font-mono text-sm tracking-[0.3em] uppercase opacity-80">
                // ARCHIVE_01: MISSION
              </p>
              <h2 className="text-white text-[28px] font-bold leading-tight tracking-tighter uppercase italic">
                NEXUS is a decentralized ecosystem for digital pioneers.
              </h2>
              <p className="text-zinc-400 text-[15px] leading-relaxed font-light">
                A hybrid sanctuary where high-performance networking meets edge
                computing. We bridge the gap between visionary talent and the
                infrastructure of the next era.
              </p>
            </div>

            <div className="lg:flex flex items-center justify-center GradientRight relative mt-5">
              <div className="absolute -inset-2 bg-purple-500/30 rounded-2xl blur-xl opacity-40 animate-pulse"></div>
              <div className="relative rounded-xl overflow-hidden w-auto h-auto bg-black border border-white/20 shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/cWJV0DgMqEA?rel=0&start=10021"
                  allow="autoplay encrypted-media"
                  allowFullScreen
                  className="w-[300px] h-[200px] object-cover rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-500"
                ></iframe>
              </div>
            </div>
          </div>
        </section>  */}
        {/* fin sección */}
      </div>
    </div>
  );
};

export default Membership;
