import { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

export function GroupCompaniesSection() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const groupCompanies = [
    {
      id: 1,
      logo: "/assets/logo-dkm group/logojava.png",
      city: ["Semarang", "Lampung"],
      companyName: "Java Sarana Mitra Sejati",
      website: "https://javasaranamitrasejati.com/",
      manager: {
        Semarang: {
          name: "Djoko Susilo",
          phone: "628179513773",
          map: "https://maps.app.goo.gl/ekCLQTnGGkyC4zRdA",
        },
        Lampung: {
          name: "Herry Mulyadi",
          phone: "6281331146858",
          map: "https://maps.app.goo.gl/1fQq9e6i2oPSjX1S8",
        },
      },
    },
    {
      id: 2,
      logo: "/Assets/logo-dkm group/logoblp.png",
      city: ["Jakarta", "Semarang", "Surabaya"],
      companyName: "Bintang Laut Platinum",
      website: "https://bintanglautplatinum.com/",
      manager: {
        Jakarta: {
          name: "Charlie",
          phone: "628111915588",
          map: "https://maps.app.goo.gl/G4xosG2W9799aohCA",
        },
        Semarang: {
          name: "Ulfa",
          phone: "6281322343431",
          map: "https://maps.app.goo.gl/Hiq3VaKpFs3cWnEn8",
        },
        Surabaya: {
          name: "Nunik",
          phone: "6281234505653",
          map: "https://maps.app.goo.gl/L7p5kc7s7oR6aBsDA",
        },
      },
    },
    {
      id: 3,
      logo: "/Assets/logo-dkm group/logobr.png",
      city: ["Surabaya"],
      companyName: "Bintang Rezeki Graha",
      website: "https://bintangrejeki.com/",
      manager: {
        Surabaya: {
          name: "Rachel",
          phone: "62811242002",
          map: "https://maps.app.goo.gl/htEeFzVEasxki9LF9",
        },
      },
    },
  ];

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const openWhatsApp = (phone) => {
    window.open(`https://wa.me/${phone}`, "_blank");
  };

  const openMap = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="w-full max-w-6xl mx-auto mt-10 px-4">
      {/* Judul */}
      <h3 className="font-semibold text-xl md:text-2xl mb-6 text-left px-1">
        Group Companies
      </h3>

      {/* Daftar Company */}
      <div className="space-y-5">
        {groupCompanies.map((company) => (
          <div
            key={company.id}
            className="border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-all overflow-hidden"
          >
            {/* Tombol utama */}
            <button
              onClick={() => toggleDropdown(company.id)}
              className="w-full flex items-center gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
            >
              {/* Logo */}
              <img
                src={company.logo}
                alt={company.companyName}
                className="w-14 h-14 md:w-16 md:h-16 object-contain"
              />

              {/* Nama perusahaan */}
              <div className="flex-1">
                <h4 className="font-semibold text-lg md:text-xl">
                  {company.companyName}
                </h4>
                <p className="text-sm mt-1">{company.city.join(", ")}</p>
              </div>

              {/* Panah dropdown */}
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${
                  openDropdown === company.id ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown */}
            {openDropdown === company.id && (
              <div className="border-t border-gray-200 p-5 bg-gray-50">
                {/* Tombol Aksi */}
                <div className="flex justify-between gap-3 mb-5">
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-200 py-2 rounded-lg font-medium hover:bg-gray-300 transition text-sm text-center"
                  >
                    Official Website
                  </a>
                  <button className="flex-1 bg-gray-200 py-2 rounded-lg font-medium hover:bg-gray-300 transition text-sm">
                    Company Profile
                  </button>
                </div>

                {/* City and Branch Manager */}
                <div className="space-y-3">
                  {company.city.map((cityName, i) => {
                    const manager = company.manager[cityName];
                    return (
                      <div
                        key={i}
                        className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-none"
                      >
                        <div>
                          <p className="font-semibold text-sm">{cityName}</p>
                          <p className="text-sm">{manager?.name || "-"}</p>
                        </div>

                        {/* Icon Aksi */}
                        <div className="flex items-center gap-3">
                          {/* WhatsApp */}
                          <div
                            onClick={() =>
                              manager?.phone && openWhatsApp(manager.phone)
                            }
                            className="border border-gray-300 rounded-xl p-1.5 transition-all hover:bg-[#1F2D4B] group cursor-pointer"
                          >
                            <WhatsAppIcon className="text-[#1F2D4B] group-hover:text-white" />
                          </div>

                          {/* Map */}
                          <div
                            onClick={() => manager?.map && openMap(manager.map)}
                            className="border border-gray-300 rounded-xl p-1.5 transition-all hover:bg-[#1F2D4B] group cursor-pointer"
                          >
                            <MapOutlinedIcon className="text-[#1F2D4B] group-hover:text-white" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
