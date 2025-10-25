import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

export function MobileFooter() {
  return (
    <footer className="w-full bg-white py-6 flex flex-col items-center">
      {/* Icon Section */}
      <div className="flex items-center justify-center gap-5 mb-3">
        {/* Instagram */}
        <div className="rounded-l border border-white text-[#000065] transition cursor-pointer">
          <a
            href="https://www.instagram.com/dwipakharismamitra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon fontSize="medium" />
          </a>
        </div>

        {/* LinkedIn */}
        <div className="rounded-l border border-white text-[#000065] transition cursor-pointer">
          <a
            href="https://www.linkedin.com/company/dwipakharismamitra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon fontSize="medium" />
          </a>
        </div>

        {/* Facebook */}
        <div className="rounded-xl border border-white text-[#000065] transition cursor-pointer">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon fontSize="medium" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-xs italic text-black mt-2 text-center font-bold">
        © 2025 DKM Group. All Rights Reserved.
      </p>
    </footer>
  );
}
