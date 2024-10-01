import React from "react";
import Headers from "../components/Headers";
import Footers from "../components/Footers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Tiket",
};

const page = () => {
  return (
    <>
      <Headers />
      <main className="w-1/2 mx-auto">
        <p className="font-bold text-[24px] text-center mt-10 ">
          Terima kasih telah melakukan pembelian tiket, ini adalah tiket anda
          dan akan segera dilakukan pengiriman melalui email.
        </p>
        <div className="w-1/2 bg-[#d9d9d9] mt-10 mx-auto rounded-[20px]">
          <div className="flex flex-row justify-between p-4">
            <div className="mt-10">
              <p>ID Tiket</p>
              <p className="font-bold text-[20px]">78129837651</p>
            </div>
            <img src="/assets/logo.png" className="w-[180px]" />
          </div>
          <div className="w-[70%] mx-auto">
            <p className="text-[20px]">Detail Pesanan</p>
            <p className="text-[20px] font-bold mt-5">Mata Air Senjoyo, Salatiga</p>
            <ul className="list-disc mt-5 flex flex-col gap-5">
              <li>5 Juni 2024</li>
              <li>3 Tiket</li>
              <li>08.00 WIB</li>
            </ul>
            <p className="font-bold mt-10">Nama akun Pemesan</p>
            <p className="font-medium mt-7 mb-10 pb-10">Genesy Matthew - 08211236127366</p>
          </div>
        </div>
        <a href="/">
          <p className="text-center p-5 bg-[#d9d9d9] w-1/2 mx-auto mb-10 rounded-[30px] hover:bg-[#5b5b5b] hover:text-white text-[24px] font-semibold">Kembali Ke Beranda</p>
        </a>
      </main>
      <Footers />
    </>
  );
};

export default page;
