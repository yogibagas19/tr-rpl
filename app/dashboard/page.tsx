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
          <div className="mx-auto">
            <img src="dashboard1.png" className="mt-10"/>
            <img src="dashboard2.png" className="ml-[50px] mt-10" />
          </div>
        </div>
      </main>
      <Footers />
    </>
  );
}
