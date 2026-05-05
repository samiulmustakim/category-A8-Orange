"use client";

import { motion } from "framer-motion";

const tips = [
  {
    title: "📚 Study Techniques",
    desc: "Use active recall, spaced repetition, and project-based learning to retain knowledge faster."
  },
  {
    title: "⏰ Time Mastery",
    desc: "Follow Pomodoro (25/5 rule) to stay focused and avoid burnout."
  },
  {
    title: "🚀 Consistency Wins",
    desc: "Even 1 hour daily beats 10 hours once a week."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18 }
  }
};

const card = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function LearningTips() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-blue-50 to-white">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-extrabold">
          <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            📌 Learning Tips
          </span>
        </h2>

        <p className="text-gray-500 mt-3">
          Smart techniques to boost your learning speed
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6"
      >
        {tips.map((tip, i) => (
          <motion.div
            key={i}
            variants={card}
            whileHover={{
              scale: 1.05,
              y: -8
            }}
            className="relative p-7 rounded-2xl bg-white/70 backdrop-blur-xl border border-white shadow-xl overflow-hidden"
          >
            {/* glow background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 opacity-30" />

            <h3 className="relative text-lg font-bold text-gray-800">
              {tip.title}
            </h3>

            <p className="relative mt-2 text-sm text-gray-600">
              {tip.desc}
            </p>

            {/* bottom glow line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}