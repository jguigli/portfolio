export default function Error() {
  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a0e14]">
        <h1 className="text-white text-xl font-bold mt-5">Error. This page do not exist.</h1>

        <button
          onClick={() => window.history.back()}
          className="mt-6 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 bg-gray-700 text-white border border-gray-600 hover:bg-gray-600"
        >
          Go Back
        </button>
      </div>
    </>
  )
}