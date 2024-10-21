import React from "react";

export default function RowPekerjaan(props: any) {
  return (
    <div className="border-2 border-green-500/75 rounded-lg bg-gray-800 p-2 my-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-3">{props.company}</div>
          <div className="col-span-12 md:col-span-3">{props.position}</div>
          <div className="col-span-12 md:col-span-3">{props.year}</div>
        </div>
      </div>
    </div>
  );
}
