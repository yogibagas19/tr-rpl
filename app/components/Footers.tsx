import React from "react";
import Image from "next/image";

const Footers = () => {
  return (
    <div className="container-footers">
      <div className="footerKiri">
        <a href="/" className="gambarFooter">
          <Image src="/assets/logo.png" alt="logo" width={120} height={120} />
        </a>
        <div className="teksFooter">
          <div className="judulFooter">
            MATA AIR <br /> SENJOYO
          </div>
          <div className="anakFooter">
            Cebongan, Tegalwaton, Kec. <br />
            Tengaran, Kabupaten Semarang, <br /> Jawa Tengah 50775
          </div>
        </div>
      </div>
      <div className="copyFooter">
        © 2024 Layanan Tiket Online Mata Air Senjoyo.
      </div>
    </div>
  );
};

export default Footers;
