import "./agung_style.css";
import Hero from "./components/hero/hero";
import RiwayatPendidikan from "./components/riwayat/riwayatPendidikan";
import RiwayatPekerjaan from "./components/riwayat/riwayatPekerjaan";
import FavColor from "./components/favColor";
import ContactForm from "./components/contactMe";

export default function Gallery() {
  return (
    <section>
      {/* <FavColor /> */}
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <ContactForm />
    </section>
  );
}
