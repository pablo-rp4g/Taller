export default function WhatsappButton() {
  const phone = "56952097567";
  const text = encodeURIComponent(
    "Hola, necesito servicio de aire acondicionado para mi auto."
  );
  const link = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-4 right-4 z-50 bg-green-500 text-black font-semibold rounded-full px-5 py-3 text-sm shadow-lg hover:bg-white transition flex items-center gap-2 animate-pulse-smooth"
>
  {/* Ícono + texto compacto */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-5 h-5 fill-current text-black"
  >
    <path d="M16.001 3C9.374 3 4 8.374 4 15.001c0 2.64.82 5.097 2.377 7.208L4 29l7.04-2.332A11.898 11.898 0 0016 27c6.627 0 12.001-5.374 12.001-11.999C28.001 8.374 22.627 3 16.001 3zm0 22.063c-1.87 0-3.695-.501-5.29-1.45l-.379-.224-4.173 1.383 1.362-4.08-.247-.42a9.925 9.925 0 01-1.498-5.371C5.775 9.253 10.387 4.64 16 4.64c5.612 0 10.224 4.613 10.224 10.226 0 5.613-4.612 10.197-10.223 10.197z" />
    <path d="M21.318 19.382c-.329-.164-1.938-.956-2.239-1.066-.301-.11-.52-.165-.739.164-.219.33-.848 1.066-1.04 1.285-.191.219-.383.247-.712.083-.329-.165-1.389-.512-2.647-1.63-.978-.87-1.639-1.943-1.831-2.272-.191-.33-.021-.51.144-.675.147-.147.33-.383.493-.574.164-.191.219-.33.329-.548.11-.219.055-.41-.027-.575-.083-.164-.739-1.785-1.013-2.446-.266-.639-.538-.553-.739-.563-.191-.009-.41-.011-.629-.011-.219 0-.575.083-.876.41-.301.33-1.149 1.122-1.149 2.732 0 1.61 1.176 3.165 1.339 3.383.165.219 2.314 3.527 5.61 4.942 3.296 1.415 3.296.944 3.895.884.6-.055 1.938-.785 2.214-1.541.274-.755.274-1.4.192-1.541-.083-.137-.301-.219-.63-.383z" />
  </svg>

  <span className="text-black font-semibold">WhatsApp</span>
</a>
  );
}
