import React from "react";
import Headers from "../components/Headers";
import Footers from "../components/Footers";

export default function page() {
  return (
    <>
      <Headers />
      <main className="w-11/12 mx-auto h-[70vh]">
        <p className="text-[48px] font-bold ml-10 mt-10">FAQ</p>
        <div className="my-5 border rounded-2xl p-3">
          <p className="font-bold text-xl ml-5">Apa itu Mata Air Senjaya</p>
          <div className="rounded border-b-2"></div>
          <p className="text-lg ml-5">
            Mata Air Senjaya adalah salah satu destinasi wisata alam yang
            terletak di Kabupaten Senjaya, Jawa Barat. Mata air ini dikenal
            dengan air jernih dan panorama alam yang indah.
          </p>
        </div>
        <div className="my-5 border rounded-2xl p-3">
          <p className="font-bold text-xl ml-5">
            Berapa harga tiket masuk Mata Air Senjaya?
          </p>
          <div className="rounded border-b-2"></div>
          <p className="text-lg ml-5">
            Harga tiket masuk Mata Air Senjaya adalah Rp. 5.000 untuk per
            tiketnya.
          </p>
        </div>
        <div className="my-5 border rounded-2xl p-3">
          <p className="font-bold text-xl ml-5">
            Bagaimana cara membeli tiket masuk Mata Air Senjaya?
          </p>
          <div className="rounded border-b-2"></div>
          <p className="text-lg ml-5">
            Tiket masuk Mata Air Senjaya dapat dibeli secara online melalui
            website resmi kami. Pengunjung juga dapat membeli tiket di loket
            tiket di lokasi.
          </p>
        </div>
        <div className="my-5 border rounded-2xl p-3">
          <p className="font-bold text-xl ml-5">
            Apakah hewan peliharaan diperbolehkan masuk?
          </p>
          <div className="rounded border-b-2"></div>
          <p className="text-lg ml-5">
            Hewan peliharaan diperbolehkan masuk ke area Mata Air Senjaya, namun
            pengunjung diminta untuk menjaga kebersihan dan keamanan area.
          </p>
        </div>
        <div className="my-5 border rounded-2xl p-3 mb-10">
          <p className="font-bold text-xl ml-5">
            Kapan waktu operasional Mata Air Senjaya?
          </p>
          <div className="rounded border-b-2"></div>
          <p className="text-lg ml-5">
            Mata Air Senjaya buka setiap hari dari pukul 07.00 - 17.00 WIB.
          </p>
        </div>
      </main>
      <Footers />
    </>
  );
}
