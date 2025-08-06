"use client";
import Image from "next/image";
import Link from "next/link";
import {
  footerInfo,
  quickLinks,
  instagramImages,
  socialIcons,
} from "../data/footerdata";
import {
  FaFacebookF,
  FaTwitter,
  FaSkype,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {/* Left Info */}
        <div>
          <img src="/images/logo-white.png" alt="logo" />
          <p className="text-sm mb-4">{footerInfo.description}</p>
          <ul className="space-y-3 text-sm">
            {/* Location */}
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-red-500" />
              <div>
                <p className="font-semibold text-white">Location</p>
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(
                    footerInfo.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-red-500 transition"
                >
                  {footerInfo.address}
                </a>
              </div>
            </li>

            {/* Email */}
            {footerInfo.email.length > 0 && (
              <li className="flex items-start gap-2">
                <FaEnvelope className="mt-1 text-red-500" />
                <div className="space-y-1">
                  {footerInfo.email.map((email, idx) => (
                    <p key={idx} className="text-gray-300">
                      {email}
                    </p>
                  ))}
                </div>
              </li>
            )}

            {/* Phone */}
            {footerInfo.phone.length > 0 && (
              <li className="flex items-start gap-2">
                <FaPhone className="mt-1 text-red-500" />
                <div className="space-y-1">
                  {footerInfo.phone.map((phone, idx) => (
                    <p key={idx} className="text-gray-300">
                      {phone}
                    </p>
                  ))}
                </div>
              </li>
            )}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold border-b border-white w-fit mb-4">
            Quick links
          </h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.path}
                  className="hover:text-red-500 transition text-white text-decoration-none"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Instagram */}
        <div>
          <h3 className="text-lg font-semibold border-b border-white w-fit mb-4">
            Instagram
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {instagramImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`insta-${idx}`}
                className="w-full h-20 object-cover rounded"
              />
            ))}
          </div>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-lg font-semibold border-b border-white w-fit mb-4">
            Subscribe
          </h3>
          <p className="text-sm mb-4">
            Lorem ipsum dolor si consectetur adipisicing elit, sed eiusmod
            tempor incididunt ut labore et
          </p>
          <div className="flex mb-4 border-2 border-gray-600 rounded overflow-hidden">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 text-white bg-transparent focus:outline-none"
            />
            <button className="bg-red-600 px-4 py-2">Subscribe</button>
          </div>
          <div className="flex gap-4 text-lg">
            {socialIcons.map(({ icon, url }, idx) => {
              const iconMap = {
                facebook: FaFacebookF,
                twitter: FaTwitter,
                skype: FaSkype,
                instagram: FaInstagram,
              };

              const IconComponent = iconMap[icon as keyof typeof iconMap];

              return IconComponent ? (
                <a
                  key={idx}
                  href={url}
                  className="hover:text-red-500 transition text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconComponent />
                </a>

              ) : null;
            })}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-4">
        © Copyright Cafeu. 2025 All Rights Reserved
      </div>
    </footer>
  );
}
