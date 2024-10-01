// "use client";
import React from "react";
import type { Metadata } from "next";
import Headers from "../components/Headers";
import Footers from "../components/Footers";
import Quantity from "../components/Quantity";
import Form from "../components/Form";
import { NextRequest, NextResponse } from "next/server";
// import { useState, ChangeEvent, FormEvent } from "react";
// import axios from "axios";

export const metadata: Metadata = {
  title: "Pesan Tiket",
};

// export async function POST(request: NextRequest) {
//   const formData = await request.formData();
//   const nama = formData.get("nama");
//   const email = formData.get("email");
//   const no_tlp = formData.get("no_tlp");
//   const rekening = formData.get("rekening");
//   const tanggal = formData.get("tanggal");
//   const jam = formData.get("jam");
//   const jml_tiket = formData.get("tiket");

//   const data = { nama, email, no_tlp, rekening, tanggal, jam, jml_tiket };

//   const response = await fetch("http://127.0.0.1:5000/pesan", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   console.log(response);
// }
const page = () => {

  return (
    <>
      <Headers />
      <div className="wrapperPesan">
        <img
          src="/assets/pembayaran.jpg"
          alt="gambar"
          className="gambarPembayaran"
        />
        <div className="judulPesan">
          <div className="checkoutJudul">Checkout</div>
          <div className="garisPesan"></div>
          <div className="checkoutPesan">Pesan Tiketmu Sekarang Juga!</div>
        </div>
        <div className="bodyPesan rounded-[25px] w-1/2 flex flex-col m-auto items-center bg-white absolute left-[25%] top-[50%] py-[20px]">
          <div className="dataDiri">Data Diri Anda</div>
           <form action="/detail" method="POST" className="flex flex-col">
            <div className="baris1 flex flex-row gap-[30px]">
              <div className="flex flex-col">
                <label>Nama Lengkap</label>
                <input
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  name="nama"
                />
              </div>
              <div className="flex flex-col">
                <label>Nomor Telepon</label>
                <input
                  type="tel"
                  placeholder="Masukkan nomor telepon"
                  name="no_tlp"
                />
              </div>
            </div>
            <div className="baris2 flex flex-row gap-[30px] mt-[20px]">
              <div className="flex flex-col">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Masukkan alamat email"
                  name="email"
                />
              </div>
              <div className="flex flex-col">
                <label>Rekening Bank</label>
                <input
                  type="text"
                  placeholder="Masukkan nama bank"
                  name="rekening"
                />
              </div>
            </div>
            <label className="mt-[20px]">Pilih Jadwal</label>
            <input
              type="date"
              placeholder="Pilih tanggal"
              className="w-1/2"
              name="tanggal"
            />
            <fieldset className="flex flex-wrap gap-3 mt-[20px]">
              <legend>Pilih Jam</legend>

              <div>
                <label
                  htmlFor="ColorBlack"
                  className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                >
                  <input
                    type="radio"
                    name="jam"
                    value="08.00"
                    id="ColorBlack"
                    className="sr-only"
                  />

                  <p className="text-sm font-medium">08.00</p>
                </label>
              </div>

              <div>
                <label
                  htmlFor="ColorRed"
                  className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                >
                  <input
                    type="radio"
                    name="jam"
                    value="10.00"
                    id="ColorRed"
                    className="sr-only"
                  />

                  <p className="text-sm font-medium">10.00</p>
                </label>
              </div>

              <div>
                <label
                  htmlFor="ColorBlue"
                  className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                >
                  <input
                    type="radio"
                    name="jam"
                    value="12.00"
                    id="ColorBlue"
                    className="sr-only"
                  />

                  <p className="text-sm font-medium">12.00</p>
                </label>
              </div>

              <div>
                <label
                  htmlFor="ColorGold"
                  className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                >
                  <input
                    type="radio"
                    name="jam"
                    value="15,00"
                    id="ColorGold"
                    className="sr-only"
                  />

                  <p className="text-sm font-medium">15.00</p>
                </label>
              </div>
            </fieldset>
            <Quantity />
            <button
              type="submit"
              className="bg-[#d9d9d9] w-[50%] mx-auto mt-[15px] rounded py-2 hover:bg-[#5b5b5b] hover:text-white"
            >
              Pembayaran
            </button>
          </form>
        </div>
      </div>
      <Footers />
    </>
  );
};

export default page;
