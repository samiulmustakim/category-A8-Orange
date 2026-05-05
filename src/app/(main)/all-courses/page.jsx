import CourseCard from "@/lib/CourseCard";
import { allCourses } from "@/lib/data";

export default async function CoursesPage() {
  const courses = await allCourses();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          🎓 All Courses
        </h1>
        <p className="text-gray-500 mt-2">
          Explore all available courses
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

    </section>
  );
}