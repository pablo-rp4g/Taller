export default function Footer() {
  const direccion = "Abtao 46, Estación Central";

  return (
    <footer className="mt-20 border-t border-zinc-800 bg-black/60 text-gray-500 text-xs">
      <div className="max-w-6xl mx-auto px-6 py-10 grid sm:grid-cols-2 gap-8">
        <div>
          <p className="text-white font-semibold text-sm">
            AIR BUS SANTIAGO
          </p>
          <p className="mt-2">
            Climatización y mantenimiento automotriz profesional.
          </p>
          <p className="text-cyan-400 mt-2 font-semibold">
            Aire acondicionado automotriz • Diagnóstico • Mantención
          </p>
        </div>

        <div className="text-sm">
          <p>📞 WhatsApp: +56 9 6245 8897</p>
          <p>📍 {direccion}</p>
          <p>🕒 Lun-Sáb 09:00 - 19:00</p>
        </div>
      </div>

      <div className="text-center border-t border-zinc-800 py-4 text-[10px] text-zinc-600">
        © {new Date().getFullYear()} AIR BUS SANTIAGO. Todos los derechos reservados.
      </div>
    </footer>
  );
}
