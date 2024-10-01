import React from 'react'

export default function HeaderAdmin1() {
  return (
    <>
      <main>
        <div className="flex justify-between border-b-2">
          <a href="/dashboard" className="w-[6%]">
            <img src="/assets/logo.png" alt="asdads" />
          </a>
          <div className="flex items-center gap-3 mr-5">
            <img src="admin.svg" alt="dasdasd" width={50} />
          </div>
        </div>
      </main>
    </>
  );
}
