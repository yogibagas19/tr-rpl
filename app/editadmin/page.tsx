import React from 'react'
import HeaderAdmin from '../components/HeadersAdmin'
import Footers from '../components/Footers'
import Quantity from '../components/Quantity';

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
          <div className="kanan ">
            <div className="bodyPesan rounded-[25px] p-10 flex flex-col m-auto items-center bg-[#d9d9d9] ml-96 mt-10">
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
        </div>
      </main>
      <Footers />
    </>
  );
}
