"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const instructors = [
  {
    name: "John Doe",
    role: "Full Stack Engineer",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  },
  {
    name: "Jane Smith",
    role: "React Specialist",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  },
  {
    name: "Michael Lee",
    role: "Next.js Architect",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
  },
  {
    name: "Sarah Khan",
    role: "UI/UX Designer",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const card = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 }
  }
};

export default function TopInstructors() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-purple-50 to-blue-50">

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-extrabold">
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-500 bg-clip-text text-transparent">
            🏆 Top Instructors
          </span>
        </h2>

        <p className="text-gray-500 mt-3">
          Learn directly from industry experts
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6"
      >
        {instructors.map((ins, i) => (
          <motion.div
            key={i}
            variants={card}
            whileHover={{
              y: -12,
              scale: 1.05
            }}
            className="relative p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-white shadow-xl text-center overflow-hidden"
          >

            {/* floating glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-300 blur-3xl opacity-30" />

            {/* image */}
            <div className="w-20 h-20 mx-auto relative rounded-full overflow-hidden border-4 border-purple-200">
              <Image
                src={ins.image}
                alt={ins.name}
                fill
                className="object-cover"
              />
            </div>

            {/* text */}
            <h3 className="mt-4 font-bold text-gray-800">
              {ins.name}
            </h3>

            <p className="text-sm text-gray-500">
              {ins.role}
            </p>

            {/* button */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(99,102,241,0.5)"
              }}
              className="mt-4 px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white"
            >
              View Profile
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}