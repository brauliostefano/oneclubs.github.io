'use client'; // Importante si usas Next.js App Router
import React, { useState } from 'react'; // Faltaba el useState
import {
  Zap,
  ShieldCheck,
  Globe,
  Activity,
  Info,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import Counter from './Counter'; // Asegurate de que la ruta sea correcta

// Faltaba definir el objeto de locaciones
const locationData = {
  Norway: ['Oslo', 'Bergen', 'Tromsø', 'Stavanger'],
  Argentina: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza'],
  Netherlands: ['Amsterdam', 'Rotterdam', 'Utrecht'],
  Spain: ['Barcelona', 'Madrid', 'Valencia'],
  'United States': ['New York', 'Los Angeles', 'Miami'],
  Mexico: ['CDMX', 'Guadalajara', 'Monterrey', 'Cancún'],
  Sweden: ['Stockholm', 'Gothenburg', 'Malmö', 'Uppsala'],
};

const Plur = () => {
  // Nombre capitalizado
  const [isFormVisible, setFormVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');

  const toggleFormVisibility = () => {
    setFormVisible((prev) => !prev);
  };

  return (
    <div>
      {/* Advantages */}
      <section
        id="plur"
        className="p-4 lg:px-[80px] py-24 max-w-screen-xl mx-auto font-sans"
      >
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic">
            The{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">
              PLUR Protocol
            </span>
          </h2>
          <p className="text-zinc-500 text-[10px] tracking-[0.5em] uppercase font-mono mt-4">
            // CORE_VALUES : SYSTEM_INTEGRATION
          </p>
        </div>

        {/* GRID: 2x2 en Mobile/Tablet, 1x4 en Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {/* P - PEACE: Global Synergy */}
          <div className="group relative aspect-square flex flex-col p-5 md:p-8 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] transition-all duration-700 hover:border-blue-500/40 hover:-translate-y-2 overflow-hidden">
            <span className="absolute -bottom-4 -right-2 text-[80px] md:text-[180px] font-black text-blue-500/[0.05] leading-none pointer-events-none transition-colors">
              P
            </span>
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <Globe
                  size={24}
                  className="text-blue-400 group-hover:scale-110 transition-transform"
                />
                <span className="text-[10px] font-mono text-blue-400/50 uppercase tracking-widest">
                  01
                </span>
              </div>
              {/* Título PLUR Explícito */}
              <h3 className="text-lg md:text-2xl font-black text-white uppercase italic leading-none">
                Peace
              </h3>
              <p className="text-blue-400/80 text-[10px] md:text-xs font-bold uppercase tracking-tighter mb-2">
                // Global Synergy
              </p>
              <p className="text-zinc-400 text-[9px] md:text-xs leading-tight md:leading-relaxed font-light mb-auto">
                Direct connection between Buenos Aires and the global festival
                circuit.
              </p>
            </div>
          </div>

          {/* L - LOVE: Field Intel */}
          <div className="group relative aspect-square flex flex-col p-5 md:p-8 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] transition-all duration-700 hover:border-purple-500/40 hover:-translate-y-2 overflow-hidden">
            <span className="absolute -bottom-4 -right-2 text-[80px] md:text-[180px] font-black text-purple-500/[0.05] leading-none pointer-events-none transition-colors">
              L
            </span>
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <Activity
                  size={24}
                  className="text-purple-400 group-hover:scale-110 transition-transform"
                />
                <span className="text-[10px] font-mono text-purple-400/50 uppercase tracking-widest">
                  02
                </span>
              </div>
              {/* Título PLUR Explícito */}
              <h3 className="text-lg md:text-2xl font-black text-white uppercase italic leading-none">
                Love
              </h3>
              <p className="text-purple-400/80 text-[10px] md:text-xs font-bold uppercase tracking-tighter mb-2">
                // Field Intel
              </p>
              <p className="text-zinc-400 text-[9px] md:text-xs leading-tight md:leading-relaxed font-light mb-auto">
                High-resolution production data and visual synchronization.
              </p>
            </div>
          </div>

          {/* U - UNITY: Tactical Logistics */}
          <div className="group relative aspect-square flex flex-col p-5 md:p-8 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] transition-all duration-700 hover:border-fuchsia-500/40 hover:-translate-y-2 overflow-hidden">
            <span className="absolute -bottom-4 -right-2 text-[80px] md:text-[180px] font-black text-fuchsia-500/[0.05] leading-none pointer-events-none transition-colors">
              U
            </span>
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <Zap
                  size={24}
                  className="text-fuchsia-400 group-hover:scale-110 transition-transform"
                />
                <span className="text-[10px] font-mono text-fuchsia-400/50 uppercase tracking-widest">
                  03
                </span>
              </div>
              {/* Título PLUR Explícito */}
              <h3 className="text-lg md:text-2xl font-black text-white uppercase italic leading-none">
                Unity
              </h3>
              <p className="text-fuchsia-400/80 text-[10px] md:text-xs font-bold uppercase tracking-tighter mb-2">
                // Tactical Logistics
              </p>
              <p className="text-zinc-400 text-[9px] md:text-xs leading-tight md:leading-relaxed font-light mb-auto">
                Optimized travel protocols for the global nomad.
              </p>
            </div>
          </div>

          {/* R - RESPECT: Priority Access */}
          <div className="group relative aspect-square flex flex-col p-5 md:p-8 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] transition-all duration-700 hover:border-red-500/40 hover:-translate-y-2 overflow-hidden">
            <span className="absolute -bottom-4 -right-2 text-[80px] md:text-[180px] font-black text-red-500/[0.05] leading-none pointer-events-none transition-colors">
              R
            </span>
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <ShieldCheck
                  size={24}
                  className="text-red-400 group-hover:scale-110 transition-transform"
                />
                <span className="text-[10px] font-mono text-red-400/50 uppercase tracking-widest">
                  04
                </span>
              </div>
              {/* Título PLUR Explícito */}
              <h3 className="text-lg md:text-2xl font-black text-white uppercase italic leading-none">
                Respect
              </h3>
              <p className="text-red-400/80 text-[10px] md:text-xs font-bold uppercase tracking-tighter mb-2">
                // Priority Access
              </p>
              <p className="text-zinc-400 text-[9px] md:text-xs leading-tight md:leading-relaxed font-light mb-auto">
                Exclusive community-only event credentials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Counter Section */}
      <section className="relative overflow-hidden bg-zinc-950 border border-purple-500/20 rounded-[3rem] text-white px-6 py-12 m-6 lg:m-9 lg:px-24 mt-14 shadow-2xl">
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
  );
};

export default Plur;
