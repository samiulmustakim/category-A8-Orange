"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CourseCard({ course }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="rounded-2xl overflow-hidden shadow-lg bg-white group"
        >
            {/* Image */}
            <div className="relative h-48">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-5 space-y-2">
                <h3 className="font-bold text-lg group-hover:text-blue-600 transition">
                    {course.title}
                </h3>

                <p className="text-sm text-gray-500">👨‍🏫 {course.instructor}</p>

                <p className="text-yellow-500">⭐ {course.rating}</p>

                <Link href={`/all-courses/${course.id}`}>
                    <button className="mt-3 w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg">
                        View Details →
                    </button>
                </Link>
            </div>
        </motion.div>
    );
}
