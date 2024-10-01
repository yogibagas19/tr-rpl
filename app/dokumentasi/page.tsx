import React from "react";

import Headers from "../components/Headers";
import Footers from "../components/Footers";
import Search from "../components/Search";


const page = () => {

  return (
    <>
      <Headers />
      <p className="text-center text-[30px] font-[700] mt-[50px]">
        Dokumentasi Website Mata Air Senjoyo
      </p>
      <div className="w-[60%] flex mx-auto items-center gap-[50px]">
        <img src="/assets/logo.png" alt="asdf" />
        <div className="w-[8px] h-[400px] bg-black"></div>
        <p className="text-[45px]">MENJELAJAH KEINDAHAN MATA AIR SENJOYO</p>
      </div>
      <p className="w-[70%] mx-auto text-[25px]">
        Wisata Sumber Air merupakan salah satu potensi wisata di Desa
        Tegalwaton. Keindahan pemandangan serta sejuknya udara dapat menarik
        banyak wisatawan untuk berkunjung ke tempat ini. Air yang dihasilkan
        menjadi sumber kehidupan bagi masyarakat sekitar. Umbul Senjoyo menjadi
        salah satu sumber mata air terbesar yang telah dimanfaatkan menjadi
        pemandian dan sumber air baku Kota Salatiga. Sumber mata air yang
        terletak di Dusun Jubug ini memiliki legenda yang tersohor yaitu Legenda
        Jaka Tingkir dimana petilasan Jaka Tingkir berada di bukit yang
        mengelilingi pemandian Senjoyo.
      </p>
      <p className="text-[30px] font-[700] text-center my-10">
        Panduan menggunakan website Mata Air Senjoyo sebagai pengunjung
      </p>
      <Search />
      <Footers />
    </>
  );
};

export default page;
