export default function Contacto() {
  // Tus datos reales
  const direccion = "Abtao 46, Estación Central";
  const whatsappLink =
    "https://wa.me/56962458897?text=Hola%20quiero%20cotizar%20servicio%20de%20aire%20acondicionado%20para%20mi%20auto";

  return (
    <main className="px-6 py-16 max-w-5xl mx-auto">
      {/* Encabezado */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-cyan-400">
          Contáctanos
        </h2>

        <p className="text-gray-300 mt-4 leading-relaxed text-sm">
          Escríbenos por WhatsApp, ven directo al taller o agenda la revisión
          de tu aire acondicionado. Respondemos dentro del horario laboral.
        </p>

        <p className="text-[11px] text-zinc-500 mt-2">
          Lun-Sáb · 09:00 a 19:00 · AIR BUS SANTIAGO
        </p>
      </div>

      {/* Sección dos columnas */}
      <section className="mt-12 grid gap-8 md:grid-cols-2">
        {/* Tarjeta: Información */}
        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 shadow-lg flex flex-col">
          <h3 className="text-white font-semibold text-lg">
            Información de contacto
          </h3>

          <ul className="mt-4 text-sm text-gray-300 space-y-3">
            <li>
              <span className="text-cyan-400 font-semibold">WhatsApp:</span>{" "}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-white transition font-semibold"
              >
                +56 9 6245 8897
              </a>
            </li>

            <li>
              <span className="text-cyan-400 font-semibold">Dirección:</span>{" "}
              <span className="text-gray-300">{direccion}</span>
            </li>

            <li>
              <span className="text-cyan-400 font-semibold">Horario:</span>{" "}
              <span className="text-gray-300">
                Lunes a Sábado, 09:00 - 19:00
              </span>
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 text-sm">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-green-500 text-black font-semibold px-4 py-2 rounded-xl hover:bg-white transition"
            >
              Escríbeme al WhatsApp
            </a>

            <a
              href="/agendar"
              className="flex-1 text-center bg-cyan-400 text-black font-semibold px-4 py-2 rounded-xl hover:bg-white transition"
            >
              Agendar revisión
            </a>
          </div>

          <p className="text-[11px] text-zinc-500 mt-6 leading-relaxed">
            ¿No enfría el aire? ¿Sale olor feo? ¿Suena el compresor?
            Mándanos un audio describiendo el problema y la patente del auto
            y te orientamos.
          </p>
        </div>

        {/* Tarjeta: Ubicación + mapa */}
        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 shadow-lg flex flex-col">
          <h3 className="text-white font-semibold text-lg">
            ¿Dónde estamos?
          </h3>

          <p className="text-gray-300 text-sm mt-4 leading-relaxed">
            Te atendemos en taller físico en Estación Central,
            en Abtao 46. Ideal avisar antes para no esperar.
          </p>

          <div className="rounded-lg overflow-hidden border border-zinc-700 bg-zinc-800 mt-6">
            {/* Mapa embed sin API key */}
            <iframe
              className="w-full h-64 md:h-[300px]"
              src="https://www.google.com/maps?q=Abtao+46,+Estaci%C3%B3n+Central,+Chile&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="text-[11px] text-zinc-500 mt-4 leading-relaxed">
            Si el aire dejó de enfriar de un día para otro,
            <span className="text-white font-semibold"> no sigas forzando el compresor</span>.
            Puede romper más piezas internas y encarecer la reparación.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="text-center mt-16">
        <h4 className="text-white font-semibold text-lg">
          ¿Quieres confirmar disponibilidad hoy?
        </h4>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-black font-semibold px-6 py-3 rounded-xl hover:bg-white transition text-sm mt-4"
        >
          Preguntar por WhatsApp
        </a>

        <p className="text-[11px] text-zinc-600 mt-4 leading-relaxed max-w-md mx-auto">
          Atendemos primero a quienes agendan o avisan. Si llegas directo al
          taller y estamos justo con otro vehículo, podrías tener que esperar.
        </p>
      </section>
    </main>
  );
}
