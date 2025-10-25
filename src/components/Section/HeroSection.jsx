export function HeroSection() {
  return (
    <>
      <section className="min-h-[10vh] md:min-h-[10vh] w-full flex flex-col items-center justify-start bg-white px-4 py-4">
        {/* Logo */}
        <img
          src="/Assets/logo-dkm group/logodkm.png"
          alt="Dwipa Kharisma Mitra"
          className="w-32 mb-2"
        />

        {/* Title */}
        <h2 className="text-[#DA1D2C] text-center font-semibold text-base leading-tight">
          Trusted Container Depot & <br />
          Logistics Solutions in Indonesia
        </h2>

        {/* Buttons */}
        <div className="flex gap-3 mt-14">
          <button className="bg-gray-100 font-medium px-4 py-2 rounded-md shadow-sm">
            Official Website
          </button>
          <button className="bg-gray-100 font-medium px-4 py-2 rounded-md shadow-sm">
            Company Profile
          </button>
        </div>
      </section>
      ;
    </>
  );
}
