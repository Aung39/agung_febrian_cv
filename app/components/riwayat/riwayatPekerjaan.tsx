import React from "react";
import RowPekerjaan from "./rowPekerjaan";

export default function RiwayatPekerjaan() {
  return (
    <div className="container mx-auto p-2 text-center">
      <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2xl">Riwayat Pekerjaan</h2>
      </div>
      <RowPekerjaan
        company="StartUp XYZ"
        position="Frontend Developer Intern"
        year="2020 - 2021"
      />
      <RowPekerjaan
        company="PT Teknologi Modern"
        position="Software Engineer"
        year="2021 - 2022"
      />
      <RowPekerjaan
        company="PT Maju Mundur"
        position="Junior Developer"
        year="2022 - 2023"
      />
      <RowPekerjaan
        company="CV Kreatif"
        position="Web Developer"
        year="2023 - Sekarang"
      />
    </div>
  );
}
