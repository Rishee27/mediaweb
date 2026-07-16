import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaInstagram, FaFacebook, FaTwitter, FaLinkedinIn,
  FaYoutube, FaPhone, FaUsers, FaHandshake,
  FaInfoCircle
} from "react-icons/fa";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer style={{ backgroundColor: "#0f0f1a" }} className="text-white">

      {/* Top quick nav bar */}
      <div className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-8 py-5 
          flex flex-wrap items-center justify-center gap-2">

          {[
            { icon: FaPhone, label: "Contact Us", 
              path: "/contact-us" },
            { icon: FaInfoCircle, label: "About Us", 
              path: "/about" },
            { icon: FaUsers, label: "Our Clients", 
              path: "/about#clients" },
            { icon: FaHandshake, label: "Agency Partner", 
              path: "/contact-us" },
          ].map((item, i, arr) => (
            <React.Fragment key={item.label}>
              <button
                onClick={() => navigate(item.path)}
                className="flex items-center gap-2 
                  text-gray-300 hover:text-white 
                  transition duration-200 px-4 py-1"
              >
                <item.icon className="text-lg flex-shrink-0" />
                <span className="text-sm font-medium">
                  {item.label}
                </span>
              </button>
              {i < arr.length - 1 && (
                <span className="text-gray-700 text-lg">|</span>
              )}
            </React.Fragment>
          ))}

        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-6xl mx-auto px-8 py-14 
        grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Column 1 — Brand */}
        <div>
          <img
            src="/images/media_logo.png"
            alt="The Owl Media"
            style={{ 
              filter: "brightness(0) invert(1)",
              height: "44px",
              width: "auto",
              objectFit: "contain",
              cursor: "pointer",
              marginBottom: "16px"
            }}
            onClick={() => navigate("/")}
          />
          <p className="text-gray-400 text-sm leading-relaxed">
            India's Largest Media Planning & Advertising Platform.
            Plan, Compare and Book advertising options online.
          </p>
          <div className="flex gap-4 mt-5">
            {[
              { Icon: FaInstagram, hover: "hover:text-pink-400" },
              { Icon: FaFacebook, hover: "hover:text-blue-400" },
              { Icon: FaTwitter, hover: "hover:text-sky-400" },
              { Icon: FaLinkedinIn, hover: "hover:text-blue-300" },
              { Icon: FaYoutube, hover: "hover:text-red-400" },
            ].map(({ Icon, hover }) => (
              <Icon
                key={hover}
                className={`text-gray-500 text-xl cursor-pointer 
                  transition duration-200 ${hover}`}
              />
            ))}
          </div>
        </div>

        {/* Column 2 — Useful Links */}
        <div>
          <h4 className="text-white font-bold text-base 
            mb-5 uppercase tracking-wider">
            Useful Links
          </h4>
          <ul className="space-y-3">
            {[
              "Your Guide to The Owl Media",
              "Become an Agency Partner",
              "How Media Buying Works",
              "Blog & Resources",
              "Terms & Conditions",
              "Privacy Policy",
              "Careers",
              "Deals & Offers",
            ].map((link) => (
              <li key={link}>
                <button className="text-gray-400 text-sm 
                  hover:text-white transition duration-200 
                  text-left">
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Tools + Follow */}
        <div>
          <h4 className="text-white font-bold text-base 
            mb-5 uppercase tracking-wider">
            Tools
          </h4>
          <ul className="space-y-3 mb-8">
            {[
              "Campaign Brief",
              "ROAS Calculator",
              "MASH",
              "Ads Planner",
              "Media Recommendation",
              "Budget Estimator",
              "AI Creative Generator",
            ].map((tool) => (
              <li key={tool}>
                <button className="text-gray-400 text-sm 
                  hover:text-white transition duration-200 
                  text-left">
                  {tool}
                </button>
              </li>
            ))}
          </ul>

          <h4 className="text-white font-bold text-base 
            mb-4 uppercase tracking-wider">
            Follow
          </h4>
          <ul className="space-y-2">
            {[
              { label: "Facebook", icon: FaFacebook },
              { label: "Twitter", icon: FaTwitter },
              { label: "LinkedIn", icon: FaLinkedinIn },
              { label: "Instagram", icon: FaInstagram },
            ].map(({ label, icon: Icon }) => (
              <li key={label}>
                <button className="text-gray-400 text-sm 
                  hover:text-white transition duration-200 
                  flex items-center gap-2">
                  <Icon className="text-sm" />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Popular Industries */}
        <div>
          <h4 className="text-white font-bold text-base 
            mb-5 uppercase tracking-wider">
            Popular Industries
          </h4>
          <ul className="space-y-3">
            {[
              { label: "Airport Advertising", path: "/airport" },
              { label: "Cinema Advertising", path: "/cinema" },
              { label: "Outdoor Advertising", path: "/outdoor" },
              { label: "Television Advertising", 
                path: "/television" },
              { label: "Radio Advertising", path: "/radio" },
              { label: "Digital Advertising", path: "/digital" },
              { label: "Sports Marketing", path: "/sports" },
              { label: "BTL Advertising", 
                path: "/nontraditional" },
              { label: "Magazine Advertising", 
                path: "/magazine" },
            ].map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => navigate(item.path)}
                  className="text-gray-400 text-sm 
                    hover:text-white transition duration-200 
                    text-left"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-8 py-5 
          flex flex-col md:flex-row justify-between 
          items-center gap-3">
          <p className="text-gray-500 text-sm">
            © 2026 The Owl Media. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="text-gray-500 text-sm 
              hover:text-white transition">
              Privacy Policy
            </button>
            <button className="text-gray-500 text-sm 
              hover:text-white transition">
              Terms of Service
            </button>
            <button className="text-gray-500 text-sm 
              hover:text-white transition">
              Sitemap
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
