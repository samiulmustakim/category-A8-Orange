"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Mynavlink from "./Mynavlink";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/all-courses" },
  { name: "My Profile", path: "/profile" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-lg`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          <Link href="/">SkillSphere</Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link, i) => (
            <motion.div key={i} whileHover={{ y: -2 }}>
              <Mynavlink href={link.path}>
                {link.name}
              </Mynavlink>
            </motion.div>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3 items-center">

          <Link
            href="/login"
            className="px-4 py-2 rounded-lg border border-blue-500 text-blue-600 hover:bg-blue-50 transition-all duration-300"
          >
            Login
          </Link>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="/registration"
              className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Register
            </Link>
          </motion.div>

        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-3xl transition-transform duration-300"
          >
            {open ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden md:hidden bg-white/90 backdrop-blur-md"
      >
        <div className="px-6 pb-4 space-y-4 pt-3">
          {navLinks.map((link, i) => (
            <Mynavlink
              key={i}
              href={link.path}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Mynavlink>
          ))}

          <div className="flex flex-col gap-3 pt-3">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="px-4 py-2 border border-blue-500 text-blue-600 rounded-lg text-center"
            >
              Login
            </Link>

            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="px-4 py-2 text-white rounded-lg text-center bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Register
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;