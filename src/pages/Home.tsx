import ac1 from "../assets/ac-manometros.jpg";
import ac2 from "../assets/antes-compresor.jpg";
import ac3 from "../assets/desinfectando-evaporador.jpg";

export default function Home() {
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
            href="/agendar"
            className="bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-white transition text-sm"
          >
            Reserva tu hora
          </a>

          <a
            href="https://wa.me/56962458897?text=Hola%20necesito%20servicio%20de%20aire%20acondicionado%20para%20mi%20auto"
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
            <h2 className="text-2xl font-bold text-white">
              Trabajos recientes
            </h2>
            <p className="text-sm text-zinc-400 mt-1 max-w-md">
              Aire acondicionado automotriz, sanitización de ductos,
              detección de fugas y cambio de compresor. Trabajo real hecho en taller,
              no fotos de catálogo.
            </p>
          </div>

          <a
            href="/agendar"
            className="inline-block bg-cyan-400 text-black font-semibold text-sm px-4 py-2 rounded-xl hover:bg-white transition text-center"
          >
            Agenda tu diagnóstico
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* CARD 1 */}
          <div className="bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden shadow-lg flex flex-col">
            <div className="aspect-video bg-zinc-800 overflow-hidden">
              <img
                src={ac1}
                alt="Recarga y medición de presión del A/C"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wide">
                Recarga A/C
              </p>
              <p className="text-white font-medium text-sm mt-1">
                Manómetros conectados, ajuste de gas refrigerante.
              </p>
              <p className="text-zinc-400 text-xs mt-2 leading-relaxed">
                Cliente llegó sin frío en cabina. Se detectó baja presión y fuga lenta.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden shadow-lg flex flex-col">
            <div className="aspect-video bg-zinc-800 overflow-hidden">
              <img
                src={ac2}
                alt="Compresor de aire acondicionado retirado"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wide">
                Compresor
              </p>
              <p className="text-white font-medium text-sm mt-1">
                Compresor retirado para inspección y reemplazo.
              </p>
              <p className="text-zinc-400 text-xs mt-2 leading-relaxed">
                Ruido metálico y vibración. Se confirmó desgaste interno.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden shadow-lg flex flex-col">
            <div className="aspect-video bg-zinc-800 overflow-hidden">
              <img
                src={ac3}
                alt="Limpieza y sanitización de ductos de aire"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wide">
                Limpieza de ductos
              </p>
              <p className="text-white font-medium text-sm mt-1">
                Eliminación de olor y sanitización del evaporador.
              </p>
              <p className="text-zinc-400 text-xs mt-2 leading-relaxed">
                Eliminamos olor a humedad dentro de la cabina del cliente.
              </p>
            </div>
          </div>
        </div>

        <p className="text-[11px] text-zinc-600 text-center mt-10 leading-relaxed max-w-lg mx-auto">
          ¿El aire sale tibio, huele feo o hace ruido el compresor?
          Tráelo a AIR BUS SANTIAGO. Revisamos presión, fugas y
          rendimiento térmico en el acto.
        </p>
      </section>
    </>
  );
}
