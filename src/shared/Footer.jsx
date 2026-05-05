"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-white">SkillSphere</h1>
          <p className="text-gray-400">
            Learn modern skills, build projects, and grow your career with expert-led courses.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 pt-2">
            <a href="#" className="hover:text-blue-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* LINKS */}
        <div>
          <h2 className="text-white font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/courses" className="hover:text-white">Courses</Link></li>
            <li><Link href="/profile" className="hover:text-white">My Profile</Link></li>
            <li><Link href="/login" className="hover:text-white">Login</Link></li>
            <li><Link href="/register" className="hover:text-white">Register</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-white font-semibold mb-4">Contact</h2>

          <div className="space-y-3 text-gray-400">
            <p className="flex items-center gap-2">
              <FaEnvelope /> support@skillsphere.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhone /> +880 1234 567890
            </p>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} SkillSphere. All rights reserved.</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <Link href="/terms" className="hover:text-white">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;