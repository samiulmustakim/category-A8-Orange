"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const card = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function TopCoursesClient({ courses }) {
    return (
        <section className="py-20 bg-linear-to-b from-white to-blue-50">
            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-14"
            >
                <h2 className="text-4xl font-bold text-gray-800">
                    🔥 Top Rated Courses
                </h2>
                <p className="text-gray-500 mt-2">
                    Handpicked courses loved by students worldwide
                </p>
            </motion.div>

            {/* Grid */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10"
            >
                {courses.map((course) => (
                    <motion.div
                        key={course.id}
                        variants={card}
                        whileHover={{ scale: 1.05, rotate: 0.3 }}
                        className="relative group rounded-2xl overflow-hidden shadow-xl bg-white"
                    >
                        {/* Image */}
                        <div className="relative h-52 overflow-hidden">
                            <Image
                                src={course.image}
                                alt={course.title}
                                fill
                                className="object-cover group-hover:scale-110 transition duration-700"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="p-5 space-y-2">
                            <h3 className="text-lg font-bold group-hover:text-blue-600">
                                {course.title}
                            </h3>

                            <p className="text-sm text-gray-500">
                                👨‍🏫 {course.instructor}
                            </p>

                            <div className="flex justify-between mt-2">
                                <span className="text-yellow-500 font-semibold">
                                    ⭐ {course.rating}
                                </span>
                                <span className="text-xs text-gray-400">
                                    Premium Course
                                </span>
                            </div>

                            <Link href={`/all-courses/${course.id}`}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-4 w-full py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white cursor-pointer"
                                >
                                    View Details →
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
