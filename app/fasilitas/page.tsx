import React from 'react'
import Headers from '../components/Headers'
import Footers from '../components/Footers'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fasilitas",
};

const page = () => {
  return (
    <>
      <Headers />
      <div className="wrapper h-full w-3/4 m-auto">
        <p className="font-bold text-[46px] mt-7">Fasilitas</p>
        <div className="pertama flex mt-5 items-center">
          <img src="restroom.svg" className="h-[180px]" />
          <div className="garis h-[200px] w-[8px] rounded ml-[100px] bg-black"></div>
          <p className="ml-10 text-[26px]">
            <span className="font-bold">Toilet dan Kamar Mandi</span>
            <br />
            Mata Air Senjaya menyediakan toilet dan kamar mandi yang bersih dan
            terawat untuk kenyamanan pengunjung. Terdapat toilet dan kamar mandi
            yang terpisah untuk pria dan wanita.
          </p>
        </div>
        <div className="kedua flex mt-5 items-center">
          <img src="mosque.svg" className="h-[180px]" />
          <div className="garis h-[200px] w-[5px] rounded ml-[100px] bg-black"></div>
          <p className="ml-6 text-[26px]">
            <span className="font-bold">Tempat Beribadah</span>
            <br />
            Disediakan mushola yang nyaman dan bersih bagi pengunjung yang ingin
            melakukan ibadah selama berada di Mata Air Senjaya.
          </p>
        </div>
        <div className="ketiga flex mt-5 items-center">
          <img src="restoran.svg" className="h-[180px] fill-black" />
          <div className="garis h-[200px] w-[5px] rounded ml-[100px] bg-black"></div>
          <p className="ml-6 text-[26px]">
            <span className="font-bold">Warung/Kantin</span>
            <br />
            Terdapat beberapa warung/kantin yang menyediakan makanan, minuman,
            dan camilan segar. Pengunjung dapat membeli bekal atau bersantap di
            area yang telah disediakan.
          </p>
        </div>
        <div className="keempat flex mt-5 items-center">
          <img src="parkir.svg" className="h-[180px] fill-black" />
          <div className="garis h-[200px] w-[5px] rounded ml-[100px] bg-black"></div>
          <p className="ml-6 text-[26px]">
            <span className="font-bold">Area Parkir yang Luas</span>
            <br />
            Mata Air Senjaya memiliki area parkir yang luas dan aman, baik untuk
            kendaraan roda dua maupun roda empat. Petugas keamanan akan membantu
            mengatur lalu lintas dan ketertiban parkir.
          </p>
        </div>
        <div className="kelima flex mt-5 items-center mb-5">
          <img src="gazebo.svg" className="h-[180px]" />
          <div className="garis h-[200px] w-[5px] rounded ml-[100px] bg-black"></div>
          <p className="ml-6 text-[26px]">
            <span className="font-bold">Gazebo dan Sarana Rekreasi</span>
            <br />
            Tersedia gazebo-gazebo yang nyaman dan teduh, dilengkapi dengan meja
            dan kursi. Pengunjung dapat beristirahat, bersantai, atau menikmati
            makanan dan minuman di gazebo tersebut. Selain itu, terdapat area
            permainan anak, joging track, dan spot-spot foto yang instagramable.
          </p>
        </div>
      </div>

      <Footers />
    </>
  );
}

export default page