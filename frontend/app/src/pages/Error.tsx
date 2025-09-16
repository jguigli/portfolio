import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function Error() {
  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-slate-800">
        <div className="flex items-center gap-3 mr-6">
          <img
          src="/map.gif"
          alt="Wallpaper"
          className="h-64 object-contain object-center rounded-full"
          />
        </div>

        <h1 className="text-white text-xl font-bold mt-5">Error. This page do not exist.</h1>

        <button
          onClick={() => window.history.back()}
          className="mt-6 px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-[#4F46E5] transition hover:text-white"
        >
          Go Back
        </button>
      </div>
    </>
  )
}