import { useState } from "react";

export default function Agendar() {
  const [nombre, setNombre] = useState("");
  const [patente, setPatente] = useState("");
  const [problema, setProblema] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!nombre.trim() || !patente.trim() || !problema.trim()) {
      setError("Por favor completa todos los campos.");
      return;
    }

    setError("");

    // armamos el mensaje que va a llegar a tu WhatsApp
    const mensaje = `Hola, soy ${nombre}.
Patente: ${patente}.
Problema: ${problema}.
Vengo desde la web.`;

    const encoded = encodeURIComponent(mensaje);

    // tu número real
    const phone = "56962458897";

    // armamos el link wa.me
    const link = `https://wa.me/${phone}?text=${encoded}`;

    // redirigimos al cliente al WhatsApp
    window.open(link, "_blank");

    // limpiamos campos para que el formulario quede limpio si vuelve atrás
    setNombre("");
    setPatente("");
    setProblema("");
  }

  return (
    <main className="px-6 py-16 max-w-lg mx-auto">
      <h2 className="text-3xl font-semibold text-cyan-400 text-center">
        Reserva tu hora
      </h2>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-5 bg-zinc-800/60 p-6 rounded-xl border border-zinc-700 shadow-lg"
      >
        {error && (
          <div className="bg-red-500/20 text-red-400 text-sm font-medium px-4 py-2 rounded-lg border border-red-500/40">
            {error}
          </div>
        )}

        <div>
          <label className="block text-sm text-gray-300 mb-1">
            Nombre<span className="text-red-500">*</span>
          </label>
          <input
            className="w-full rounded-lg bg-black/40 border border-zinc-600 text-white px-4 py-2 outline-none focus:border-cyan-400"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">
            Patente<span className="text-red-500">*</span>
          </label>
          <input
            className="w-full rounded-lg bg-black/40 border border-zinc-600 text-white px-4 py-2 outline-none focus:border-cyan-400 uppercase"
            placeholder="ABCJ12"
            value={patente}
            onChange={(e) => setPatente(e.target.value.toUpperCase())}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">
            Problema<span className="text-red-500">*</span>
          </label>
          <textarea
            className="w-full rounded-lg bg-black/40 border border-zinc-600 text-white px-4 py-2 outline-none focus:border-cyan-400 min-h-[80px]"
            placeholder="El aire no enfría, suena el compresor, sale olor extraño, etc."
            value={problema}
            onChange={(e) => setProblema(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-white transition"
        >
          Enviar por WhatsApp
        </button>

        <p className="text-center text-xs text-gray-500 leading-relaxed">
          Te abriremos WhatsApp y nos llegará tu solicitud con los datos del
          problema. Te respondemos lo antes posible.
        </p>

        <p className="text-center text-[10px] text-gray-600">
          Horario de atención: Lun-Sáb 09:00 - 19:00
        </p>
      </form>
    </main>
  );
}
