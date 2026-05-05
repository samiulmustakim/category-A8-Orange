"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CourseClient({ course }) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 py-14">

      <div className="max-w-6xl mx-auto px-6">

        {/* 🌈 OUTER GRADIENT BORDER */}
        <div className="p-[3px] rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-2xl">

          {/* INNER CARD */}
          <div className="grid md:grid-cols-2 gap-12 items-center bg-white/70 backdrop-blur-xl rounded-3xl p-8">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >

              {/* CATEGORY (NO BLACK BORDER) */}
              <span className="inline-block px-4 py-1 text-sm rounded-full bg-white/80 text-blue-600 shadow-sm border border-blue-100">
                {course.category}
              </span>

              {/* TITLE */}
              <h1 className="text-4xl font-extrabold leading-snug">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                  {course.title}
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-lg leading-relaxed">
                {course.description}
              </p>

              {/* META GRID (SOFT BORDER ONLY) */}
              <div className="grid grid-cols-2 gap-3 text-sm">

                <div className="p-3 rounded-xl bg-white/80 shadow-sm border border-gray-100">
                  👨‍🏫 {course.instructor}
                </div>

                <div className="p-3 rounded-xl bg-white/80 shadow-sm border border-gray-100">
                  ⭐ {course.rating}
                </div>

                <div className="p-3 rounded-xl bg-white/80 shadow-sm border border-gray-100">
                  ⏱ {course.duration}
                </div>

                <div className="p-3 rounded-xl bg-white/80 shadow-sm border border-gray-100">
                  📊 {course.level}
                </div>

              </div>

              {/* BUTTON (NO BORDER) */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 30px rgba(99,102,241,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold"
              >
                🚀 Enroll Now
              </motion.button>

            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />

              {/* soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

          </div>
        </div>

        {/* 📚 CURRICULUM SECTION */}
        <div className="mt-16">

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-10 text-gray-800"
          >
            📚 Course Curriculum
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-5">

            <motion.div whileHover={{ scale: 1.05 }} className="p-5 rounded-2xl bg-white/70 backdrop-blur border border-gray-100 shadow-sm">
              Introduction
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="p-5 rounded-2xl bg-white/70 backdrop-blur border border-gray-100 shadow-sm">
              Setup & Basics
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="p-5 rounded-2xl bg-white/70 backdrop-blur border border-gray-100 shadow-sm">
              Core Concepts
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="p-5 rounded-2xl bg-white/70 backdrop-blur border border-gray-100 shadow-sm">
              Project Build
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="p-5 rounded-2xl bg-white/70 backdrop-blur border border-gray-100 shadow-sm">
              Advanced Techniques
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="p-5 rounded-2xl bg-white/70 backdrop-blur border border-gray-100 shadow-sm">
              Final Review
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}