import React from "react";
import Headers from "../components/Headers";
import Footers from "../components/Footers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detail Pesanan",
};

const page = () => {
  return (
    <>
      <Headers />
      <main className="w-[80%] mx-auto mt-[50px]">
        <p className="text-[40px] font-bold my-[50px]">Detail Pesanan</p>
        <div className="bg-[#d9d9d9] px-[100px] py-[50px] flex flex-col gap-[20px] rounded-[20px]">
          <p className="opacity-40 font-bold text-[20px]">Nama</p>
          <p className="font-[500] text-[30px]">GENESY MATTHEW WIBOWO</p>
          <p className="opacity-40 font-bold text-[20px]">Email</p>
          <p className="font-[500] text-[30px]">genesy_matthew@gmail.com</p>
          <p className="opacity-40 font-bold text-[20px]">No Telepon</p>
          <p className="font-[500] text-[30px]">082245970690</p>
          <div className="flex flex-row gap-4 items-center bg-white p-5 rounded">
            <img src="alerthitam.svg" className="h-[50px]" alt="" />
            <p className="text-[30px] font-[500]">
              Informasi tiket dan konfirmasi akan dikirim detail ke kontak anda
              yang sudah tertera.
            </p>
          </div>
        </div>
        <p className="text-[40px] font-bold mt-[50px]">Pembayaran</p>
        <div className="mt-[30px] flex flex-row gap-10 w-full mb-10">
          <div className="w-1/2 bg-[#d9d9d9] p-10 rounded-[20px]">
            <div className="flex flex-row gap-5 border-2 border-solid border-[#1F99DE] rounded p-3 mb-10">
              <img src="alertbiru.svg" alt="asdasd" className="ml-10" />
              <p>Instruksi pembayaran telah dikirim ke email anda</p>
            </div>
            <div className="flex flex-row items-center gap-5 mb-10">
              <p className="bg-[#5b5b5b] py-1 px-2 rounded text-white font-semibold text-[20px]">
                1
              </p>
              <p className="text-[20px] font-bold">
                Selesaikan Pembayaran Sebelum
              </p>
            </div>
            <div className="border-2 border-solid border-[#5b5b5b] rounded p-3">
              <p className="ml-5">Sekarang 12.00</p>
              <p className="ml-5">
                Selesaikan pembayaran dalam 30 menit 00 detik
              </p>
            </div>
            <div className="flex flex-row items-center gap-5 mb-10 mt-10">
              <p className="bg-[#5b5b5b] py-1 px-2 rounded text-white font-semibold text-[20px]">
                2
              </p>
              <p className="text-[20px] font-bold">Mohon Transfer ke:</p>
            </div>
            <div className="border-2 rounded border-[#5b5b5b] mb-10">
              <div className="flex flex-row gap-2 border-b-2 rounded p-3 border-[#5b5b5b]">
                <img src="segitiga.svg" alt="" />
                <p>Mohon pilih online transfer sebagai tipe transfer anda</p>
              </div>
              <div className="flex flex-col gap-5 ml-5">
                <p className="mt-10">Bank Central Asia (BCA)</p>
                <p>Nomor Rekening : &ensp; 7850913492</p>
                <p>Nama Rekening : &ensp; PT. Air Mata Senjoyo Indonesia</p>
                <p className="mb-10">
                  Jumlah Transfer : &ensp;{" "}
                  <span className="font-extrabold">Rp. 15.000,00</span>
                </p>
              </div>
            </div>
            <a href="/etiket">
              <p className="w-[150px] text-[25px] text-center mx-auto bg-[#5b5b5b] text-white rounded hover:bg-white hover:text-[#5b5b5b]">
                Verifikasi
              </p>
            </a>
          </div>
          <div className="w-1/2 bg-[#d9d9d9] p-10 rounded-[20px] flex flex-col justify-center">
            <div className="p-10 border-b-2 border-solid border-[#5b5b5b] rounded">
              <p>NO. PESANAN</p>
              <p className="font-[700] mt-2 text-[20px]">78129837651</p>
            </div>
            <div className="p-10 border-b-2 border-solid border-[#5b5b5b] rounded">
              <p className="text-[20px]">Rincian Pesanan</p>
              <p className="font-bold mt-2 text-[20px]">
                Mata Air Senjoyo, Salatiga
              </p>
              <ul className="list-disc">
                <li className="text-[20px]">5 Juni 2024</li>
                <li className="text-[20px]">3 Tiket</li>
                <li className="text-[20px]">08.00 WIB</li>
              </ul>
            </div>
            <div className="p-10 border-b-2 border-solid border-[#5b5b5b] rounded">
              <p className="text-[20px]">Nama Akun Pemesan</p>
              <p className="text-[20px]">Genesy Matthew - 08211236127366</p>
            </div>
          </div>
        </div>
      </main>
      <Footers />
    </>
  );
};

export default page;
