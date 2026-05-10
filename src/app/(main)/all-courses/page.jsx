"use client";
import { useEffect, useState } from "react";
import CourseCard from "@/lib/CourseCard";
import { allCourses } from "@/lib/data";
import { motion } from "framer-motion";

export default function CoursesPage() {
    const [courses, setCourses] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const loadCourses = async () => {
            const data = await allCourses();
            setCourses(data);
        };

        loadCourses();
    }, []);

    // FILTER COURSES
    const filteredCourses = courses.filter((course) =>
        course.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="py-20 bg-gradient-to-b from-white to-blue-50 min-h-screen">
            
            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12 px-4"
            >
                <h1 className="text-4xl font-bold text-gray-800">
                    🎓 All Courses
                </h1>

                <p className="text-gray-500 mt-2">
                    Explore all available courses
                </p>

                {/* SEARCH INPUT */}
                <div className="max-w-xl mx-auto mt-8">
                    <input
                        type="text"
                        placeholder="Search by course title..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-5 py-4 rounded-2xl bg-white shadow-lg outline-none border border-transparent focus:border-blue-400 transition text-gray-700"
                    />
                </div>
            </motion.div>

            {/* COURSES GRID */}
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-20">
                        <h2 className="text-2xl font-semibold text-gray-600">
                            😢 No courses found
                        </h2>

                        <p className="text-gray-400 mt-2">
                            Try searching with another title
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}