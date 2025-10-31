import { useState } from "react";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export function SupportDepartments() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (id) => {
    setActiveButton(id);
  };

  const departmentList = [
    { dept: "ED & GM", name: "Rio Tanujaya", phone: "628155001210" },
    { dept: "BisDev", name: "Iko Handriadianto [1]", phone: "62811346728" },
    { dept: "BisDev", name: "Iko Handriadianto [2]", phone: "62811346706" },
    { dept: "IT System", name: "Richard", phone: "6281219199300" },
    { dept: "Finance", name: "Rachel", phone: "62811242002" },
    { dept: "Depot Ops.", name: "Aris Susanto", phone: "6281319208270" },
    { dept: "Tax", name: "Pedut", phone: "6287818457875" },
    { dept: "M&R", name: "Ahmad Pauking", phone: "6287830597982" },
  ];

  const openWhatsApp = (phone) => {
    const url = `https://wa.me/${phone}`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6 ">
      {/* Customer Support */}
      <div className="p-4 bg-white rounded-lg shadow-sm">
        <h3 className="font-semibold">Customer Support</h3>
        <p className="text-sm mt-1">Available Mon - Fri, 09:00 - 16.00 WIB</p>

        <div className="flex gap-2 mt-3">
          <button
            onClick={() => window.open("tel:02144854918")}
            className={`flex-1 flex items-center justify-center gap-1 rounded-md py-2 transition-colors duration-300 cursor-pointer
    ${
      activeButton === "hotline"
        ? "bg-[#1F2D4B] text-white"
        : "bg-gray-200 hover:bg-[#1F2D4B] hover:text-white"
    }`}
          >
            <PhoneOutlinedIcon fontSize="small" />
            <span>Hotline</span>
          </button>

          <button
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=contactus@dwipakharismamitra.co.id",
                "_blank"
              )
            }
            className={`flex-1 flex items-center justify-center gap-1 rounded-md py-2 transition-colors duration-300 cursor-pointer
    ${
      activeButton === "email"
        ? "bg-[#1F2D4B] text-white"
        : "bg-gray-200 hover:bg-[#1F2D4B] hover:text-white"
    }`}
          >
            <EmailOutlinedIcon fontSize="small" />
            <span>Email</span>
          </button>
        </div>
      </div>

      {/* Departments */}
      <div className="p-4 bg-white rounded-lg shadow-sm">
        <h3 className="font-semibold">Departments</h3>
        <p className="text-sm mt-1">
          Direct access to departments and management available.
        </p>

        <div className="mt-3 grid grid-cols-2 gap-2">
          {departmentList.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                handleButtonClick(i);
                openWhatsApp(item.phone);
              }}
              className={`flex justify-between items-center rounded-md p-2 cursor-pointer transition-colors duration-300
    ${
      activeButton === i
        ? "bg-[#1F2D4B] text-white"
        : "bg-gray-200 hover:bg-[#1F2D4B] hover:text-white"
    }`}
            >
              <div className="flex flex-col">
                <p className="text-[11px] text-inherit">{item.dept}</p>
                <p className="text-xs font-medium text-inherit leading-tight">
                  {item.name}
                </p>
              </div>

              <WhatsAppIcon
                className={`transition-colors duration-300 ${
                  activeButton === i
                    ? "text-white"
                    : "text-[#1F2D4B] group-hover:text-white"
                }`}
                fontSize="small"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
