"use client"
import React,{useState} from 'react'
import { admin } from "../admin"

export default function SearchAdmin() {
    const [search, setSearch] = useState("");
  return (
    <>
      <div className="cari mt-10 w-[80%] mx-auto">
        {/* <input type="text" placeholder="Cari.." onChange={(e: any) => setSearch(e.target.value)} /> */}
        <label
          htmlFor="UserEmail"
          className="relative block w-1/4 overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
        >
          <input
            type="email"
            id="UserEmail"
            placeholder="Cari.."
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            onChange={(e: any) => setSearch(e.target.value)}
          />

          <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
            Cari...
          </span>
        </label>
        <ul>
          {admin
            .filter((item) => item.head.toLowerCase().includes(search))
            .map((item) => (
              <li key={item.id} className="my-[50px]">
                <p className="text-[25px] font-semibold">{item.head}</p>
                <div className="flex flex-row gap-[30px] items-center">
                  <img src={item.pic} alt="" />
                  <div className="w-[5px] h-[400px] bg-black"></div>
                  <p className="text-[25px]">{item.capt}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
