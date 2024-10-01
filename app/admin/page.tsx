import React from 'react'
import HeaderAdmin1 from '../components/HeaderAdmin1'
import Footers from '../components/Footers'

export default function page() {
  return (
    <>
      <HeaderAdmin1 />
      <main>
        <div className="flex ml-[150px] mt-40 mb-40">
          <div className="w-1/2">
            <img src="orang.png" alt="" />
          </div>
          <div className="w-1/2 flex flex-col gap-20">
            <div className="flex items-center text-[28px] font-semibold">
              <img src="login.svg" alt="" />
              <p>Login halaman admin</p>
            </div>
            <form action="/dashboard" className='flex flex-col w-1/2 gap-10'>
              <p className='font-extrabold text-[36px]'>Selamat datang, Admin </p>
              <p className='text-xl'>Silahkan masukkan email dan password</p>
              <input type="email" name="email" placeholder='Email'/>
              <input type="password" name="password" placeholder='Password'/>
              <button type="submit" className='bg-black text-white py-2 rounded-lg'>Log In</button>
            </form>
          <a href="/"><p className='bg-[#d9d9d9] w-fit px-10 py-2 rounded-2xl font-semibold'>Kembali</p></a>
          </div>

        </div>
      </main>
      <Footers />
    </>
  );
}
