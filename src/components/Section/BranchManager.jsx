import { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export function BranchManagersSection() {
  const [activeCity, setActiveCity] = useState("Jakarta");

  const branches = [
    { city: "Jakarta", name: "Jagoar Pasaribu" },
    { city: "Surabaya", name: "Kastrianto" },
    { city: "Semarang", name: "Indra Puspitasari" },
    { city: "Belawan", name: "Defri Suwandi" },
  ];

  const mapUrls = {
    Jakarta:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15868.516931851997!2d106.9449293!3d-6.1132986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a208affffffff%3A0xd4354d2466a205f4!2sPT.%20Dwipa%20Kharisma%20Mitra%20Jakarta!5e0!3m2!1sid!2sid!4v1760941870580!5m2!1sid!2sid",
    Surabaya:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63329.58256492783!2d112.6062398216797!3d-7.229558299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7ff1d60ba778b%3A0xa59d1dd59e49f7a!2sPT.Dwipa%20Kharisma%20Mitra!5e0!3m2!1sid!2sid!4v1760941915718!5m2!1sid!2sid",
    Semarang:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63363.49535212647!2d110.40162365550475!3d-6.983526215791692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70f31529baed9f%3A0xecfff0d5beef68fc!2sPT.%20Dwipa%20Kharisma%20Mitra%20Semarang!5e0!3m2!1sid!2sid!4v1760941945189!5m2!1sid!2sid",
    Belawan:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.1398513608456!2d98.70427077434948!3d3.7797352489541156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3036cc2a5ffbd269%3A0x4da367ddb1e7036d!2sPT.%20Dwipa%20Kharisma%20Mitra%20Belawan!5e0!3m2!1sid!2sid!4v1760941971716!5m2!1sid!2sid",
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {/* Left - Branch List */}
      <div className="p-4 bg-white rounded-lg shadow-sm md:p-6">
        <h3 className="font-semibold text-base md:text-lg">Branch Managers</h3>
        <p className="text-sm mt-1 md:text-[15px] text-gray-600">
          Select a branch manager to view location.
        </p>

        <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-2 md:gap-3">
          {branches.map((item, i) => (
            <div
              key={i}
              onClick={() => setActiveCity(item.city)}
              className={`flex justify-between items-center rounded-md p-2 md:p-3 cursor-pointer transition-colors ${
                activeCity === item.city
                  ? "bg-[#000065] text-white"
                  : "bg-gray-200"
              }`}
            >
              <div className="flex flex-col">
                <p className="text-[11px] md:text-xs text-inherit">
                  {item.city}
                </p>
                <p className="text-xs md:text-sm font-medium text-inherit leading-tight">
                  {item.name}
                </p>
              </div>

              <WhatsAppIcon
                className={`${
                  activeCity === item.city ? "text-white" : "text-[#000065]"
                }`}
                fontSize="small"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right - Map */}
      <div className="p-4 md:p-6 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center">
        <iframe
          title={activeCity}
          src={mapUrls[activeCity]}
          className="w-full h-56 sm:h-64 md:h-72 rounded-md border border-gray-200"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <button
          onClick={() =>
            window.open(
              mapUrls[activeCity].replace("&output=embed", ""),
              "_blank"
            )
          }
          className="mt-3 px-4 py-1.5 bg-gray-100 rounded-md shadow-sm text-sm md:text-base hover:bg-gray-200 transition"
        >
          Open Maps
        </button>
      </div>
    </div>
  );
}
