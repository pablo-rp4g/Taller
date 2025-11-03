export default function Servicios() {
  return (
    <main className="px-6 py-16 max-w-5xl mx-auto">
      {/* TÍTULO PRINCIPAL */}
      <header className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-cyan-400">
          Servicios de climatización automotriz
        </h1>
        <p className="text-gray-300 text-base mt-4 leading-relaxed">
          En AIR BUS SANTIAGO nos dedicamos 100% al aire acondicionado del auto:
          recarga, diagnóstico, reparación y limpieza del sistema para que el aire
          salga frío, sin olor y sin ruidos raros.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="/agendar"
            className="bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-white transition text-sm text-center"
          >
            Agenda diagnóstico
          </a>
          <a
            href="https://wa.me/56952097567?text=Hola%20necesito%20consultar%20por%20el%20servicio%20de%20aire%20acondicionado%20del%20auto"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-black font-semibold px-6 py-3 rounded-xl hover:bg-white transition text-sm text-center"
          >
            WhatsApp directo
          </a>
        </div>

        <p className="text-[11px] text-zinc-500 mt-4">
          Lun-Sáb · 09:00 a 19:00 · Santiago
        </p>
      </header>

      {/* BLOQUES DE SERVICIO */}
      <section className="mt-16 grid gap-10">
        {/* RECARGA A/C */}
        <article className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-white flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
            <span className="text-cyan-400">Recarga de gas A/C</span>
            <span className="text-xs text-zinc-400 font-normal">
              Aire sale tibio / no enfría
            </span>
          </h2>

          <p className="text-gray-300 text-sm mt-4 leading-relaxed">
            Si el aire ya no sopla frío, puede estar bajo de gas refrigerante.
            Nosotros medimos presiones con manómetros, revisamos fugas y
            recargamos el gas correcto. Nada de “meterle gas a ojo”.
          </p>

          <ul className="text-zinc-400 text-sm mt-4 space-y-2">
            <li>• Medición de presión baja y alta</li>
            <li>• Búsqueda de fuga (visual / aceite / ojalillos)</li>
            <li>• Carga de refrigerante según especificación del vehículo</li>
            <li>• Revisión rendimiento en cabina (salida en °C)</li>
          </ul>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm">
            <p className="text-cyan-400 font-semibold">
              Ideal si: "Antes enfriaba, ahora ya no."
            </p>

            <a
              href="/agendar"
              className="inline-block bg-cyan-400 text-black font-semibold px-4 py-2 rounded-xl hover:bg-white transition text-center"
            >
              Quiero recargar
            </a>
          </div>
        </article>

        {/* DIAGNÓSTICO / RUIDO / COMPRESOR NO PRENDE */}
        <article className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-white flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
            <span className="text-cyan-400">Diagnóstico del sistema A/C</span>
            <span className="text-xs text-zinc-400 font-normal">
              Compresor no activa / ruido / aire intermitente
            </span>
          </h2>

          <p className="text-gray-300 text-sm mt-4 leading-relaxed">
            ¿El compresor no engancha? ¿Se escucha un ruido metálico cuando prendes
            el aire? ¿A veces enfría y a veces no? Hacemos diagnóstico eléctrico
            y mecánico del sistema, no solo “recarguemos y vemos”.
          </p>

          <ul className="text-zinc-400 text-sm mt-4 space-y-2">
            <li>• Revisión de compresor y embrague</li>
            <li>• Revisión de correas / poleas</li>
            <li>• Revisión fusibles / relés del A/C</li>
            <li>• Scan básico de fallas relacionadas (según vehículo)</li>
          </ul>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm">
            <p className="text-cyan-400 font-semibold">
              Ideal si: "Aprieto A/C y no pasa nada."
            </p>

            <a
              href="/agendar"
              className="inline-block bg-cyan-400 text-black font-semibold px-4 py-2 rounded-xl hover:bg-white transition text-center"
            >
              Revisar mi auto
            </a>
          </div>
        </article>

        {/* LIMPIEZA / MAL OLOR */}
        <article className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-white flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
            <span className="text-cyan-400">Limpieza de ductos y olor</span>
            <span className="text-xs text-zinc-400 font-normal">
              "Sale olor feo cuando prendo el aire"
            </span>
          </h2>

          <p className="text-gray-300 text-sm mt-4 leading-relaxed">
            El mal olor viene de hongos y humedad en el evaporador / ductos.
            Hacemos limpieza y sanitización para sacar olor a guardado,
            olor a humedad o “olor raro” dentro del auto.
          </p>

          <ul className="text-zinc-400 text-sm mt-4 space-y-2">
            <li>• Tratamiento en evaporador</li>
            <li>• Sanitización del sistema de ventilación</li>
            <li>• Revisión y cambio de filtro de cabina (si aplica)</li>
            <li>• Eliminación de olor sin perfumar encima</li>
          </ul>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm">
            <p className="text-cyan-400 font-semibold">
              Ideal si: "Cada vez que enciendo el aire, huele horrible."
            </p>

            <a
              href="/agendar"
              className="inline-block bg-cyan-400 text-black font-semibold px-4 py-2 rounded-xl hover:bg-white transition text-center"
            >
              Quiero sacar el olor
            </a>
          </div>
        </article>

        {/* CAMBIO / REPARACIÓN DE COMPRESOR */}
        <article className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-white flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
            <span className="text-cyan-400">Reparación / cambio de compresor</span>
            <span className="text-xs text-zinc-400 font-normal">
              Ruido fuerte / quema fusible / aire murió de golpe
            </span>
          </h2>

          <p className="text-gray-300 text-sm mt-4 leading-relaxed">
            Si el compresor está dañado, forzarlo puede romper más cosas
            (y encarecer la reparación). Te confirmamos si se puede salvar,
            si conviene reparar o si hay que reemplazar.
          </p>

          <ul className="text-zinc-400 text-sm mt-4 space-y-2">
            <li>• Retiro y evaluación del compresor</li>
            <li>• Revisión de polea/embrague</li>
            <li>• Revisión de metal / limalla en el circuito</li>
            <li>• Asesoría honesta: reparar vs. reemplazar</li>
          </ul>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm">
            <p className="text-cyan-400 font-semibold">
              Ideal si: "Hizo un ruido feo y dejó de enfriar al tiro."
            </p>

            <a
              href="https://wa.me/56952097567?text=Hola%20mi%20compresor%20hace%20ruido%20y%20ya%20no%20enfr%C3%ADa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-black font-semibold px-4 py-2 rounded-xl hover:bg-white transition text-center"
            >
              Enviar audio del ruido
            </a>
          </div>
        </article>
      </section>

      {/* LLAMADO FINAL */}
      <section className="mt-20 text-center max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-white">
          ¿No estás seguro qué servicio necesitas?
        </h2>
        <p className="text-gray-300 text-sm mt-4 leading-relaxed">
          No te preocupes. Con que nos cuentes el síntoma (no enfría, huele mal,
          hace ruido, no prende el compresor) te orientamos sin compromiso.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="/agendar"
            className="bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-white transition text-sm text-center"
          >
            Agendar revisión
          </a>
          <a
            href="https://wa.me/56952097567?text=Hola%20tengo%20un%20problema%20con%20mi%20aire%20acondicionado%20del%20auto%20y%20no%20s%C3%A9%20qu%C3%A9%20es"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-black font-semibold px-6 py-3 rounded-xl hover:bg-white transition text-sm text-center"
          >
            Háblame por WhatsApp
          </a>
        </div>

        <p className="text-[11px] text-zinc-500 mt-4">
          Respuesta rápida dentro de horario de trabajo.
        </p>
      </section>
    </main>
  );
}
