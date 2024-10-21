import foto from "/app/foto.jpg";

export default function Hero() {
  return (
    <div className="text-center">
      <h1 className="text-gray-300 font-bold">CV online</h1>
      <h2 className="text-3xl">Agung Febrian</h2>
      <Profile />
      <p>
        Saya adalah seorang Web Developer. Cita cita saya ingin menjadi
        Programmer Internasional.{" "}
      </p>
    </div>
  );
}

function Profile() {
  return <img src={foto.src} alt="Agung Febrian" className="fotoku" />;
}
