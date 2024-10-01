import React from 'react'
import HeaderAdmin from '../components/HeadersAdmin';
import Footers from '../components/Footers';
import SearchAdmin from '../components/SearchAdmin';

export default function page() {
  return (
    <>
      <HeaderAdmin />
      <main>
        <div className="flex w-full">
          <div className="sidebar w-1/4 h-[450vh] border-r-2">
            <div className="flex justify-center gap-3 items-center">
              <a
                href="/maintenance"
                className="flex justify-center mt-10 gap-3 items-center"
              >
                <img src="chat.svg" alt="asd" width={30} />
                <p>Data Maintenance</p>
              </a>
            </div>
            <div className="flex justify-center gap-3 items-center">
              <a
                href="/report"
                className="flex justify-center mt-10 gap-3 items-center"
              >
                <img src="gear.svg" alt="asd" width={30} />
                <p>Data Report</p>
              </a>
            </div>
            <a href="/admin">
              <p className="text-center mt-16">Logout</p>
            </a>
          </div>
          <div className="kanan w-3/4">
            <p className="text-2xl font-bold text-center mt-5">
              Dokumentasi Web Admin Mata Air Senjoyo
            </p>
            <div className="flex items-center gap-7 w-[70%] mx-auto">
              <img src="/assets/logo.png" />
              <div className="w-[5px] h-[400px] bg-black"></div>
              <p className="text-[45px] font-medium">
                MATA AIR SENJOYO SELAMANYA LEBIH BAIK!
              </p>
            </div>
            <p className="text-2xl text-center w-11/12 mx-auto">
              Wisata Sumber Air merupakan salah satu potensi wisata di Desa
              Tegalwaton. Keindahan pemandangan serta sejuknya udara dapat
              menarik banyak wisatawan untuk berkunjung ke tempat ini. Air yang
              dihasilkan menjadi sumber kehidupan bagi masyarakat sekitar. Umbul
              Senjoyo menjadi salah satu sumber mata air terbesar yang telah
              dimanfaatkan menjadi pemandian dan sumber air baku Kota Salatiga.
              Sumber mata air yang terletak di Dusun Jubug ini memiliki legenda
              yang tersohor yaitu Legenda Jaka Tingkir dimana petilasan Jaka
              Tingkir berada di bukit yang mengelilingi pemandian Senjoyo.
            </p>
            <p className="text-3xl font-bold mt-10 text-center">
              Panduan menggunakan website Mata Air Senjoyo sebagai Admin
            </p>
            <p className="text-2xl font-semibold ml-10 mt-10">
              Tujuan dan Sasaran
            </p>
            <ul className="list-disc ml-16">
              <li>Mengelola website Mata Air Senjoyo agar lebih optimal</li>
              <li>
                Sasaran dari tujuan tersebut adalah mencapai hasil maksimal dari
                kinerja website ini.
              </li>
            </ul>
            <p className="text-2xl font-semibold ml-10 mt-10">
              Struktur dan Konten websiter Admin
            </p>
            <SearchAdmin />

            <p className='mt-10 text-2xl font-semibold ml-10'>
              Logo Mata Air Senjoyo pada bagian atas bisa digunakan untuk
              kembali ke Dashboard Admin
            </p>
          </div>
        </div>
      </main>
      <Footers />
    </>
  );
}
