'use client';

import React, { useState } from 'react';
import '../styles/Membership.css';
import Counter from './Counter';
import {
  Share2,
  Zap,
  ShieldCheck,
  Coins,
  Info,
  ChevronDown,
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
  const [isFormVisible, setFormVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');

  const toggleFormVisibility = () => {
    setFormVisible((prev) => !prev);
  };

  return (
    <>
      <div className="p-4 lg:px-[80px] pt-11 max-w-screen-xl mx-auto">
        {/* inicio sección */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Primer contenedor - Izquierda */}
          <div className="hidden sm:hidden lg:flex flex-col items-center justify-around gradient bg-cover bg-center bg-no-repeat rounded-[28px] h-[500px] w-full p-6 shadow-2xl border border-gray-800 relative overflow-hidden ">
            {/* Contenedor de Icono Modernizado */}
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

          {/* Segundo contenedor - Centro */}
          <div className="lg:flex lg:flex-row lg:items-center lg:justify-center lg:space-x-8 max-w-full lg:max-w-7xl mx-auto p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[28px] w-[720px] m-w-[720px] shadow-inner relative overflow-hidden ">
            {/* Rayo de luz decorativo de fondo */}
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

            {/* Tercer contenedor - Derecha (Video) */}
            <div className="lg:flex flex items-center justify-center GradientRight relative mt-5">
              {/* Glow externo del video */}
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
        </section>
        {/* fin sección */}

        {/* Advantages */}
        <div id="membership"></div>
        <section className="advantages mt-32 p-1 lg:pt-10 relative">
          {/* Decoración de fondo: Un resplandor púrpura difuso detrás de la sección */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:w-[500px] lg:h-[500px] bg-purple-600/10 blur-[120px] pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-euclid font-black text-white text-center mb-4 tracking-tighter uppercase italic">
              Nexus{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">
                Core Advantages
              </span>
            </h2>

            <p className="text-zinc-500 text-center text-sm md:text-base tracking-[0.2em] uppercase mb-16 font-mono">
              // PROTOCOL_BENEFITS: ACTIVATED
            </p>

            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-4 max-w-7xl mx-auto px-4">
              {[
                {
                  title: 'Neural Connect',
                  description:
                    'Encrypted networking within our private high-frequency channels.',
                  icon: <Share2 className="w-8 h-8 text-purple-400" />,
                },
                {
                  title: 'Meta-Summits',
                  description:
                    'Priority access to hybrid physical and digital global events.',
                  icon: <Zap className="w-8 h-8 text-fuchsia-400" />,
                },
                {
                  title: 'Syndicate Perks',
                  description:
                    'Exclusive benefits and early access with our tech partners.',
                  icon: <ShieldCheck className="w-8 h-8 text-purple-400" />,
                },
                {
                  title: 'Asset Rewards',
                  description:
                    'Digital and physical recognition within the Nexus ecosystem.',
                  icon: <Coins className="w-8 h-8 text-fuchsia-400" />,
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="
                  group relative flex flex-col items-center justify-center 
                  w-full aspect-square p-4 md:p-6 lg:p-8 bg-white/5 
                  backdrop-blur-xl border border-white/10 rounded-[2rem] md:rounded-[2.5rem] 
                  transition-all duration-500 hover:bg-white/10 hover:border-purple-500/50 
                  hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                >
                  {/* Brillo interno al hacer hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]"></div>

                  <div className="mb-6 relative">
                    {/* Efecto de resplandor detrás del icono */}
                    <div className="absolute inset-0 blur-lg bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                      {card.icon}
                    </div>
                  </div>

                  <h3
                    className="
                    text-[16px] 
                    md:text-sm 
                    lg:text-lg 
                    font-bold 
                  text-white 
                    text-center 
                    leading-tight 
                    mb-1                    
                    uppercase 
                    tracking-tight"
                  >
                    {card.title}
                  </h3>

                  <p
                    className="
                    text-center 
                    text-[11px] 
                    md:text-sm 
                    lg:text-xs 
                   text-gray-400 
                    leading-relaxed 
                    px-2 
                    font-light 
                   group-hover:text-purple-200 
                    transition-colors"
                  >
                    {card.description}
                  </p>

                  {/* Indicador visual de esquina técnica */}
                  <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </section>
          </div>
        </section>
        {/* End Advantages */}

        <div className="pb-14" id="waitlist"></div>
        {/* Main Section */}
        {/* Form & Counter Section */}
        <div className="pb-14" id="waitlist"></div>
        <section className="relative overflow-hidden bg-zinc-950 border border-purple-500/20 rounded-[3rem] text-white px-6 py-12 m-2 lg:px-24 mt-14 shadow-2xl">
          <div className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none bg-[url('/GRX4.avif')]"></div>

          <h2 className="relative z-10 text-3xl md:text-4xl font-black text-center mb-12 uppercase italic">
            Synchronize with{' '}
            <span className="text-purple-500">Nexus Protocol</span>
          </h2>

          <div
            className={`${
              isFormVisible
                ? 'grid lg:grid-cols-2 gap-10 bg-purple-900/40 backdrop-blur-xl'
                : 'grid-rows-1 md:grid-cols-2 lg:grid-rows-2 gap-6'
            } relative z-10 p-6 lg:p-10 rounded-[2.5rem] transition-all duration-1000 ease-in-out`}
          >
            {isFormVisible && (
              <div className="flex flex-col gap-6 animate-fadeIn">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Selectors responsivos */}
                  <div className="flex flex-col gap-2 relative">
                    <label className="text-[10px] uppercase text-purple-300 font-bold ml-1">
                      Origin Country
                    </label>
                    <div className="relative">
                      <select
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        className="w-full text-sm p-3 bg-black/40 border border-white/10 rounded-xl text-white outline-none focus:border-purple-500 appearance-none cursor-pointer"
                      >
                        <option value="" disabled selected>
                          Select Country
                        </option>
                        {Object.keys(locationData).map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 relative">
                    <label className="text-[10px] uppercase text-purple-300 font-bold ml-1">
                      Neural Node (City)
                    </label>
                    <div className="relative">
                      <select
                        disabled={!selectedCountry}
                        className="w-full p-3 bg-black/40 text-sm border border-white/10 rounded-xl text-white outline-none focus:border-purple-500 appearance-none disabled:opacity-30"
                      >
                        <option disabled selected>
                          {selectedCountry
                            ? 'Select City'
                            : 'Choose Country First'}
                        </option>
                        {selectedCountry &&
                          locationData[selectedCountry].map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="md:col-span-2 flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-purple-300 ml-1 font-bold">
                      Identity Name
                    </label>
                    <input
                      type="text"
                      placeholder="Full name"
                      className="p-3 bg-black/40 border text-sm border-white/10 rounded-xl text-white placeholder-white/20 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                      required
                    />
                  </div>

                  {/* 2. CORREO ELECTRÓNICO (Ocupa 2 cuadros y está abajo del nombre) */}
                  <div className="md:col-span-2 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-purple-300 ml-1 font-bold">
                        Neural Email
                      </label>
                      <div className="group relative">
                        <Info className="w-3 h-3 text-white/40 cursor-help" />
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 p-2 bg-black text-[9px] text-white rounded border border-purple-500/50 backdrop-blur-md z-50 shadow-2xl">
                          Protocol access keys and security updates will be sent
                          here.
                        </span>
                      </div>
                    </div>
                    <input
                      type="email"
                      placeholder="nexus@network.io"
                      className="p-3 bg-black/40 border text-sm border-white/10 rounded-xl text-white placeholder-white/20 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="md:col-span-2 flex flex-col gap-2">
                    <label className="text-[10px] uppercase text-purple-300 font-bold ml-1">
                      Protocol Vision
                    </label>
                    <textarea
                      placeholder="Your vision..."
                      className="p-3 bg-black/40 border text-sm border-white/10 rounded-xl text-white placeholder-white/20 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                    ></textarea>
                  </div>

                  <button className="md:col-span-2 text-[10px] bg-purple-600 font-black uppercase tracking-widest py-4 rounded-2xl hover:bg-purple-500 transition-all">
                    Transmit Application
                  </button>
                </form>
              </div>
            )}

            {/* Contadores */}
            <div
              className={`${
                isFormVisible
                  ? 'flex flex-col gap-6'
                  : 'grid grid-cols-1 lg:grid-cols-2 gap-6'
              }`}
            >
              {/* Bloque 1: Annual Quota */}
              <div
                className={`relative group text-[40px] md:text-[60px] font-bold bg-white/5 backdrop-blur-md rounded-[2rem] p-8 text-center border border-white/10 transition-all duration-300 mb-0 
    ${
      isFormVisible
        ? 'lg:animate-diagonal digital-blur'
        : 'lg:animate-diagonalClose digital-clear'
    }`}
              >
                <div className="relative z-10">
                  <Counter endValue={1000} duration={2000} />
                  <p className="text-[10px] uppercase tracking-widest text-purple-300 font-mono">
                    // Annual Quota
                  </p>
                </div>
              </div>

              {/* Bloque 2: Neural Entities */}
              <div
                className={`relative group text-[40px] md:text-[60px] font-bold bg-white/5 backdrop-blur-md rounded-[2rem] p-8 text-center border border-white/10 transition-all transition-all duration-300 
    ${
      isFormVisible
        ? 'lg:animate-diagonal80k digital-blur'
        : 'lg:animate-diagonalClose80k digital-clear'
    }`}
              >
                <div className="relative z-10">
                  <Counter endValue={80000} duration={1500} showPlus={true} />
                  <p className="text-[10px] uppercase tracking-widest mt-4 text-purple-300 font-mono">
                    // Neural Entities
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex justify-center mt-6">
            <button
              onClick={toggleFormVisibility}
              className={`
    /* Estructura Base: Limpia y centrada en el texto */
    relative overflow-hidden px-12 py-4 rounded-full 
    font-black uppercase text-[10px] tracking-[0.4em] 
    transition-all duration-500 group border shadow-2xl
    
    /* Lógica de Estados: Vidrio Oscuro vs Sólido Minimalista */
    ${
      isFormVisible
        ? 'bg-white/5 backdrop-blur-md text-red-500 border-red-500/20 hover:bg-red-500/10 hover:border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.1)]'
        : 'bg-white text-black border-white hover:bg-purple-600 hover:text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]'
    }
  `}
            >
              {/* Efecto Shimmer (Luz de escaneo) que recorre el texto al hacer hover */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none"></div>

              {/* Texto centralizado con espaciado extra para look técnico */}
              <span className="relative z-10 block text-center w-full">
                {isFormVisible ? '[ ABORT_MISSION ]' : 'JOIN THE PROTOCOL'}
              </span>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Membership;
