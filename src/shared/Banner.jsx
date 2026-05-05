"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    title: "Upgrade Your Skills Today 🚀",
    desc: "Start learning with top-rated courses and build your future career.",
    btn: "Explore Courses",
    img: "https://img.freepik.com/free-vector/female-student-listening-webinar-online_74855-6461.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Learn from Industry Experts 👨‍🏫",
    desc: "Get real-world knowledge from experienced professionals.",
    btn: "Explore Courses",
    img: "https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=612x612&w=0&k=20&c=yvFDnYMNEJ6WEDYrAaOOLXv-Jhtv6ViBRXSzJhL9S_k=",
  },
  {
    title: "Build Projects & Get Hired 💼",
    desc: "Practice, build and become job-ready with real projects.",
    btn: "Start Now",
    img: "https://www.shutterstock.com/image-photo/hand-show-learn-icon-online-600nw-2644721951.jpg",
  },
];

const Banner = () => {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-purple-50 py-20 px-6 min-h-[520px] flex items-center overflow-hidden">

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 min-h-[420px]">

        {/* TEXT SIDE */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="min-h-[220px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                  {slide.title}
                </h1>

                <p className="text-gray-600 text-lg">
                  {slide.desc}
                </p>

                <Link
                  href="/courses"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                >
                  {slide.btn}
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="flex-1 flex justify-center items-center min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={slide.img}
              alt="banner"
              className="w-full max-w-md object-contain"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </div>

      </div>

      {/* DOTS */}
      <div className="absolute bottom-6 left-0 w-full flex justify-center">
        <div className="flex gap-2 items-center bg-white/70 backdrop-blur-md px-4 py-2 rounded-full shadow">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-blue-600 w-6" : "bg-gray-300 w-2"
              }`}
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Banner;