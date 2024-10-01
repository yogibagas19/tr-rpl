"use client"
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const Form = () => {
  const router = useRouter()
  const [nama, setNama] = useState('')
  const [email, setEmail] = useState('')
  const [nomor, setNomor] = useState('')
  const [rekening, setRekening] = useState('')
  const [tanggal, setTanggal] = useState('')
  const [jam, setJam] = useState('')
  const [tiket, setTiket] = useState('')
  const [quantity, setQuantity] = useState(1)

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < 50) {
      setQuantity((prevCount) => prevCount + 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    const ticket = {
      nama, email, nomor, rekening, tanggal, jam, quantity
    }

    // const res = await axios.post("http://localhost:3211/pesan",ticket, {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    if(res.status === 201){
      router.push('/pesan')
    }
  }


  return (
    <>
      <form onClick={handleSubmit} className="flex flex-col">
        <div className="baris1 flex flex-row gap-[30px]">
          <div className="flex flex-col">
            <label>Nama Lengkap</label>
            <input
              required
              type="text"
              placeholder="Masukkan nama lengkap"
              name="nama"
              onChange={(e) => setNama(e.target.value)}
              value={nama}
            />
          </div>
          <div className="flex flex-col">
            <label>Nomor Telepon</label>
            <input
              type="tel"
              placeholder="Masukkan nomor telepon"
              name="no_tlp"
              onChange={(e) => setNomor(e.target.value)}
              value={nomor}
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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex flex-col">
            <label>Rekening Bank</label>
            <input
              type="text"
              placeholder="Masukkan nama bank"
              name="rekening"
              onChange={(e) => setRekening(e.target.value)}
              value={rekening}
            />
          </div>
        </div>
        <label className="mt-[20px]">Pilih Jadwal</label>
        <input
          type="date"
          className="w-1/2"
          name="tanggal"
          onChange={(e) => setTanggal(e.target.value)}
          value={tanggal}
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
                name="Jam"
                onChange={(e) => setJam("08.00")}
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
                name="Jam"
                onChange={(e) => setJam("10.00")}
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
                name="Jam"
                onChange={(e) => setJam("12.00")}
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
                name="Jam"
                onChange={(e) => setJam("15.00")}
                value="15.00"
                id="ColorGold"
                className="sr-only"
              />

              <p className="text-sm font-medium">15.00</p>
            </label>
          </div>
        </fieldset>
        <div className="wrapperCount flex justify-between items-center mt-[30px]">
          <div className="count flex flex-row items-center">
            <p className="mr-[20px]">Jumlah Tiket</p>
            <button
              type="button"
              className="w-[25px] bg-[#5b5b5b] rounded-[12px] text-white"
              onClick={handleDecrement}
            >
              -
            </button>
            <div
              className="num w-[40px] text-center"
              onChange={(e) => setTiket(e.target.value)}
              value={tiket}
            >
              {quantity}
            </div>
            <button
              type="button"
              className="w-[25px] bg-[#5b5b5b] rounded-[12px] text-white"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <div className="displayCount">
            <div>Total Rp {quantity * 5}.000,00</div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#d9d9d9] py-[5px] px-[100px] w-1/2 m-auto rounded hover:bg-[#5b5b5b] hover:text-white mt-[20px]"
        >
          Pembayaran
        </button>
      </form>
    </>
  );
}

export default Form