import type { Metadata } from "next";
import { Carousel } from "./components/Carousel";
import Headers from "./components/Headers";
import Footers from "./components/Footers";

export const metadata: Metadata = {
  title: "Beranda",
};

export default function Home() {
  return (
    <>
      <Headers />
      <p className="flex justify-center p-10 italic text-[30px]">
        Selamat datang di Layanan Tiket Online Mata Air Senjoyo!
      </p>
      <Carousel />
      <a
        href="/pesan"
        className="flex justify-center mt-10 m-auto px-10 py-3 w-[10%] border rounded-2xl bg-[#d9d9d9] hover:bg-[#5b5b5b] hover:text-white"
      >
        PESAN TIKET
      </a>
      <p className="flex justify-center m-auto mt-10 text-[30px] font-semibold">
        Tentang Mata Air Senjoyo
      </p>
      <p className="flex justify-center m-auto mt-2 w-1/2 text-center text-[25px] mb-10">
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
      <Footers />
    </>
  );
}
