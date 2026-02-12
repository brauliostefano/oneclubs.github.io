'use client';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Función para cerrar el menú al hacer click en un link
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: 'Membership', href: '#membership' },
    { name: 'News', href: '#news' },
    { name: 'Events', href: '#events' },
  ];

  return (
    <header className="fixed top-6 w-full z-50 px-4 flex justify-center">
      <nav
        className={`
                relative transition-all duration-500 ease-in-out
                flex items-center justify-between
                backdrop-blur-xl bg-zinc-900/60 border-2 border-gray-900
                shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]
                rounded-[2rem] px-6 py-3
                ${
                  menuOpen
                    ? 'w-full max-w-[350px] flex-col rounded-[2.5rem] py-8'
                    : 'w-full max-w-[1120px] flex-row'
                }
            `}
      >
        {/* Logo / Branding */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <a href="/" className="group flex items-center space-x-3">
            <div className="w-9 h-9 bg-gradient-to-tr from-purple-600 to-fuchsia-500 rounded-full flex items-center justify-center border border-white/20 group-hover:rotate-[360deg] transition-transform duration-700">
              <span className="text-white font-black text-sm">N</span>
            </div>
            <span className="text-white font-bold tracking-[0.15em] uppercase text-sm lg:text-base">
              NEXUS <span className="font-light opacity-">Protocol</span>
            </span>
          </a>

          {/* Botón Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          >
            {menuOpen ? (
              <XMarkIcon className="w-7 h-7" />
            ) : (
              <Bars3Icon className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Links de Navegación */}
        <ul
          className={`
                    ${
                      menuOpen
                        ? 'flex flex-col items-center mt-8 space-y-8 animate-fadeIn'
                        : 'hidden md:flex'
                    }
                    md:flex-row md:mt-0 md:space-x-12 md:space-y-0
                    text-white font-medium transition-all
                `}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="text-sm uppercase tracking-widest hover:text-purple-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Espaciador para balance visual en Desktop */}
        <div className="hidden md:block w-9 h-9" />
      </nav>
    </header>
  );
};

export default Navbar;
