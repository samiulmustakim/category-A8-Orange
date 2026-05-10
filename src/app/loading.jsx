"use client";

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <section className="min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-100 relative">

            {/* BLUR BACKGROUND */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col items-center">

                {/* OUTER RING */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "linear",
                    }}
                    className="w-28 h-28 rounded-full border-[6px] border-blue-200 border-t-blue-600 flex items-center justify-center shadow-2xl"
                >

                    {/* INNER RING */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            ease: "linear",
                        }}
                        className="w-16 h-16 rounded-full border-[5px] border-purple-200 border-t-purple-600"
                    />
                </motion.div>

                {/* TEXT */}
                <motion.h2
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 1,
                    }}
                    className="mt-8 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                    Loading Experience...
                </motion.h2>

                <p className="text-gray-500 mt-2 text-sm">
                    Please wait a moment 🚀
                </p>
            </div>
        </section>
    );
}