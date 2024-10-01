import React from 'react'

export default function HeaderAdmin() {
  return (
    <>
      <main>
        <div className="flex justify-between border-b-2">
          <a href="/dashboard" className="w-[6%]">
            <img src="/assets/logo.png" alt="asdads" />
          </a>
          <div className="flex items-center gap-3 mr-5">
            <a href="/docsadmin">
              <p>Panduan dan Dokumentasi</p>
            </a>
            <img src="admin.svg" alt="dasdasd" width={50} />
          </div>
        </div>
      </main>
    </>
  );
}
