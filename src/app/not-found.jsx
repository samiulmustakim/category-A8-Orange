"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <section className="min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-100 flex items-center justify-center px-6 relative">

            {/* BACKGROUND BLUR */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400/30 rounded-full blur-3xl" />

            {/* MAIN CARD */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 max-w-2xl w-full"
            >
                <div className="bg-white/60 backdrop-blur-2xl rounded-[40px] shadow-2xl p-10 md:p-16 text-center border border-white/40">

                    {/* 404 TEXT */}
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-8xl md:text-[140px] font-black leading-none"
                    >
                        <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            404
                        </span>
                    </motion.h1>

                    {/* TITLE */}
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-4 text-3xl md:text-4xl font-bold text-gray-800"
                    >
                        Oops! Page Not Found 🚀
                    </motion.h2>

                    {/* DESCRIPTION */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-5 text-gray-500 text-lg leading-relaxed max-w-xl mx-auto"
                    >
                        The page you are looking for might have been removed,
                        renamed, or temporarily unavailable.
                    </motion.p>

                    {/* BUTTONS */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
                    >
                        <Link href="/">
                            <button className="px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition duration-300">
                                ⬅ Back Home
                            </button>
                        </Link>

                        <Link href="/all-courses">
                            <button className="px-8 py-3 rounded-2xl bg-white text-gray-700 font-semibold shadow-md hover:shadow-xl transition duration-300">
                                Browse Courses
                            </button>
                        </Link>
                    </motion.div>

                    {/* FLOATING ICONS */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 3,
                        }}
                        className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center text-2xl shadow-xl"
                    >
                        🚀
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 4,
                        }}
                        className="absolute -bottom-6 -right-6 w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center text-2xl shadow-xl"
                    >
                        😵
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}