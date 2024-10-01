import React from "react";
import axios from "axios";

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post("http://localhost:3311/auth", { username: value })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log("error", e));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={onSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <div className="text-3xl font-semibold text-center mb-6">
          Selamat Datang
        </div>

        <div className="text-xl text-center text-gray-600 mb-8">
          Ketik Untuk Membuat Nama Pengguna
        </div>

        <div className="space-y-4">
          <div className="block text-lg font-medium text-gray-700">
            Nama Pengguna
          </div>
          <input
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="username"
          />
          <button
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
            type="submit"
          >
            Masuk
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
