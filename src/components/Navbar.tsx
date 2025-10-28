import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoAirbus from "../assets/branding/logoAirBusSantiago.png";

function NavItem({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-3 py-2 rounded-lg text-sm font-medium transition ${
          isActive ? "text-cyan-400" : "text-gray-300 hover:text-white"
        }`
      }
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="bg-black/60 backdrop-blur border-b border-zinc-800 sticky top-0 z-50 shadow-[0_2px_8px_rgba(0,0,0,0.5)]">

      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-[80px]">

        {/* Logo / Nombre Taller */}
        <Link
        to="/"
        className="flex items-center gap-2 flex-shrink-0"
        onClick={closeMenu}
        >
        <img
        src={logoAirbus}
        alt="AIR BUS SANTIAGO"
        // className="h-[7.8rem] sm:h-[3.6rem] xs:h-[3.2rem] w-auto object-contain -translate-y-[1px]"
        className="h-[7.8rem] w-auto object-contain -translate-y-[1px]"
        />
        </Link>


        {/* Desktop links */}
        <ul className="hidden sm:flex gap-6 text-sm">
          <li>
            <NavItem to="/" onClick={closeMenu}>
              Inicio
            </NavItem>
          </li>
          <li>
            <NavItem to="/servicios" onClick={closeMenu}>
              Servicios
            </NavItem>
          </li>
          <li>
            <NavItem to="/agendar" onClick={closeMenu}>
              Agendar
            </NavItem>
          </li>
          <li>
            <NavItem to="/contacto" onClick={closeMenu}>
              Contacto
            </NavItem>
          </li>
        </ul>

        {/* Botón acción rápida (desktop) */}
        <Link
          to="/agendar"
          className="hidden sm:inline-block bg-cyan-400 text-black font-semibold text-sm px-4 py-2 rounded-xl hover:bg-white transition"
          onClick={closeMenu}
        >
          Reserva
        </Link>

        {/* Botón hamburguesa (mobile) */}
        <button
          className="sm:hidden inline-flex items-center justify-center rounded-lg border border-zinc-700 text-gray-200 w-10 h-10 hover:bg-zinc-800 hover:text-white transition"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <div className="flex flex-col gap-[5px]">
            <span className="block w-5 h-[2px] bg-current"></span>
            <span className="block w-5 h-[2px] bg-current"></span>
            <span className="block w-5 h-[2px] bg-current"></span>
          </div>
        </button>
      </nav>

      {/* Menú móvil desplegable */}
      {open && (
        <div className="sm:hidden border-t border-zinc-800 bg-black/90 backdrop-blur">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-2">
            <NavItem to="/" onClick={closeMenu}>
              Inicio
            </NavItem>
            <NavItem to="/servicios" onClick={closeMenu}>
              Servicios
            </NavItem>
            <NavItem to="/agendar" onClick={closeMenu}>
              Agendar
            </NavItem>
            <NavItem to="/contacto" onClick={closeMenu}>
              Contacto
            </NavItem>

            <Link
              to="/agendar"
              onClick={closeMenu}
              className="mt-4 w-full text-center bg-cyan-400 text-black font-semibold text-sm px-4 py-2 rounded-xl hover:bg-white transition"
            >
              Reserva tu hora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
