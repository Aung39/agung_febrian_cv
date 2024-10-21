import RowRiwayat from "./rowRiwayat";

export default function RiwayatPendidikan() {
  return (
    <div className="container mx-auto p-2 text-center">
      <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2xl">Riwayat Pendidikan</h2>
      </div>
      <RowRiwayat level="SD" name="SDN 02 Mandalasari" year="2011 - 2017" />
      <RowRiwayat level="SMP" name="SMPN 1 Cikancung" year="2017 - 2019" />
      <RowRiwayat
        level="SMK (TKJ)"
        name="SMK Bhakti Ilham"
        year="2019 - 2022"
      />
      <RowRiwayat
        level="Prodi Sistem Informasi"
        name="Ma'soem University"
        year="2022 - Sekarang"
      />
    </div>
  );
}
