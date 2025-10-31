export function HeroSection() {
  return (
    <>
      <section className="min-h-[10vh] md:min-h-[10vh] w-full flex flex-col items-center justify-start bg-white px-4 py-4">
        {/* Logo */}
        <img
          src="/Assets/dkm-logo.png"
          alt="Dwipa Kharisma Mitra"
          className="w-32 mb-2"
        />

        {/* Title */}
        <h2 className="text-[#C6463D] text-center font-semibold text-lg leading-relaxed mt-6">
          Trusted Container Depot & <br />
          Logistics Solutions in Indonesia
        </h2>

        {/* Buttons */}
        <div className="flex gap-3 mt-8 mb-8">
          <button
            className="bg-gray-200 font-medium px-4 py-2 rounded-md shadow-sm transition-colors duration-300 hover:bg-[#1F2D4B] hover:text-white cursor-pointer"
            onClick={() =>
              window.open("https://dwipakharismamitra.com/", "_blank")
            }
          >
            Official Website
          </button>

          <button
            className="bg-gray-200 font-medium px-4 py-2 rounded-md shadow-sm transition-colors duration-300 hover:bg-[#1F2D4B] hover:text-white cursor-pointer"
            onClick={() =>
              window.open("https://dwipakharismamitra.com/", "_blank")
            }
          >
            Company Profile
          </button>
        </div>
      </section>
    </>
  );
}
