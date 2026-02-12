'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { MapPin, Star, ArrowUpRight, Globe } from 'lucide-react'; // Iconos más modernos
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Carousel = () => {
  const galleries = [
    {
      mainImage: 'GRX.jpg',

      title: 'Blackbox 1.2',

      location: 'Rijksmuseum, Amsterdam, Netherlands',

      description:
        'Explore the mysteries of art in a setting that intertwines history with modernity.',

      thumbnails: ['GRX1.jpg', 'GRX2.jpg', 'GRX3.avif', 'GRX4.avif'],

      icon1Url: '/',

      icon2Url: 'google.com/1',
    },

    {
      mainImage: 'GRX1.jpg',

      title: 'Northern Lights',

      location: 'Tromsø, Troms, Norway',

      description:
        'A night under the Northern Lights, where art meets the arctic.',

      thumbnails: ['GRX2.jpg', 'GRX1.jpg', 'GRX3.avif', 'GRX4.avif'],

      icon1Url: '/',

      icon2Url: 'google.com/2',
    },

    {
      mainImage: 'GRX2.jpg',
      title: 'Lollapalooza',
      location: 'Hipódromo San Isidro, Buenos Aires, Argentina',
      description:
        "A night of pure electronic dance music energy in Argentina's most iconic monumental.",
      thumbnails: ['GRX2.jpg', 'GRX1.jpg', 'GRX3.avif', 'GRX4.avif'],
      icon1Url: '/',
      icon2Url: 'google.com/3',
    },

    {
      mainImage: 'GRX3.avif',
      title: "Artisan's Dream",
      location: 'STMPD RCDRS, Barcelona, Spain',
      description:
        'Witness the fusion of architecture and art in a city that celebrates creativity.',
      thumbnails: ['GRX2.jpg', 'GRX1.jpg', 'GRX3.avif', 'GRX4.avif'],

      icon1Url: '/',
      icon2Url: 'google.com/4',
    },

    {
      mainImage: 'GRX4.avif',
      title: 'Gondola Nights',
      location: 'Sena River, Paris, France',
      description:
        'An exclusive night by the canals, where romance and history blend beautifully.',
      thumbnails: ['GRX2.jpg', 'GRX1.jpg', 'GRX3.avif', 'GRX4.avif'],
      icon1Url: '/',
      icon2Url: 'google.com/5',
    },

    {
      mainImage: 'GRX5.jpg',
      title: 'Cristo Redentor',
      location: 'Saó Paolo, Brazil',
      description:
        'A night of luxury and elegance in the tallest building in the world.',
      thumbnails: ['GRX2.jpg', 'GRX1.jpg', 'GRX3.avif', 'GRX4.avif'],
      icon1Url: '/',
      icon2Url: 'google.com/6',
    },

    {
      mainImage: 'GRX6.jpg',
      title: 'Tomorrowland',
      location: 'Boom, Belgium',
      description:
        'Experience winter like never before in a magical setting by Lake Geneva.',
      thumbnails: ['GRX2.jpg', 'GRX1.jpg', 'GRX3.avif', 'GRX4.avif'],
      icon1Url: '/',
      icon2Url: 'google.com/7',
    },
  ];

  return (
    <div className="w-full p-4 lg:p-0 lg:w-[85%] mt-20 lg:mt-32 mx-auto">
      {/* Desktop / Tablet View */}
      <div className="hidden md:block">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="main-carousel w-full h-[600px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
        >
          {galleries.map((gallery, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full group">
                <img
                  src={gallery.mainImage}
                  alt={gallery.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay Gradiente Crypto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Tag de Localización Flotante */}
                <div className="absolute top-8 left-8">
                  <div className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-xl">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <p className="text-xs font-mono uppercase tracking-widest text-white/90">
                      {gallery.location}
                    </p>
                  </div>
                </div>

                {/* Contenido Principal */}
                <div className="absolute bottom-12 left-12 z-10 max-w-2xl">
                  <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter italic uppercase">
                    {gallery.title}
                  </h2>
                  <p className="text-lg text-zinc-300 font-light leading-relaxed backdrop-blur-sm bg-black/10 p-2 rounded-lg">
                    {gallery.description}
                  </p>
                </div>

                {/* Botones de Acción Estilo Glass-Crypto */}
                <div className="absolute bottom-12 right-12 flex gap-4">
                  <a
                    href={gallery.icon1Url}
                    className="group/btn relative overflow-hidden flex justify-center items-center bg-white/5 hover:bg-purple-600/20 backdrop-blur-xl border border-white/10 transition-all duration-300 rounded-2xl w-20 h-20 shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    <Star className="w-8 h-8 text-white group-hover/btn:text-purple-400 transition-colors" />
                  </a>
                  <a
                    href={gallery.icon2Url}
                    className="group/btn relative overflow-hidden flex justify-center items-center bg-white/5 hover:bg-purple-600/20 backdrop-blur-xl border border-white/10 transition-all duration-300 rounded-2xl w-20 h-20 shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    <ArrowUpRight className="w-8 h-8 text-white group-hover/btn:text-purple-400 transition-colors" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        <Swiper spaceBetween={20} slidesPerView={1} className="w-full">
          {galleries.map((gallery, idx) => (
            <SwiperSlide key={idx}>
              <MobileGallery {...gallery} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const MobileGallery = ({
  mainImage,
  title,
  location,
  description,
  icon1Url,
  icon2Url,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full h-[550px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
        <img
          src={mainImage}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Overlay más oscuro en la base para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

        {/* Contenedor de Iconos Mobile (Esquina superior derecha) */}
        <div className="absolute top-6 right-6 flex flex-col gap-4 z-20">
          {/* Botón 1: Favorito/Star */}
          <a
            href={icon1Url}
            className="p-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl active:scale-90 transition-transform shadow-lg"
          >
            <Star className="w-6 h-6 text-white" />
          </a>

          {/* Botón 2: Link Externo */}
          <a
            href={icon2Url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl active:scale-90 transition-transform shadow-lg"
          >
            <ArrowUpRight className="w-6 h-6 text-white" />
          </a>
        </div>

        {/* Información en la parte inferior */}
        <div className="absolute bottom-0 left-0 w-full p-8 text-white z-10">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-purple-400" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-200/80">
              {location}
            </span>
          </div>

          <h2 className="text-4xl font-black mb-3 tracking-tighter italic uppercase leading-none">
            {title}
          </h2>

          <p className="text-sm text-zinc-400 leading-relaxed font-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
