import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/swiper.css";

// Tus imágenes reales
import foto1 from "/t-1.jpg";
import foto2 from "/t-2.jpg";
import foto3 from "../../public/t-3.jpg";
import foto4 from "../../public/t-4.jpg";
import foto5 from "../../public/t-5.jpg";
import foto6 from "../../public/t-6.jpg";
import foto7 from "../../public/t-7.jpg";
import foto8 from "../../public/t-8.jpg";
import foto9 from "../../public/t-9.jpg";
import foto10 from "../../public/t-10.jpg";
import foto11 from "../../public/t-11.jpg";
import foto12 from "../../public/t-12.jpg";
import foto13 from "../../public/t-13.jpg";
import foto14 from "../../public/t-14.jpg";
import foto15 from "../../public/t-15.jpg";
import foto16 from "../../public/t-16.jpg";
import foto17 from "../../public/t-17.jpg";
import foto18 from "../../public/t-18.jpg";
import foto19 from "../../public/t-16.jpg";
import foto20 from "../../public/t-17.jpg";
import foto21 from "/t-18.jpg";

export default function Home() {
  // índice de la foto abierta en el lightbox o null si cerrado
  const [fotoIndex, setFotoIndex] = useState<number | null>(null);

  const fotos = [
    {
      src: foto1,
      titulo: "Recarga A/C",
      desc: "Manómetros conectados. Ajuste de gas y prueba de presión.",
    },
    {
      src: foto2,
      titulo: "Compresor",
      desc: "Compresor retirado para inspección del embrague.",
    },
    {
      src: foto3,
      titulo: "Limpieza de ductos",
      desc: "Sanitización interna para eliminar olor a humedad.",
    },
    {
      src: foto4,
      titulo: "Evaporador sucio",
      desc: "Acumulación de hongos y mugre que causa mal olor.",
    },
    {
      src: foto5,
      titulo: "Evaporador limpio",
      desc: "Sistema respirando aire limpio y sin olor.",
    },
    {
      src: foto6,
      titulo: "Diagnóstico A/C",
      desc: "Revisión de fugas y rendimiento en cabina.",
    },
    {
      src: foto7,
      titulo: "Diagnóstico A/C",
      desc: "Revisión de fugas y rendimiento en cabina.",
    },
    {
      src: foto8,
      titulo: "Diagnóstico A/C",
      desc: "Revisión de fugas y rendimiento en cabina.",
    },
    {
      src: foto9,
      titulo: "Diagnóstico A/C",
      desc: "Revisión de fugas y rendimiento en cabina.",
    },
    {
      src: foto10,
      titulo: "Diagnóstico A/C",
      desc: "Revisión de fugas y rendimiento en cabina.",
    },
    {
      src: foto11,
      titulo: "Diagnóstico A/C",
      desc: "Revisión de fugas y rendimiento en cabina.",
    },
    {
      src: foto12,
      titulo: "Diagnóstico A/C",
      desc: "Revisión de fugas y rendimiento en cabina.",
    },
    {
      src: foto13,
      titulo: "Diagnóstico A/C",
      desc: "Revisión de fugas y rendimiento en cabina.",
    },
    {
      src: foto14,
      titulo: "Diagnóstico A/C",
      desc: "Revisión de fugas y rendimiento en cabina.",
    },
    {
      src: foto15,
      titulo: "Diagnóstico A/C",
      desc: "Revisión de fugas y rendimiento en cabina.",
    },
    {
      src: foto16,
      titulo: "Diagnóstico A/C",
      desc: "Revisión de fugas y rendimiento en cabina.",
    },
    {
      src: foto17,
      titulo: "Diagnóstico A/C",
      desc: "Revisión de fugas y rendimiento en cabina.",
    },
    {
      src: foto18,
      titulo: "Diagnóstico A/C",
      desc: "Revisión de fugas y rendimiento en cabina.",
    },
    {
      src: foto19,
      titulo: "Diagnóstico A/C",
      desc: "Revisión de fugas y rendimiento en cabina.",
    },
    {
      src: foto20,
      titulo: "Diagnóstico A/C",
      desc: "Revisión de fugas y rendimiento en cabina.",
    },
        {
      src: foto21,
      titulo: "Diagnóstico A/C",
      desc: "Revisión de fugas y rendimiento en cabina.",
    },
  ];

  function cerrarLightbox() {
    setFotoIndex(null);
  }

  function siguiente() {
    if (fotoIndex === null) return;
    setFotoIndex((fotoIndex + 1) % fotos.length);
  }

  function anterior() {
    if (fotoIndex === null) return;
    setFotoIndex((fotoIndex - 1 + fotos.length) % fotos.length);
  }

  return (
    <>
      {/* HERO */}
      <section className="px-6 py-16 text-center bg-gradient-to-b from-zinc-900 to-black">
        <h1 className="text-4xl font-extrabold text-cyan-400 tracking-tight">
          AIR BUS SANTIAGO
        </h1>

        <p className="text-lg text-gray-300 mt-4 max-w-xl mx-auto leading-relaxed">
          Climatización automotriz y mantenimiento profesional.
          Recupera el frío del aire acondicionado de tu vehículo,
          diagnóstico rápido y servicio garantizado.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a
            href="https://wa.me/56952097567?text=Hola%20quiero%20agendar%20una%20revisión%20de%20aire%20acondicionado"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-white transition text-sm"
          >
            Agendar
          </a>

          <a
            href="https://wa.me/56952097567?text=Hola%20necesito%20servicio%20de%20aire%20acondicionado%20para%20mi%20auto"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-black font-semibold px-6 py-3 rounded-xl hover:bg-white transition text-sm"
          >
            WhatsApp directo
          </a>
        </div>

        <p className="text-[11px] text-zinc-500 mt-6">
          Recarga de gas A/C • Revisión compresor • Limpieza de ductos • Mantención completa
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className="px-6 py-16 max-w-5xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
        <div className="bg-zinc-800/40 border border-zinc-700 rounded-xl p-6 shadow-lg">
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wide">
            Aire Frío Garantizado
          </p>
          <p className="text-gray-300 text-sm mt-3">
            Recuperamos el rendimiento del aire acondicionado para un viaje cómodo.
          </p>
        </div>

        <div className="bg-zinc-800/40 border border-zinc-700 rounded-xl p-6 shadow-lg">
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wide">
            Diagnóstico Rápido
          </p>
          <p className="text-gray-300 text-sm mt-3">
            Revisamos fugas, presión y compresor. Te explicamos el problema en simple.
          </p>
        </div>

        <div className="bg-zinc-800/40 border border-zinc-700 rounded-xl p-6 shadow-lg">
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wide">
            Servicio Profesional
          </p>
          <p className="text-gray-300 text-sm mt-3">
            Trabajo especializado en climatización automotriz. No adivinamos: medimos.
          </p>
        </div>
      </section>

      {/* GALERÍA / TRABAJOS RECIENTES */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl font-bold text-white">Trabajos recientes</h2>
            <p className="text-sm text-zinc-400 mt-1 max-w-md">
              Aire acondicionado automotriz, sanitización de ductos, detección de fugas
              y cambio de compresor. Trabajo real hecho en taller, no fotos de catálogo.
            </p>
          </div>
        </div>

        <div className="relative w-full">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="overflow-visible"
          >
            {fotos.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden shadow-lg flex flex-col">
                  <div className="aspect-video bg-zinc-800 overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.titulo}
                      onClick={() => setFotoIndex(i)}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wide">
                      {item.titulo}
                    </p>
                    <p className="text-white font-medium text-sm mt-1">
                      {item.desc}
                    </p>
                    <p className="text-zinc-400 text-[11px] mt-2 leading-relaxed">
                      AIR BUS SANTIAGO · Estación Central
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* LIGHTBOX con navegación */}
          {fotoIndex !== null && (
            <div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-[1000] p-4"
              onClick={cerrarLightbox}
            >
              <div
                className="relative max-w-4xl w-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* cerrar */}
                <button
                  onClick={cerrarLightbox}
                  className="absolute top-2 right-2 bg-black/70 text-white rounded-full p-2 hover:bg-cyan-400 hover:text-black transition text-sm"
                >
                  ✕
                </button>

                {/* anterior */}
                <button
                  onClick={anterior}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-cyan-400 text-white hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.78 19.28a.75.75 0 01-1.06 0l-7-7a.75.75 0 010-1.06l7-7a.75.75 0 111.06 1.06L9.81 12l5.97 5.97a.75.75 0 010 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* imagen grande */}
                <img
                  src={fotos[fotoIndex].src}
                  alt={fotos[fotoIndex].titulo}
                  className="w-full h-auto max-h-[80vh] rounded-lg shadow-lg border border-zinc-700 object-contain"
                />

                {/* siguiente */}
                <button
                  onClick={siguiente}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-cyan-400 text-white hover:text-black w-10 h-10 rounded-full flex items-center justify-center transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.22 4.72a.75.75 0 011.06 0l7 7a.75.75 0 010 1.06l-7 7a.75.75 0 11-1.06-1.06L14.19 12 8.22 6.03a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* descripción */}
                <div className="absolute -bottom-12 left-0 right-0 text-center text-zinc-400 text-xs leading-relaxed">
                  <p className="text-white font-medium">
                    {fotos[fotoIndex].titulo}
                  </p>
                  <p className="text-zinc-400">{fotos[fotoIndex].desc}</p>
                  <p className="text-[10px] text-zinc-600 mt-1">
                    AIR BUS SANTIAGO · Estación Central
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Flechas carrusel (afuera de las fotos, responsive) */}
          <button
            className="custom-prev absolute top-1/2 -left-16 md:-left-16 sm:-left-10 left-0 transform -translate-y-1/2 bg-black/50 hover:bg-cyan-400 text-cyan-400 hover:text-black w-12 h-12 rounded-full flex items-center justify-center transition sm:w-10 sm:h-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 sm:w-5 sm:h-5"
            >
              <path
                fillRule="evenodd"
                d="M15.78 19.28a.75.75 0 01-1.06 0l-7-7a.75.75 0 010-1.06l7-7a.75.75 0 111.06 1.06L9.81 12l5.97 5.97a.75.75 0 010 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <button
            className="custom-next absolute top-1/2 -right-16 md:-right-16 sm:-right-10 right-0 transform -translate-y-1/2 bg-black/50 hover:bg-cyan-400 text-cyan-400 hover:text-black w-12 h-12 rounded-full flex items-center justify-center transition sm:w-10 sm:h-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 sm:w-5 sm:h-5"
            >
              <path
                fillRule="evenodd"
                d="M8.22 4.72a.75.75 0 011.06 0l7 7a.75.75 0 010 1.06l-7 7a.75.75 0 11-1.06-1.06L14.19 12 8.22 6.03a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}
