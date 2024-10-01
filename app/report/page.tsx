import React from "react";
import HeaderAdmin from "../components/HeadersAdmin";
import Footers from "../components/Footers";

export default function page() {
  return (
    <>
      <HeaderAdmin />
      <main>
        <div className="flex w-full">
          <div className="sidebar w-1/4 h-screen border-r-2">
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
              <p className="text-[20px] font-bold mt-5">
                Mata Air Senjoyo, Salatiga
              </p>
              <ul className="list-disc mt-5 flex flex-col gap-5">
                <li>5 Juni 2024</li>
                <li>3 Tiket</li>
                <li>08.00 WIB</li>
              </ul>
              <p className="font-bold mt-10">Nama akun Pemesan</p>
              <p className="font-medium mt-7 mb-10 pb-10">
                Genesy Matthew - 08211236127366
              </p>
            </div>
            <div className="flex gap-10 ml-96">
              <a href="/editadmin">
                <p className="bg-[#036EFF] text-white w-fit px-3 py-1 rounded-lg">
                  Edit
                </p>
              </a>
              <p className="bg-[#EEF4FB] text-[#036EFF] w-fit px-3 py-1 rounded-lg">Delete</p>
            </div>
          </div>
        </div>
      </main>
      <Footers />
    </>
  );
}
