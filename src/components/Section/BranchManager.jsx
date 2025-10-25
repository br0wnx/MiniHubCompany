import { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export function BranchManagersSection() {
  const [activeCity, setActiveCity] = useState("Jakarta");
  const [openDropdown, setOpenDropdown] = useState(null);

  const branches = [
    { city: "Jakarta", name: "Jagoar Pasaribu", phone: "62811850039" },
    { city: "Surabaya", name: "Kastrianto", phone: "6281331146858" },
    { city: "Semarang", name: "Indra Puspitasari", phone: "6282133771971" },
    { city: "Belawan", name: "Defri Suwandi", phone: "62811632204" },
  ];

  const mapUrls = {
    Jakarta: [
      {
        name: "Jakarta",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15868.516931851997!2d106.9449293!3d-6.1132986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a208affffffff%3A0xd4354d2466a205f4!2sPT.%20Dwipa%20Kharisma%20Mitra%20Jakarta!5e0!3m2!1sid!2sid!4v1760941870580!5m2!1sid!2sid",
      },
    ],
    Surabaya: [
      {
        name: "Surabaya 1",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63329.58256492783!2d112.6062398216797!3d-7.229558299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7ff1d60ba778b%3A0xa59d1dd59e49f7a!2sPT.Dwipa%20Kharisma%20Mitra!5e0!3m2!1sid!2sid!4v1760941915718!5m2!1sid!2sid",
      },
      {
        name: "Surabaya 2",
        url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26409.769219912738!2d112.70855724345918!3d-7.222684133698431!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f9965905aa07%3A0x7a0225faa7053f34!2sPT.%20Bintang%20Rejeki%20Graha%20(Tj.%20Batu)!5e1!3m2!1sen!2sus!4v1761414860120!5m2!1sen!2sus",
      },
    ],
    Semarang: [
      {
        name: "Semarang",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63363.49535212647!2d110.40162365550475!3d-6.983526215791692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70f31529baed9f%3A0xecfff0d5beef68fc!2sPT.%20Dwipa%20Kharisma%20Mitra%20Semarang!5e0!3m2!1sid!2sid!4v1760941945189!5m2!1sid!2sid",
      },
    ],
    Belawan: [
      {
        name: "Belawan",
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.1398513608456!2d98.70427077434948!3d3.7797352489541156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3036cc2a5ffbd269%3A0x4da367ddb1e7036d!2sPT.%20Dwipa%20Kharisma%20Mitra%20Belawan!5e0!3m2!1sid!2sid!4v1760941971716!5m2!1sid!2sid",
      },
    ],
  };

  const handleCityClick = (city) => {
    if (mapUrls[city].length > 1) {
      setOpenDropdown(openDropdown === city ? null : city);
    } else {
      setActiveCity(mapUrls[city][0].name);
      setOpenDropdown(null);
    }
  };

  const currentBranch = Object.values(mapUrls)
    .flat()
    .find((b) => b.name === activeCity);

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 px-4 flex flex-col gap-8">
      {/* Branch Managers */}
      <div className="p-4 bg-white rounded-lg shadow-sm">
        <h3 className="font-semibold text-base md:text-lg">Branch Managers</h3>
        <p className="text-sm mt-1 md:text-[15px]">
          Contact each branch directly via WhatsApp.
        </p>

        <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
          {branches.map((item, i) => (
            <div
              key={i}
              onClick={() =>
                window.open(`https://wa.me/${item.phone}`, "_blank")
              }
              className="flex justify-between items-center rounded-md p-2 md:p-3 cursor-pointer transition-all duration-300 bg-gray-200 hover:bg-[#000065] hover:text-white"
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
                className="text-[#000065] group-hover:text-white transition"
                fontSize="small"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 relative">
        {Object.keys(mapUrls).map((city) => (
          <div key={city} className="relative">
            <button
              onClick={() => handleCityClick(city)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCity.includes(city)
                  ? "bg-[#000065] text-white shadow-md"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {city}
              {mapUrls[city].length > 1 && " ▾"}
            </button>

            {openDropdown === city && (
              <div className="absolute top-full mt-2 left-0 bg-white shadow-md rounded-md overflow-hidden z-10">
                {mapUrls[city].map((branch, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setActiveCity(branch.name);
                      setOpenDropdown(null);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {branch.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Map Section */}
      <div className="p-4 md:p-6 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center">
        {currentBranch && (
          <>
            <iframe
              title={currentBranch.name}
              src={currentBranch.url}
              className="w-full h-56 sm:h-64 md:h-72 rounded-md border border-gray-200"
              allowFullScreen
              loading="lazy"
            ></iframe>
            <button
              onClick={() =>
                window.open(
                  currentBranch.directLink || currentBranch.url,
                  "_blank"
                )
              }
              className="mt-3 px-4 py-1.5 bg-gray-100 rounded-md shadow-sm text-sm md:text-base hover:bg-gray-200 transition"
            >
              Open Maps
            </button>
          </>
        )}
      </div>
    </div>
  );
}
